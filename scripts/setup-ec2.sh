#!/bin/bash

# ==========================================
# EC2 Setup Script for Next.js Deployment
# Run this on your fresh EC2 instance
# ==========================================

set -e  # Exit on error

echo "🚀 Starting EC2 setup for Next.js deployment..."

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# ==========================================
# Step 1: Update System
# ==========================================
echo -e "${YELLOW}📦 Updating system packages...${NC}"
sudo apt update && sudo apt upgrade -y

# ==========================================
# Step 2: Install Docker
# ==========================================
echo -e "${YELLOW}🐳 Installing Docker...${NC}"

# Remove old versions if any
sudo apt remove docker docker-engine docker.io containerd runc 2>/dev/null || true

# Install Docker using official script
curl -fsSL https://get.docker.com -o get-docker.sh
sudo sh get-docker.sh
rm get-docker.sh

# Add current user to docker group
sudo usermod -aG docker $USER

# Start and enable Docker
sudo systemctl start docker
sudo systemctl enable docker

echo -e "${GREEN}✅ Docker installed successfully${NC}"

# ==========================================
# Step 3: Install Docker Compose
# ==========================================
echo -e "${YELLOW}📦 Installing Docker Compose...${NC}"

DOCKER_COMPOSE_VERSION=$(curl -s https://api.github.com/repos/docker/compose/releases/latest | grep 'tag_name' | cut -d\" -f4)
sudo curl -L "https://github.com/docker/compose/releases/download/${DOCKER_COMPOSE_VERSION}/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose

echo -e "${GREEN}✅ Docker Compose installed${NC}"

# ==========================================
# Step 4: Create App Directory
# ==========================================
echo -e "${YELLOW}📁 Creating app directory...${NC}"
mkdir -p ~/app
cd ~/app

echo -e "${GREEN}✅ App directory created at ~/app${NC}"

# ==========================================
# Step 5: Configure Firewall (UFW)
# ==========================================
echo -e "${YELLOW}🔥 Configuring firewall...${NC}"

sudo apt install ufw -y
sudo ufw allow 22/tcp    # SSH
sudo ufw allow 80/tcp    # HTTP
sudo ufw allow 443/tcp   # HTTPS
sudo ufw --force enable

echo -e "${GREEN}✅ Firewall configured${NC}"

# ==========================================
# Step 6: Install Nginx (Optional - for reverse proxy)
# ==========================================
read -p "Do you want to install Nginx as reverse proxy? (y/n) " -n 1 -r
echo
if [[ $REPLY =~ ^[Yy]$ ]]
then
    echo -e "${YELLOW}📦 Installing Nginx...${NC}"
    sudo apt install nginx -y
    sudo systemctl start nginx
    sudo systemctl enable nginx
    
    # Create basic Nginx config
    sudo tee /etc/nginx/sites-available/nextjs > /dev/null <<EOF
server {
    listen 80;
    server_name _;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade \$http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host \$host;
        proxy_cache_bypass \$http_upgrade;
        proxy_set_header X-Real-IP \$remote_addr;
        proxy_set_header X-Forwarded-For \$proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto \$scheme;
    }
}
EOF
    
    sudo ln -sf /etc/nginx/sites-available/nextjs /etc/nginx/sites-enabled/
    sudo rm -f /etc/nginx/sites-enabled/default
    sudo nginx -t
    sudo systemctl reload nginx
    
    echo -e "${GREEN}✅ Nginx installed and configured${NC}"
fi

# ==========================================
# Step 7: Install monitoring tools
# ==========================================
echo -e "${YELLOW}📊 Installing monitoring tools...${NC}"
sudo apt install htop net-tools -y

# ==========================================
# Step 8: Verify Installation
# ==========================================
echo -e "${YELLOW}🔍 Verifying installation...${NC}"

docker --version
docker compose version

echo -e "${GREEN}✅ All installations verified${NC}"

# ==========================================
# Summary
# ==========================================
echo ""
echo -e "${GREEN}========================================${NC}"
echo -e "${GREEN}🎉 EC2 Setup Complete!${NC}"
echo -e "${GREEN}========================================${NC}"
echo ""
echo -e "Next steps:"
echo -e "  1. ${YELLOW}Log out and log back in${NC} for Docker group changes to take effect"
echo -e "  2. Configure GitHub secrets in your repository"
echo -e "  3. Push to main branch to trigger deployment"
echo ""
echo -e "Useful commands:"
echo -e "  • Check Docker: ${YELLOW}docker ps${NC}"
echo -e "  • View logs: ${YELLOW}docker logs nextjs-app${NC}"
echo -e "  • Monitor system: ${YELLOW}htop${NC}"
echo ""
echo -e "${RED}⚠️  IMPORTANT: Log out and log back in now!${NC}"
echo -e "Run: ${YELLOW}exit${NC} then reconnect via SSH"
echo ""
