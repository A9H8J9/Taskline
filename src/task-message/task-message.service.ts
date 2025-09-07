import { Injectable } from '@nestjs/common';
import { NameTask, PrismaClient } from 'generated/prisma';
import { CreateTaskMessageDto, UpdateTaskMessageDto } from './task-message.dto';

const prisma = new PrismaClient()
@Injectable()
export class TaskMessageService {
    async create(user_id: number, { message, task_id }: CreateTaskMessageDto) {
        await prisma.taskMessage.create({
            data: {
                message: message,
                user_id: user_id,
                task_id: task_id
            }
        })
        return { status: "ok" }
    }
    async update({ task_id }: UpdateTaskMessageDto, message_id: number) {
        await prisma.taskMessage.update({
            where: {
                id: message_id
            },
            data: {
                task_id: task_id
            }
        })
        return { status: "ok" }
    }
}
