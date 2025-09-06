import { Injectable } from '@nestjs/common';
import { NameTask, PrismaClient } from 'generated/prisma';
import { CreateTaskMessageDto } from './task-message.dto';

const prisma = new PrismaClient()
@Injectable()
export class TaskMessageService {
    async create(user_id: number, { message }: CreateTaskMessageDto) {
        await prisma.taskMessage.create({
            data: {
                message: message,
                user_id: user_id,
                task_id: 1
            }
        })
        return { status: "ok" }
    }
}
