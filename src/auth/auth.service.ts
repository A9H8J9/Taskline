import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PrismaClient } from 'generated/prisma';
import { LoginDto, RegisterDto } from './auth.dto';
import { JwtService } from '@nestjs/jwt';

const prisma = new PrismaClient()

@Injectable()
export class AuthService {
    constructor(private jwt: JwtService) { }
    async register({ email, name, password }: RegisterDto) {
        const user = await prisma.user.findFirst({
            where: {
                email,
                name,
                password
            }
        })
        if (user) {
            return { status: "error", message: "user allready exist." }
        }
        await prisma.user.create({
            data: {
                email,
                name,
                password
            }
        })
        return { status: "ok" }
    }
    async login({ email, password }: LoginDto) {
        const user = await prisma.user.findFirst({
            where: {
                email,
                password
            }
        })
        if (!user) {
            throw new UnauthorizedException("user not found")
        }
        return {
            token: await this.jwt.signAsync({ sub: user?.id }),
        };
    }
}
