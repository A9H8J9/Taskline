import { Body, Controller, Param, ParseIntPipe, Patch, Post, Request, UseGuards } from '@nestjs/common';
import { AuthGuard } from 'src/auth/auth.guard';
import { TaskMessageService } from './task-message.service';
import { CreateTaskMessageDto, UpdateTaskMessageDto } from './task-message.dto';

@UseGuards(AuthGuard)
@Controller('task-messages')
export class TaskMessageController {
    constructor(private readonly taskMessageService: TaskMessageService) { }
    @Post('')
    create(@Request() req, @Body() data: CreateTaskMessageDto) {
        return this.taskMessageService.create(req.user.sub, data);
    }
    @Patch("/:message_id")
    update(@Body() data: UpdateTaskMessageDto, @Param('message_id', ParseIntPipe) message_id: number) {
        return this.taskMessageService.update(data, message_id)
    }
}
