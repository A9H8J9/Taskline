import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class RegisterDto {
  @ApiProperty()
  @IsEmail()
  email: string;

  @ApiProperty()
  @IsString()
  name: string

  @ApiProperty()
  @IsString()
  password: string;
}

export class LoginDto {
  @ApiProperty()
  @IsString()
  email: string;
  
  @ApiProperty()
  @IsString()
  password: string;
}