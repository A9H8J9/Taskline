import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';

export class CreateTaskMessageDto {
    @ApiProperty()
    @IsString()
    message: string

    @ApiProperty()
    @IsNumber()
    task_id: number
}
