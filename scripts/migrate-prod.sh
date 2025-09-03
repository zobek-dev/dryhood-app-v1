#!/bin/bash

# Production database migration script
set -e

echo "🔄 Running production database migrations..."

# Check if we're in the right directory
if [ ! -f "prisma/schema.prisma" ]; then
    echo "❌ Please run this script from the project root directory"
    exit 1
fi

# Generate Prisma client
echo "🔨 Generating Prisma client..."
npx prisma generate

# Run migrations
echo "📊 Running database migrations..."
npx prisma migrate deploy

echo "✅ Production migrations completed!"
echo "🔍 You can verify the database schema with: npx prisma studio"
