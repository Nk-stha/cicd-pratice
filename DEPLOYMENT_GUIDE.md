# 🚀 CI/CD Deployment Guide

Complete guide to set up automated deployment from GitHub to AWS EC2.

---

## 📋 Prerequisites

- [x] AWS Account with EC2 instance
- [x] Docker Hub account
- [x] GitHub repository
- [x] SSH key pair for EC2

---

## 🔧 Step 1: Prepare Your EC2 Instance

### 1.1 Launch EC2 Instance

```bash
# Recommended instance: t2.small or t3.small
# OS: Ubuntu 22.04 LTS
# Security Group: Allow ports 22 (SSH), 80 (HTTP), 443 (HTTPS)
```

### 1.2 Connect to EC2 and Install Docker

SSH into your EC2 instance and run:

```bash
# Update system
sudo apt update && sudo apt upgrade -y

# Install Docker
curl -fsSL https://get.docker.com -o get-docker.sh
sudo sh get-docker.sh

# Add your user to docker group
sudo usermod -aG docker $USER

# Start and enable Docker
sudo systemctl start docker
sudo systemctl enable docker

# Verify installation
docker --version

# Log out and log back in for group changes to take effect
exit
```

### 1.3 Create App Directory

```bash
mkdir -p ~/app
cd ~/app
```

---

## 🔑 Step 2: Configure GitHub Secrets

Go to your GitHub repository → **Settings** → **Secrets and variables** → **Actions** → **New repository secret**

Add the following secrets:

| Secret Name | Description | Example Value |
|-------------|-------------|---------------|
| `DOCKER_USERNAME` | Your Docker Hub username | `yourusername` |
| `DOCKER_PASSWORD` | Your Docker Hub password/token | `dckr_pat_xxxxx` |
| `EC2_HOST` | Your EC2 public IP or domain | `54.123.45.67` |
| `EC2_USERNAME` | EC2 SSH username | `ubuntu` (for Ubuntu) or `ec2-user` (for Amazon Linux) |
| `EC2_SSH_KEY` | Your EC2 private key | Copy entire content of `.pem` file |

### How to Add EC2_SSH_KEY:

```bash
# On your local machine
cat ~/path/to/your-key.pem

# Copy the ENTIRE output (including BEGIN and END lines)
# Paste into GitHub secret EC2_SSH_KEY
```

---

## 🐳 Step 3: Docker Hub Token Setup

### 3.1 Create Docker Hub Access Token

1. Go to [Docker Hub](https://hub.docker.com/)
2. Click your profile → **Account Settings**
3. Go to **Security** → **New Access Token**
4. Name: `github-actions-deploy`
5. Copy the token and use it as `DOCKER_PASSWORD` in GitHub secrets

---

## 🔒 Step 4: Configure EC2 Security Group

### Inbound Rules:

| Type | Protocol | Port Range | Source | Description |
|------|----------|------------|--------|-------------|
| SSH | TCP | 22 | Your IP | SSH access |
| HTTP | TCP | 80 | 0.0.0.0/0 | Web traffic |
| HTTPS | TCP | 443 | 0.0.0.0/0 | Secure web traffic |
| Custom TCP | TCP | 3000 | 0.0.0.0/0 | (Optional) Direct Next.js access |

---

## 🚀 Step 5: Deploy!

### Trigger Deployment

Simply push to the `main` branch:

```bash
git add .
git commit -m "Deploy to EC2"
git push origin main
```

### Or manually trigger:

1. Go to GitHub → **Actions**
2. Select **Deploy to AWS EC2** workflow
3. Click **Run workflow** → Select `main` branch
4. Click **Run workflow**

---

## 📊 Step 6: Monitor Deployment

### View GitHub Actions Logs

1. Go to your repository on GitHub
2. Click **Actions** tab
3. Click on the latest workflow run
4. Expand each job to see detailed logs

### Check EC2 Container Status

SSH into EC2:

```bash
ssh -i your-key.pem ubuntu@your-ec2-ip

# Check if container is running
docker ps

# View container logs
docker logs nextjs-app

# Follow logs in real-time
docker logs -f nextjs-app
```

---

## 🌐 Access Your Application

After successful deployment:

```
http://YOUR-EC2-PUBLIC-IP
```

Find your EC2 public IP:
- AWS Console → EC2 → Instances → Select your instance → Copy **Public IPv4 address**

---

## 🔧 Troubleshooting

### Issue: Docker command not found on EC2

```bash
# Reinstall Docker
curl -fsSL https://get.docker.com -o get-docker.sh
sudo sh get-docker.sh
```

### Issue: Permission denied (SSH)

```bash
# Check your .pem file permissions
chmod 400 your-key.pem

# Verify SSH connection
ssh -i your-key.pem -v ubuntu@your-ec2-ip
```

### Issue: Container fails to start

```bash
# Check container logs
docker logs nextjs-app

# Check available disk space
df -h

# Check memory
free -h
```

### Issue: Port 80 already in use

```bash
# Check what's using port 80
sudo lsof -i :80

# Stop the service (if Apache/Nginx)
sudo systemctl stop apache2
# or
sudo systemctl stop nginx
```

---

## 🔄 Rollback to Previous Version

```bash
# SSH into EC2
ssh -i your-key.pem ubuntu@your-ec2-ip

# Stop current container
docker stop nextjs-app
docker rm nextjs-app

# Pull and run a specific version
docker run -d \
  --name nextjs-app \
  --restart unless-stopped \
  -p 80:3000 \
  -e NODE_ENV=production \
  yourusername/nextjs-app:COMMIT_SHA_HERE
```

---

## 📈 Next Steps

### Add HTTPS with Let's Encrypt

```bash
# Install Nginx as reverse proxy
sudo apt install nginx -y

# Install Certbot
sudo apt install certbot python3-certbot-nginx -y

# Get SSL certificate
sudo certbot --nginx -d yourdomain.com
```

### Add Environment Variables

Update the workflow file to pass env vars:

```yaml
docker run -d \
  --name nextjs-app \
  -p 80:3000 \
  -e NODE_ENV=production \
  -e DATABASE_URL="${{ secrets.DATABASE_URL }}" \
  -e API_KEY="${{ secrets.API_KEY }}" \
  yourusername/nextjs-app:latest
```

### Set Up Monitoring

```bash
# Install Docker stats monitoring
docker stats nextjs-app

# Or use cloud monitoring
# - AWS CloudWatch
# - Datadog
# - New Relic
```

---

## 🎯 Summary

1. ✅ Prepare EC2 with Docker installed
2. ✅ Configure GitHub repository secrets
3. ✅ Push to `main` branch
4. ✅ GitHub Actions automatically builds and deploys
5. ✅ Access your app via EC2 public IP

**Your CI/CD pipeline is now live! 🎉**
