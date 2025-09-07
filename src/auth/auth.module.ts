import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { GoogleStrategy } from './strategies/google.strategy';

@Module({
    imports: [
        JwtModule.register({
            global: true,
            secret: 'asd',
            signOptions: { expiresIn: '1y' },
        }),
        PassportModule.register({ session: false })
    ],
    controllers: [AuthController],
    providers: [GoogleStrategy, AuthService]
})
export class AuthModule { }
