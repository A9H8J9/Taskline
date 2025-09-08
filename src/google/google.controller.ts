import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { GoogleService } from './google.service';
import { AuthGuard } from '@nestjs/passport';

@Controller('auth')
export class GoogleController {
    constructor(private readonly googleService: GoogleService) { }
    @Get('google')
    @UseGuards(AuthGuard('google'))
    async googleAuth() {

    }
    @Get('google/callback')
    @UseGuards(AuthGuard('google'))
    googleAuthRedirect(@Req() req) {
        console.log('user', req.user)
        return this.googleService.google(req.user)
    }
}
