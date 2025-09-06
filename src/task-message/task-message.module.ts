import { Module } from '@nestjs/common';
import { TaskMessageService } from './task-message.service';
import { TaskMessageController } from './task-message.controller';

@Module({
    controllers: [TaskMessageController],
    providers: [TaskMessageService],
})
export class TaskMessageModule {}
