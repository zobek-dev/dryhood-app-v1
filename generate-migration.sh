#!/bin/bash

echo "🔨 Generating Prisma migration for SQLite..."

# Set the database URL for SQLite
export DATABASE_URL="file:./prisma/dev.sqlite"

# Generate the migration
npx prisma migrate dev --name init

echo "✅ Migration generated successfully!"

