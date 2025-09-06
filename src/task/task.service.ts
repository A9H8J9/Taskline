import { Injectable } from '@nestjs/common';
import { PrismaClient } from 'generated/prisma';

const prisma = new PrismaClient()

@Injectable()
export class TaskService {
    async list(user_id: number, project_id: number) {
        const user = await prisma.projectMember.findFirst({
            where: {
                project_id: project_id,
                user_id: user_id
            }
        })
        if (!user) {
            return { status: "error", error: "error" }
        }
        const tasks = await prisma.task.findMany({
            where: {
                project_id: project_id
            },
            include: { TaskMessage: {} }
        })
        return tasks
    }
}
