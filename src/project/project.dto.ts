import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateProjectDto {
    @ApiProperty()
    @IsString()
    name: string
}
export class AddMemberDto {
    @ApiProperty()
    @IsString()
    email: string
}