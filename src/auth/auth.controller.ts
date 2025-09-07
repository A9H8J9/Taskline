import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto, RegisterDto } from './auth.dto';
import { AuthGuard } from '@nestjs/passport';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) { }
    @Get('google')
    @UseGuards(AuthGuard('google'))
    async googleAuth() {

    }
    @Get('google/callback')
    @UseGuards(AuthGuard('google'))
    googleAuthRedirect(@Req() req) {
        return {
            message: 'salam',
            user: req.user.user,
        };
    }
    @Post('/register')
    Register(@Body() data: RegisterDto) {
        return this.authService.register(data);
    }
    @Post('/login')
    Login(@Body() data: LoginDto) {
        return this.authService.login(data);
    }
}
