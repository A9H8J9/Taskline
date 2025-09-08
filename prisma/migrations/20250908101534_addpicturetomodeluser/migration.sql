/*
  Warnings:

  - A unique constraint covering the columns `[user_id,project_id]` on the table `projectMembers` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE `taskMessages` ADD COLUMN `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3);

-- AlterTable
ALTER TABLE `users` ADD COLUMN `picture` VARCHAR(191) NULL DEFAULT '';

-- CreateIndex
CREATE UNIQUE INDEX `projectMembers_user_id_project_id_key` ON `projectMembers`(`user_id`, `project_id`);
