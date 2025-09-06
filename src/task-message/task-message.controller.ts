import { Body, Controller, Post, Request, UseGuards } from '@nestjs/common';
import { AuthGuard } from 'src/auth/auth.guard';
import { TaskMessageService } from './task-message.service';
import { CreateTaskMessageDto } from './task-message.dto';

@UseGuards(AuthGuard)
@Controller('task-messages')
export class TaskMessageController {
    constructor(private readonly taskMessageService: TaskMessageService) { }
    @Post('')
    create(@Request() req, @Body() data: CreateTaskMessageDto) {
        return this.taskMessageService.create(req.user.sub, data);
    }
}
