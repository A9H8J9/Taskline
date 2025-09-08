import { Module } from '@nestjs/common';
import { GoogleController } from './google.controller';
import { GoogleStrategy } from './strategies/google.strategy';
import { GoogleService } from './google.service';
import { PassportModule } from '@nestjs/passport';

@Module({
    imports: [PassportModule.register({ session: false })],
    controllers: [GoogleController],
    providers: [GoogleService, GoogleStrategy],
})
export class GoogleModule { }
