import { Injectable } from '@nestjs/common';
import { AddMemberDto, CreateProjectDto } from './project.dto';
import { PrismaClient } from 'generated/prisma';

const prisma = new PrismaClient()

@Injectable()
export class ProjectService {
  async create({ name }: CreateProjectDto, user_id: number) {
    await prisma.project.create({
      data: {
        name: name,
        user_id: user_id,
        ProjectMember: {
          create: {
            user_id: user_id,
            role: "OWNER"
          }
        }
      }
    })
    return { status: "ok" }
  }

  async list(user_id: number) {
    const projects = await prisma.project.findMany({
      where: {
        user_id: user_id,
      },
      include: { ProjectMember: {} }
    })
    return projects
  }
  async addMember({ email }: AddMemberDto, user_id: number, project_id: number) {
    const user = await prisma.user.findFirst({
      where: {
        email: email
      }
    })
    const me = await prisma.user.findFirst({
      where: {
        id: user_id
      }
    })
    const member = await prisma.projectMember.findFirst({
      where: {
        user_id: user?.id,
        project_id: project_id,
      }
    })
    const owner = await prisma.projectMember.findFirst({
      where: {
        project_id: project_id,
        role: "MEMBER",
        user_id: user_id
      }
    })
    if (!user || me?.email === email || member || owner) {
      return { status: "error", error: "user not found" }
    }
    await prisma.projectMember.create({
      data: {
        user_id: user.id,
        role: "MEMBER",
        project_id: project_id
      }
    })
    return { status: "ok" }
  }
}
