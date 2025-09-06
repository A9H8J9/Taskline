/*
  Warnings:

  - A unique constraint covering the columns `[name,user_id]` on the table `projects` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `projects_name_user_id_key` ON `projects`(`name`, `user_id`);
