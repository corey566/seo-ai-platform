/*
  Warnings:

  - You are about to drop the column `issues` on the `PageVersion` table. All the data in the column will be lost.
  - You are about to drop the column `suggestions` on the `PageVersion` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "PageVersion" DROP COLUMN "issues",
DROP COLUMN "suggestions";
