import { ApiProperty,ApiPropertyOptional } from '@nestjs/swagger';
import { IsNotEmpty, IsObject, IsString } from 'class-validator';

export class InsuranceDetailsPayload {
  
    @ApiProperty()
    @IsString()
    firstName:string;
  
    @ApiProperty()
    @IsString()
    lastName:string;
}  