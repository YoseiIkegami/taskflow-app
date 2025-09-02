# 🚀 Deployment Guide

This guide explains how to deploy TaskFlow without renting servers, using free hosting services.

## 📋 Deployment Architecture

```
Frontend (React) → Vercel (Free)
Backend (Laravel) → Railway (Free)
Database → Supabase (Free)
```

## 🌐 Frontend Deployment (Vercel)

### 1. Push to GitHub
```bash
cd frontend
git add .
git commit -m "Add Vercel deployment config"
git push origin main
```

### 2. Connect to Vercel
1. Go to [vercel.com](https://vercel.com)
2. Sign up with GitHub
3. Import your repository
4. Set build settings:
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`

### 3. Environment Variables
Add these in Vercel dashboard:
```
VITE_API_URL=https://your-backend-url.railway.app
VITE_APP_NAME=TaskFlow
```

## 🔧 Backend Deployment (Railway)

### 1. Prepare for Railway
```bash
cd backend
# Add railway.json
echo '{
  "build": {
    "builder": "NIXPACKS"
  },
  "deploy": {
    "startCommand": "php artisan serve --host=0.0.0.0 --port=$PORT",
    "healthcheckPath": "/api/health"
  }
}' > railway.json

git add .
git commit -m "Add Railway deployment config"
git push origin main
```

### 2. Deploy to Railway
1. Go to [railway.app](https://railway.app)
2. Sign up with GitHub
3. Create new project from GitHub repo
4. Add PostgreSQL database
5. Set environment variables:
```
APP_ENV=production
APP_DEBUG=false
DB_CONNECTION=pgsql
DB_HOST=${{Postgres.PGHOST}}
DB_PORT=${{Postgres.PGPORT}}
DB_DATABASE=${{Postgres.PGDATABASE}}
DB_USERNAME=${{Postgres.PGUSER}}
DB_PASSWORD=${{Postgres.PGPASSWORD}}
```

## 🗄️ Database (Supabase Alternative)

### Option 1: Railway PostgreSQL (Recommended)
- Included with Railway deployment
- No additional setup needed

### Option 2: Supabase
1. Go to [supabase.com](https://supabase.com)
2. Create new project
3. Get connection string
4. Update Railway environment variables

## 🔄 GitHub Actions (Optional)

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to Vercel and Railway

on:
  push:
    branches: [main]

jobs:
  deploy-frontend:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Deploy to Vercel
        uses: amondnet/vercel-action@v20
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.ORG_ID }}
          vercel-project-id: ${{ secrets.PROJECT_ID }}
          working-directory: ./frontend

  deploy-backend:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Deploy to Railway
        uses: railway-app/railway-deploy@v1
        with:
          railway-token: ${{ secrets.RAILWAY_TOKEN }}
          service: backend
```

## 🌍 Custom Domain (Optional)

### Vercel Custom Domain
1. Go to Vercel dashboard
2. Select your project
3. Go to Settings → Domains
4. Add your domain
5. Update DNS records

### Railway Custom Domain
1. Go to Railway dashboard
2. Select your service
3. Go to Settings → Domains
4. Add custom domain

## 📊 Monitoring

### Vercel Analytics
- Built-in analytics
- Performance monitoring
- Real user metrics

### Railway Metrics
- CPU and memory usage
- Request logs
- Error tracking

## 💰 Cost Breakdown

| Service | Free Tier | Paid Plans |
|---------|-----------|------------|
| Vercel | 100GB bandwidth/month | $20/month |
| Railway | $5 credit/month | $5/month |
| Supabase | 500MB database | $25/month |

**Total Free Usage**: Unlimited for small projects!

## 🔧 Local Development

```bash
# Frontend
cd frontend
npm install
npm run dev

# Backend
cd backend
composer install
php artisan serve

# Database
# Use SQLite for local development
```

## 🚨 Troubleshooting

### Common Issues

1. **CORS Errors**
   - Update `config/cors.php` in Laravel
   - Add Vercel domain to allowed origins

2. **Environment Variables**
   - Check all required variables are set
   - Restart services after changes

3. **Database Connection**
   - Verify connection string
   - Check database is accessible

4. **Build Failures**
   - Check Node.js version compatibility
   - Verify all dependencies are installed

## 📚 Additional Resources

- [Vercel Documentation](https://vercel.com/docs)
- [Railway Documentation](https://docs.railway.app)
- [Laravel Deployment Guide](https://laravel.com/docs/deployment)
- [React Deployment Guide](https://create-react-app.dev/docs/deployment)

---

**Happy Deploying! 🎉**
