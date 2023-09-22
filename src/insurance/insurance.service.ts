import { HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { InsuranceUserEntityRepository } from './repositories/insurance_user.repository';
import { InsuranceUserEntity } from './entities/insurance_user.entity';
import { RecordCreationSuccessReponse } from './dto/insuranceDto';
import { ValidationErrorResponse } from 'src/global-dto/responseError.dto';

@Injectable()
export class InsuranceService {

    constructor(
        @InjectRepository(InsuranceUserEntity)
        private insuranceUserRepository?:InsuranceUserEntityRepository
    ){}

    static getAllUsersQuery(){
        return [
            'insurance_user_records.name as "name"',
            'insurance_user_records.father_name as "father_name"',
            'insurance_user_records.age as "age"',
            'insurance_user_records.address as "address"',
            'insurance_user_records.mobile_number as "mobile_number"',
            'insurance_user_records.martial_status as "martial_status"',
            'insurance_user_records.spouse_name as "spouse_name"',
            'insurance_user_records.children_male as "children_male"',
            'insurance_user_records.children_female as "children_female"',
            'insurance_user_records.aadhar_number as "aadhar_number"',
            'insurance_user_records.dob as "dob"',
            'insurance_user_records.email_id as "email_id"',
            'insurance_user_records.insurance_company_name as "insurance_company_name"',
            'insurance_user_records.insurance_policy_number as "insurance_policy_number"',
            'insurance_user_records.insurance_assured_sum as "insurance_assured_sum"',
            'insurance_user_records.insurance_yearly_premium_sum as "insurance_yearly_premium_sum"',
            'insurance_user_records.created_timestamp as "created_timestamp"',
            'insurance_user_records.updated_timestamp as "updated_timestamp"'
        ]
    }

    async getAllUsers(){
        let query: any = await this.insuranceUserRepository
        .createQueryBuilder('insurance_user_records')
        .select(InsuranceService.getAllUsersQuery()).execute();
        return query
    }

    async createUser(insurancePayload){
        let userEntity = new InsuranceUserEntity();
        try{
            userEntity.name = insurancePayload.name;
            userEntity.father_name = insurancePayload.father_name;
            userEntity.age = insurancePayload.age;
            userEntity.address = insurancePayload.address;
            userEntity.mobile_number = insurancePayload.mobile_number;
            userEntity.martial_status = insurancePayload.martial_status;
            userEntity.spouse_name = insurancePayload.spouse_name;
            userEntity.children_male = insurancePayload.children_male;
            userEntity.children_female = insurancePayload.children_female;
            userEntity.aadhar_number = insurancePayload.aadhar_number;
            userEntity.dob = insurancePayload.dob;
            userEntity.email_id = insurancePayload.email_id
            userEntity.insurance_company_name = insurancePayload.insurance_details.insurance_company_name;
            userEntity.insurance_policy_number = insurancePayload.insurance_details.insurance_policy_number;
            userEntity.insurance_assured_sum = insurancePayload.insurance_details.insurance_assured_sum;
            userEntity.insurance_yearly_premium_sum = insurancePayload.insurance_details.insurance_yearly_premium_sum;
            userEntity.created_by = "admin";
            await this.insuranceUserRepository.insert(userEntity)

            let response = new RecordCreationSuccessReponse()
            response.message = "record inserted"
            response.status = HttpStatus.CREATED
            response.data = userEntity
            return response

          }catch(e){
            let response = new ValidationErrorResponse()
            response.error = e
            return response         
          }
    }

}
