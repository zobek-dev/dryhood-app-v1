/*
  Warnings:

  - Added the required column `shop` to the `Beach` table without a default value. This is not possible if the table is not empty.
  - Added the required column `shop` to the `Page` table without a default value. This is not possible if the table is not empty.
  - Added the required column `shop` to the `Review` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Beach" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "shop" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "coordinates" TEXT NOT NULL,
    "pageId" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "Beach_pageId_fkey" FOREIGN KEY ("pageId") REFERENCES "Page" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Beach" ("coordinates", "createdAt", "id", "name", "pageId", "updatedAt") SELECT "coordinates", "createdAt", "id", "name", "pageId", "updatedAt" FROM "Beach";
DROP TABLE "Beach";
ALTER TABLE "new_Beach" RENAME TO "Beach";
CREATE UNIQUE INDEX "Beach_pageId_key" ON "Beach"("pageId");
CREATE TABLE "new_Page" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "shop" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "shopifyId" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
INSERT INTO "new_Page" ("createdAt", "id", "shopifyId", "slug", "title", "updatedAt") SELECT "createdAt", "id", "shopifyId", "slug", "title", "updatedAt" FROM "Page";
DROP TABLE "Page";
ALTER TABLE "new_Page" RENAME TO "Page";
CREATE UNIQUE INDEX "Page_shopifyId_key" ON "Page"("shopifyId");
CREATE TABLE "new_Review" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "shop" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "userEmail" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "stars" INTEGER NOT NULL,
    "beachId" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "Review_beachId_fkey" FOREIGN KEY ("beachId") REFERENCES "Beach" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Review" ("beachId", "content", "createdAt", "id", "stars", "title", "updatedAt", "userEmail", "userId") SELECT "beachId", "content", "createdAt", "id", "stars", "title", "updatedAt", "userEmail", "userId" FROM "Review";
DROP TABLE "Review";
ALTER TABLE "new_Review" RENAME TO "Review";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
