/*
  Warnings:

  - You are about to drop the `taskMassages` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `taskMassages` DROP FOREIGN KEY `taskMassages_taskId_fkey`;

-- DropForeignKey
ALTER TABLE `taskMassages` DROP FOREIGN KEY `taskMassages_user_id_fkey`;

-- DropTable
DROP TABLE `taskMassages`;

-- CreateTable
CREATE TABLE `taskMessages` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `message` VARCHAR(191) NOT NULL,
    `task_name` ENUM('Todo', 'InProgress', 'Done') NOT NULL,
    `task_id` INTEGER NOT NULL,
    `user_id` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `taskMessages` ADD CONSTRAINT `taskMessages_task_id_fkey` FOREIGN KEY (`task_id`) REFERENCES `tasks`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `taskMessages` ADD CONSTRAINT `taskMessages_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
