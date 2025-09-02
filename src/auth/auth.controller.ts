import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto, RegisterDto } from './auth.dto';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) { }
    @Post('/register')
    Register(@Body() data: RegisterDto) {
        return this.authService.register(data);
    }
    @Post('/login')
    Login(@Body() data: LoginDto) {
        return this.authService.login(data);
    }
}
