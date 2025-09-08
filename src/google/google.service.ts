import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaClient } from 'generated/prisma';

const prisma = new PrismaClient()

@Injectable()
export class GoogleService {
    constructor(private jwt: JwtService) { }
    async google(data) {
        const finduser = await prisma.user.findFirst({
            where: {
                email: data.email
            }
        })
        if (finduser) {
            throw new UnauthorizedException("user allready exists.")
        }
        const user = await prisma.user.create({
            data: {
                email: data.email,
                name: data.firstName + data.lastName,
                password: "",
                picture: data.picture
            }
        })
        return {
            token: await this.jwt.signAsync({ sub: user?.id }),
        };
    }
}
