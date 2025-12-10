# Environment Variables Setup

This project uses environment variables for configuration. Follow these steps:

## 🚀 Quick Setup

```bash
# 1. Copy the example file
cp .env.example .env

# 2. Edit .env with your actual values
nano .env
```

## 📝 Required Variables

### For Docker Hub

| Variable | Description | Where to Get It |
|----------|-------------|-----------------|
| `DOCKER_USERNAME` | Your Docker Hub username | [hub.docker.com](https://hub.docker.com) → Sign up/Login |
| `DOCKER_PASSWORD` | Docker Hub access token | Profile → Account Settings → Security → New Access Token |

### For AWS EC2

| Variable | Description | Where to Get It |
|----------|-------------|-----------------|
| `EC2_HOST` | EC2 public IP address | AWS Console → EC2 → Instance → Public IPv4 |
| `EC2_USERNAME` | SSH username | `ubuntu` for Ubuntu, `ec2-user` for Amazon Linux |
| `EC2_SSH_KEY_PATH` | Path to your .pem file | Path where you saved the EC2 key pair |

## 🔐 Security Notes

- ⚠️ **Never commit `.env` to Git** - It's already in `.gitignore`
- ✅ **Commit `.env.example`** - Safe template without real credentials
- 🔑 **Use access tokens** - Not passwords, for Docker Hub

## 📋 Example Configuration

```bash
# .env (your actual config)
DOCKER_USERNAME=rohan-shrestha
DOCKER_PASSWORD=dckr_pat_abc123xyz...
EC2_HOST=54.123.45.67
EC2_USERNAME=ubuntu
EC2_SSH_KEY_PATH=~/.ssh/my-ec2-key.pem
APP_NAME=nextjs-app
PORT=3000
```

## 🛠️ Usage

The `.env` file is automatically loaded by:

- **`scripts/quick-deploy.sh`** - For manual deployments
- **Docker Compose** - For local development

### GitHub Actions

For GitHub Actions, add these as **Secrets** instead:
- Go to Repository → Settings → Secrets and variables → Actions
- Add each variable as a separate secret

## ✅ Checklist

- [ ] Created `.env` from `.env.example`
- [ ] Added Docker Hub username and token
- [ ] Added EC2 host IP and username
- [ ] Added path to SSH key file
- [ ] Verified `.env` is in `.gitignore`
- [ ] Added same values to GitHub Secrets (for CI/CD)
