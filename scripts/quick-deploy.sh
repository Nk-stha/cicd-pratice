#!/bin/bash

# ==========================================
# Quick Deploy Script
# Manual deployment to EC2 without GitHub Actions
# ==========================================

set -e

# Colors
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m'

# Load environment variables from .env if it exists
if [ -f .env ]; then
    echo -e "${GREEN}📝 Loading configuration from .env file...${NC}"
    export $(cat .env | grep -v '^#' | xargs)
fi

# Configuration
APP_NAME="nextjs-app"
DOCKER_USERNAME="${DOCKER_USERNAME:-yourusername}"
IMAGE_NAME="${DOCKER_USERNAME}/${APP_NAME}"

echo -e "${BLUE}========================================${NC}"
echo -e "${BLUE}🚀 Quick Deploy Script${NC}"
echo -e "${BLUE}========================================${NC}"
echo ""

# ==========================================
# Step 1: Build Docker Image
# ==========================================
echo -e "${YELLOW}📦 Building Docker image...${NC}"
docker build -t ${IMAGE_NAME}:latest .

echo -e "${GREEN}✅ Image built successfully${NC}"

# ==========================================
# Step 2: Test Image Locally (Optional)
# ==========================================
read -p "Do you want to test the image locally first? (y/n) " -n 1 -r
echo
if [[ $REPLY =~ ^[Yy]$ ]]
then
    echo -e "${YELLOW}🧪 Starting test container...${NC}"
    docker stop ${APP_NAME}-test 2>/dev/null || true
    docker rm ${APP_NAME}-test 2>/dev/null || true
    
    docker run -d \
        --name ${APP_NAME}-test \
        -p 3000:3000 \
        ${IMAGE_NAME}:latest
    
    echo -e "${GREEN}✅ Test container running on http://localhost:3000${NC}"
    echo -e "${YELLOW}Press Enter to continue with deployment (or Ctrl+C to cancel)...${NC}"
    read
    
    docker stop ${APP_NAME}-test
    docker rm ${APP_NAME}-test
fi

# ==========================================
# Step 3: Push to Docker Hub
# ==========================================
echo -e "${YELLOW}🐳 Pushing to Docker Hub...${NC}"

# Login to Docker Hub
echo -e "${YELLOW}Please login to Docker Hub:${NC}"
docker login

# Tag and push
docker tag ${IMAGE_NAME}:latest ${IMAGE_NAME}:$(date +%Y%m%d-%H%M%S)
docker push ${IMAGE_NAME}:latest
docker push ${IMAGE_NAME}:$(date +%Y%m%d-%H%M%S)

echo -e "${GREEN}✅ Image pushed to Docker Hub${NC}"

# ==========================================
# Step 4: Deploy to EC2
# ==========================================
echo ""
echo -e "${YELLOW}📡 Deploy to EC2? (requires SSH access)${NC}"
read -p "Enter EC2 host (IP or domain) or press Enter to skip: " EC2_HOST

if [ -n "$EC2_HOST" ]; then
    read -p "Enter SSH username [ubuntu]: " EC2_USER
    EC2_USER=${EC2_USER:-ubuntu}
    
    read -p "Enter path to SSH key [~/.ssh/id_rsa]: " SSH_KEY
    SSH_KEY=${SSH_KEY:-~/.ssh/id_rsa}
    
    echo -e "${YELLOW}🚀 Deploying to ${EC2_HOST}...${NC}"
    
    ssh -i ${SSH_KEY} ${EC2_USER}@${EC2_HOST} << EOF
        set -e
        
        echo "Pulling latest image..."
        docker pull ${IMAGE_NAME}:latest
        
        echo "Stopping existing container..."
        docker stop ${APP_NAME} 2>/dev/null || true
        docker rm ${APP_NAME} 2>/dev/null || true
        
        echo "Starting new container..."
        docker run -d \
            --name ${APP_NAME} \
            --restart unless-stopped \
            -p 80:3000 \
            -e NODE_ENV=production \
            ${IMAGE_NAME}:latest
        
        echo "Cleaning up old images..."
        docker image prune -af
        
        echo "Verifying deployment..."
        sleep 3
        docker ps | grep ${APP_NAME}
        
        echo "✅ Deployment complete!"
EOF
    
    echo ""
    echo -e "${GREEN}========================================${NC}"
    echo -e "${GREEN}🎉 Deployment Successful!${NC}"
    echo -e "${GREEN}========================================${NC}"
    echo ""
    echo -e "Your app is now live at: ${BLUE}http://${EC2_HOST}${NC}"
    echo ""
else
    echo -e "${YELLOW}Skipping EC2 deployment${NC}"
fi

echo ""
echo -e "${GREEN}Done! 🎉${NC}"
