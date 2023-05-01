/*
  Warnings:

  - The primary key for the `uploads` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `_id` on the `uploads` table. All the data in the column will be lost.
  - You are about to drop the column `creat_at` on the `uploads` table. All the data in the column will be lost.
  - The required column `id` was added to the `uploads` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.

*/
-- AlterTable
ALTER TABLE `uploads` DROP PRIMARY KEY,
    DROP COLUMN `_id`,
    DROP COLUMN `creat_at`,
    ADD COLUMN `id` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`id`);
