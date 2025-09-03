#!/bin/bash

# Deploy script for Fly.io
set -e

echo "🚀 Starting deployment to Fly.io..."

# Check if flyctl is installed
if ! command -v flyctl &> /dev/null; then
    echo "❌ flyctl is not installed. Please install it first:"
    echo "   curl -L https://fly.io/install.sh | sh"
    exit 1
fi

# Check if user is logged in
if ! flyctl auth whoami &> /dev/null; then
    echo "🔐 Please log in to Fly.io first:"
    echo "   flyctl auth login"
    exit 1
fi

# Build the application
echo "🔨 Building application..."
npm run build

# Deploy to Fly.io
echo "📦 Deploying to Fly.io..."
flyctl deploy

echo "✅ Deployment completed!"
echo "🌐 Your app should be available at: https://dry-hood-mapa-playas-v1.fly.dev"
