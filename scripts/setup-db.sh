#!/bin/bash

# Database setup script for PostgreSQL
set -e

echo "🗄️  Setting up PostgreSQL database..."

# Check if flyctl is installed and user is logged in
if ! command -v flyctl &> /dev/null; then
    echo "❌ flyctl is not installed. Please install it first:"
    echo "   curl -L https://fly.io/install.sh | sh"
    exit 1
fi

if ! flyctl auth whoami &> /dev/null; then
    echo "🔐 Please log in to Fly.io first:"
    echo "   flyctl auth login"
    exit 1
fi

# Create PostgreSQL database
echo "📦 Creating PostgreSQL database..."
flyctl postgres create --name dry-hood-db --org personal --region mad --initial-cluster-size 1 --vm-size shared-cpu-1x --volume-size 1

# Get the database name from the output
DB_NAME=$(flyctl postgres list --org personal | grep dry-hood-db | awk '{print $1}')

if [ -z "$DB_NAME" ]; then
    echo "❌ Failed to get database name"
    exit 1
fi

echo "🔗 Attaching database to app..."
flyctl postgres attach $DB_NAME --app dry-hood-mapa-playas-v1

echo "✅ Database setup completed!"
echo "📋 Database name: $DB_NAME"
echo "🔐 The DATABASE_URL will be automatically set as a secret"
