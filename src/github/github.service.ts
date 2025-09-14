import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaClient } from 'generated/prisma';

const prisma = new PrismaClient()

@Injectable()
export class GithubService {
    constructor(private jwt: JwtService) { }
    async github(data) {
        const user = await prisma.user.create({
            data: {
                email: data.email,
                name: data.displayName,
                password: "",
                picture: data.picture
            }
        })
        return {
            token: await this.jwt.signAsync({ sub: user?.id }),
        };
    }
}

