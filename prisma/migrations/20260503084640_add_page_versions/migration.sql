/*
  Warnings:

  - You are about to drop the column `language` on the `Site` table. All the data in the column will be lost.
  - You are about to drop the `Keyword` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[url]` on the table `Page` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `updatedAt` to the `Page` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Keyword" DROP CONSTRAINT "Keyword_siteId_fkey";

-- AlterTable
ALTER TABLE "Page" ADD COLUMN     "description" TEXT,
ADD COLUMN     "h1" TEXT,
ADD COLUMN     "h2" JSONB,
ADD COLUMN     "h3" JSONB,
ADD COLUMN     "intent" TEXT,
ADD COLUMN     "keywords" JSONB,
ADD COLUMN     "lastCrawledAt" TIMESTAMP(3),
ADD COLUMN     "performance" INTEGER,
ADD COLUMN     "seoScore" INTEGER,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "uxScore" INTEGER,
ADD COLUMN     "wordCount" INTEGER;

-- AlterTable
ALTER TABLE "Site" DROP COLUMN "language",
ADD COLUMN     "pagesCount" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "progress" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "seoScore" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "status" TEXT NOT NULL DEFAULT 'pending';

-- DropTable
DROP TABLE "Keyword";

-- CreateTable
CREATE TABLE "PageVersion" (
    "id" TEXT NOT NULL,
    "pageId" TEXT NOT NULL,
    "version" INTEGER NOT NULL,
    "url" TEXT NOT NULL,
    "title" TEXT,
    "description" TEXT,
    "h1" TEXT,
    "h2" JSONB,
    "h3" JSONB,
    "wordCount" INTEGER,
    "content" TEXT,
    "keywords" JSONB,
    "intent" TEXT,
    "seoScore" INTEGER,
    "uxScore" INTEGER,
    "performance" INTEGER,
    "issues" JSONB,
    "suggestions" JSONB,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "PageVersion_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Page_url_key" ON "Page"("url");

-- AddForeignKey
ALTER TABLE "PageVersion" ADD CONSTRAINT "PageVersion_pageId_fkey" FOREIGN KEY ("pageId") REFERENCES "Page"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
