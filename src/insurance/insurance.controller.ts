import { Controller } from '@nestjs/common';
import { InsurancePayload} from './dto/insuranceDto';
import { InsuranceService } from './insurance.service';
import {Post, Body, Req, Get} from '@nestjs/common';

@Controller('insurance')
export class InsuranceController {
    constructor(
        private readonly insuranceService: InsuranceService,
      ) { }


 @Post('/signup')
  async userSignUp(
    @Body() insurancePayload: InsurancePayload,
    @Req() request
  ): Promise<any> {
    let response = await this.insuranceService.createUser(insurancePayload);
      return response;
    }
  

  @Get('/getUsers')
   async getAllUsersForDashboard(): Promise<any> {
        let response = await this.insuranceService.getAllUsers();
        return response;
      }
    }