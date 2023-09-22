import { ApiProperty,ApiPropertyOptional } from '@nestjs/swagger';
import { IsNotEmpty, IsObject,IsOptional, IsString } from 'class-validator';
import { ErrorResponse } from 'src/global-dto/responseError.dto';
import { SuccessResponse } from 'src/global-dto/responseSuccess.dto';


export class InsuranceDetailsDto {
  
    @ApiProperty()
    @IsString()
    insurance_company_name:string;
  
    @ApiProperty()
    insurance_policy_number:number;

    @ApiProperty()
    insurance_assured_sum:number;

    @ApiProperty()
    insurance_yearly_premium_sum:number;

}  


export class InsurancePayload {
  
  @ApiProperty()
  @IsString()
  name:string;

  @ApiProperty()
  @IsString()
  father_name:string;

  @ApiProperty()
  children_male:number;
  
  @ApiProperty()
  children_female:number;

  @ApiProperty()
  @IsString()
  address:string;

  @ApiProperty()
  @IsString()
  dob:string;

  @ApiProperty()
  @IsString()
  email_id:string;

  @ApiProperty()
  @IsString()
  mobile_number:string;

  @ApiProperty()
  @IsString()
  martial_status:string;

  @ApiProperty()
  @IsString()
  spouse_name:string;

  @ApiProperty()
  age:number;

  @ApiProperty()
  @IsString()
  aadhar_number:string;

  @ApiPropertyOptional({type: InsuranceDetailsDto})
  @IsObject({each: true})
  @IsOptional()
  insurance_details?: InsuranceDetailsDto;



}



export class RecordCreationSuccessReponse extends SuccessResponse {
  @ApiProperty()
  @IsNotEmpty()
  data: any
}


export class RecordCreationErrorResponse extends ErrorResponse {
  @ApiProperty()
  @IsNotEmpty()
  data: any
}



