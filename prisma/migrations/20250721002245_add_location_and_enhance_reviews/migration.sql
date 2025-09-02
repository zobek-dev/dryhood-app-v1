/*
  Warnings:

  - Added the required column `city` to the `Beach` table without a default value. This is not possible if the table is not empty.
  - Added the required column `country` to the `Beach` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userName` to the `Review` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Beach" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "shop" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "coordinates" TEXT NOT NULL,
    "pageId" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "Beach_pageId_fkey" FOREIGN KEY ("pageId") REFERENCES "Page" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Beach" ("coordinates", "createdAt", "id", "name", "pageId", "shop", "updatedAt", "country", "city") 
SELECT "coordinates", "createdAt", "id", "name", "pageId", "shop", "updatedAt", 'Unknown', 'Unknown' FROM "Beach";
DROP TABLE "Beach";
ALTER TABLE "new_Beach" RENAME TO "Beach";
CREATE UNIQUE INDEX "Beach_pageId_key" ON "Beach"("pageId");

CREATE TABLE "new_Review" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "shop" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "userEmail" TEXT NOT NULL,
    "userName" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "stars" INTEGER NOT NULL,
    "isPublished" BOOLEAN NOT NULL DEFAULT false,
    "images" TEXT,
    "beachId" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "Review_beachId_fkey" FOREIGN KEY ("beachId") REFERENCES "Beach" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Review" ("beachId", "content", "createdAt", "id", "shop", "stars", "title", "updatedAt", "userEmail", "userId", "userName", "isPublished") 
SELECT "beachId", "content", "createdAt", "id", "shop", "stars", "title", "updatedAt", "userEmail", "userId", "userEmail", false FROM "Review";
DROP TABLE "Review";
ALTER TABLE "new_Review" RENAME TO "Review";
CREATE INDEX "Review_shop_userId_idx" ON "Review"("shop", "userId");
CREATE INDEX "Review_beachId_isPublished_idx" ON "Review"("beachId", "isPublished");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
