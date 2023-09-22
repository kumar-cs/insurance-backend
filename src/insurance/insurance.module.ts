import { Module } from '@nestjs/common';
import { InsuranceController } from './insurance.controller';
import { InsuranceService } from './insurance.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InsuranceUserEntity } from './entities/insurance_user.entity';

@Module({
  imports:[
    TypeOrmModule.forFeature([InsuranceUserEntity]),
  ],
  controllers: [InsuranceController],
  providers: [InsuranceService]
})
export class InsuranceModule {}
