# Deployment Guide

## Overview

This guide covers deploying the Ascend Valet application to production.

## Prerequisites

- Node.js 14+
- npm
- Git
- Access to deployment platform (e.g., Heroku, Vercel, AWS)

## Building the Application

1. Ensure all dependencies are installed:
   ```
   npm install
   ```

2. Build the production version:
   ```
   npm run build
   ```

3. The `dist/` or `build/` folder will contain the production files.

## Deployment Options

### Option 1: Vercel (Recommended for static sites)

1. Connect your repository to Vercel.
2. Set build command: `npm run build`
3. Set output directory: `dist`
4. Deploy.

### Option 2: Heroku (For Node.js apps)

1. Create a `Procfile`:
   ```
   web: npm start
   ```

2. Set environment variables in Heroku dashboard.
3. Deploy via Git.

### Option 3: AWS

1. Use AWS Amplify or EC2.
2. Upload build files to S3 or configure CI/CD.

## Environment Variables

Set the following in your deployment platform:

- `NODE_ENV=production`
- `DATABASE_URL=<your-database-url>`
- `JWT_SECRET=<your-secret>`
- `API_KEY=<if-applicable>`

## Post-Deployment

1. Run database migrations if applicable.
2. Test all endpoints.
3. Monitor logs for errors.
4. Set up monitoring and alerts.

## Rollback

If issues arise:
1. Revert to previous commit.
2. Redeploy.
3. Check logs for root cause.
