import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Controller('auth')
export class GithubController {
    @UseGuards(AuthGuard('github'))
    @Get('github')
    async githubAuth() {

    }
    @Get('github/callback')
    @UseGuards(AuthGuard('github'))
    googleAuthRedirect(@Req() req) {
        console.log('github', req.user)
        return req.user
    }
}
