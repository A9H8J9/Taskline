import { Module } from '@nestjs/common';
import { AuthController } from './auth/auth.controller';
import { AuthService } from './auth/auth.service';
import { AuthModule } from './auth/auth.module';
import { ProjectModule } from './project/project.module';
import { TaskController } from './task/task.controller';
import { TaskService } from './task/task.service';
import { TaskModule } from './task/task.module';

@Module({
  imports: [AuthModule, ProjectModule, TaskModule],
  controllers: [AuthController, TaskController],
  providers: [AuthService, TaskService],
})
export class AppModule {}
