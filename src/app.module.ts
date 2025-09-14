import { Module } from '@nestjs/common';
import { AuthController } from './auth/auth.controller';
import { AuthService } from './auth/auth.service';
import { AuthModule } from './auth/auth.module';
import { ProjectModule } from './project/project.module';
import { TaskController } from './task/task.controller';
import { TaskService } from './task/task.service';
import { TaskModule } from './task/task.module';
import { TaskMessageController } from './task-message/task-message.controller';
import { TaskMessageService } from './task-message/task-message.service';
import { TaskMessageModule } from './task-message/task-message.module';
import { GoogleController } from './google/google.controller';
import { GoogleService } from './google/google.service';
import { GoogleModule } from './google/google.module';
import { GithubController } from './github/github.controller';
import { GithubService } from './github/github.service';
import { GithubModule } from './github/github.module';

@Module({
  imports: [AuthModule, ProjectModule, TaskModule, TaskMessageModule, GoogleModule, GithubModule],
  controllers: [AuthController, TaskController, TaskMessageController, GoogleController, GithubController],
  providers: [AuthService, TaskService, TaskMessageService, GoogleService, GithubService],
})
export class AppModule { }
