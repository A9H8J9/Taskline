import { Controller, Get, ParseIntPipe, Query, Request, UseGuards } from '@nestjs/common';
import { AuthGuard } from 'src/auth/auth.guard';
import { TaskService } from './task.service';

@UseGuards(AuthGuard)
@Controller('tasks')
export class TaskController {
    constructor(private readonly taskService: TaskService) { }
    @Get('')
    list(@Request() req, @Query('project_id', ParseIntPipe) project_id: number) {
        return this.taskService.list(req.user.sub, project_id);
    }
}