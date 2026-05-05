-- AlterTable
ALTER TABLE "Page" ADD COLUMN     "accessibility" JSONB,
ADD COLUMN     "images" JSONB,
ADD COLUMN     "indexing" JSONB,
ADD COLUMN     "links" JSONB,
ADD COLUMN     "pageSpeed" JSONB,
ADD COLUMN     "sections" JSONB,
ADD COLUMN     "technical" JSONB;

-- AlterTable
ALTER TABLE "PageVersion" ADD COLUMN     "accessibility" JSONB,
ADD COLUMN     "images" JSONB,
ADD COLUMN     "indexing" JSONB,
ADD COLUMN     "links" JSONB,
ADD COLUMN     "pageSpeed" JSONB,
ADD COLUMN     "sections" JSONB,
ADD COLUMN     "technical" JSONB;
