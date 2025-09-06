/*
  Warnings:

  - Added the required column `task_name` to the `taskMessages` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `taskMessages` ADD COLUMN `task_name` ENUM('Todo', 'InProgress', 'Done') NOT NULL;
