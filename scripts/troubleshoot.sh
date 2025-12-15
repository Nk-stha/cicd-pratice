#!/bin/bash

# ==========================================
# Troubleshooting Script for EC2 Deployment
# Run this on your EC2 instance
# ==========================================

echo "🔍 Running diagnostics..."
echo "==========================================\n"

# Colors
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m'

# ==========================================
# 1. Check Docker Status
# ==========================================
echo -e "${BLUE}1. Checking Docker status...${NC}"
if systemctl is-active --quiet docker; then
    echo -e "${GREEN}✅ Docker is running${NC}"
else
    echo -e "${RED}❌ Docker is NOT running${NC}"
    echo "   Fix: sudo systemctl start docker"
fi
echo ""

# ==========================================
# 2. Check if Container is Running
# ==========================================
echo -e "${BLUE}2. Checking if nextjs-app container is running...${NC}"
if docker ps | grep -q nextjs-app; then
    echo -e "${GREEN}✅ Container is running${NC}"
    docker ps | grep nextjs-app
else
    echo -e "${RED}❌ Container is NOT running${NC}"
    
    # Check if container exists but is stopped
    if docker ps -a | grep -q nextjs-app; then
        echo -e "${YELLOW}⚠️  Container exists but is stopped${NC}"
        echo "   Last logs:"
        docker logs --tail 20 nextjs-app
        echo ""
        echo "   Fix: docker start nextjs-app"
    else
        echo -e "${RED}❌ Container does not exist${NC}"
        echo "   Fix: Deploy using GitHub Actions or run deploy script"
    fi
fi
echo ""

# ==========================================
# 3. Check Port Bindings
# ==========================================
echo -e "${BLUE}3. Checking port bindings...${NC}"
PORT_BINDING=$(docker ps | grep nextjs-app | grep -o '[0-9]*:3000' || echo "none")
if [ "$PORT_BINDING" != "none" ]; then
    echo -e "${GREEN}✅ Port binding: $PORT_BINDING${NC}"
else
    echo -e "${RED}❌ No port binding found${NC}"
fi
echo ""

# ==========================================
# 4. Test Local Connection (on EC2)
# ==========================================
echo -e "${BLUE}4. Testing local connection (localhost:3000)...${NC}"
if command -v curl &> /dev/null; then
    HTTP_CODE=$(curl -s -o /dev/null -w "%{http_code}" http://localhost:3000 --connect-timeout 5)
    if [ "$HTTP_CODE" = "200" ]; then
        echo -e "${GREEN}✅ App responds on localhost:3000 (HTTP $HTTP_CODE)${NC}"
    else
        echo -e "${RED}❌ App not responding on localhost:3000 (HTTP $HTTP_CODE)${NC}"
    fi
else
    echo -e "${YELLOW}⚠️  curl not installed, skipping local test${NC}"
fi
echo ""

# ==========================================
# 5. Check Firewall (UFW)
# ==========================================
echo -e "${BLUE}5. Checking UFW firewall...${NC}"
if command -v ufw &> /dev/null; then
    UFW_STATUS=$(sudo ufw status | grep -i "^Status:" | awk '{print $2}')
    if [ "$UFW_STATUS" = "active" ]; then
        echo -e "${YELLOW}⚠️  UFW is active${NC}"
        echo "   Port 3000 rules:"
        sudo ufw status | grep 3000 || echo -e "${RED}   ❌ No rule for port 3000${NC}"
        echo ""
        echo -e "${YELLOW}   To allow port 3000:${NC}"
        echo "   sudo ufw allow 3000/tcp"
    else
        echo -e "${GREEN}✅ UFW is inactive (not blocking)${NC}"
    fi
else
    echo -e "${GREEN}✅ UFW not installed${NC}"
fi
echo ""

# ==========================================
# 6. Check What's Using Port 3000
# ==========================================
echo -e "${BLUE}6. Checking what's using port 3000...${NC}"
if command -v lsof &> /dev/null; then
    PORTS=$(sudo lsof -i :3000 -P -n | tail -n +2)
    if [ -n "$PORTS" ]; then
        echo -e "${GREEN}✅ Port 3000 is in use:${NC}"
        sudo lsof -i :3000 -P -n
    else
        echo -e "${RED}❌ Nothing is using port 3000${NC}"
        echo "   This means the app is not running or not bound to port 3000"
    fi
else
    echo -e "${YELLOW}⚠️  lsof not installed${NC}"
    echo "   Install: sudo apt install lsof"
fi
echo ""

# ==========================================
# 7. Get Public IP
# ==========================================
echo -e "${BLUE}7. Getting public IP...${NC}"
PUBLIC_IP=$(curl -s http://checkip.amazonaws.com)
if [ -n "$PUBLIC_IP" ]; then
    echo -e "${GREEN}✅ Public IP: $PUBLIC_IP${NC}"
    echo -e "${BLUE}   Access URL: http://$PUBLIC_IP:3000${NC}"
else
    echo -e "${RED}❌ Could not get public IP${NC}"
fi
echo ""

# ==========================================
# 8. Check Container Logs
# ==========================================
echo -e "${BLUE}8. Recent container logs (last 10 lines)...${NC}"
if docker ps | grep -q nextjs-app; then
    docker logs --tail 10 nextjs-app
else
    echo -e "${YELLOW}⚠️  Container not running, cannot show logs${NC}"
fi
echo ""

# ==========================================
# Summary
# ==========================================
echo "=========================================="
echo -e "${BLUE}📋 Summary & Checklist${NC}"
echo "=========================================="
echo ""
echo "✓ Things to verify:"
echo "  1. GitHub Actions workflow completed successfully"
echo "  2. EC2 Security Group allows inbound TCP port 3000"
echo "  3. Container is running: docker ps | grep nextjs-app"
echo "  4. UFW allows port 3000: sudo ufw allow 3000/tcp"
echo "  5. Try accessing: http://$PUBLIC_IP:3000"
echo ""
echo -e "${YELLOW}Common fixes:${NC}"
echo "  • Restart container: docker restart nextjs-app"
echo "  • View full logs: docker logs -f nextjs-app"
echo "  • Allow firewall: sudo ufw allow 3000/tcp"
echo "  • Redeploy: Push to main branch"
echo ""
