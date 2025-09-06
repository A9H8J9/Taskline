import { Controller, Post, Body, UseGuards, Request, Get, Query, ParseIntPipe } from '@nestjs/common';
import { ProjectService } from './project.service';
import { AddMemberDto, CreateProjectDto } from './project.dto';
import { AuthGuard } from 'src/auth/auth.guard';

@UseGuards(AuthGuard)
@Controller('projects')
export class ProjectController {
  constructor(private readonly projectService: ProjectService) { }

  @Post('')
  create(@Request() req, @Body() data: CreateProjectDto) {
    return this.projectService.create(data, req.user.sub);
  }
  @Get('')
  list(@Request() req) {
    return this.projectService.list(req.user.sub);
  }
  @Post('/add-member')
  addMember(@Request() req, @Body() data: AddMemberDto, @Query('project_id', ParseIntPipe) project_id: number) {
    return this.projectService.addMember(data, req.user.sub, project_id);
  }
}
