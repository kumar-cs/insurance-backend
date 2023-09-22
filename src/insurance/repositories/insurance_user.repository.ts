import { Injectable } from "@nestjs/common";
import { InsuranceUserEntity } from "../entities/insurance_user.entity";
import {DataSource, Repository} from "typeorm";

@Injectable()
export class InsuranceUserEntityRepository extends Repository<InsuranceUserEntity> {
    constructor(private dataSource: DataSource) {
        super(InsuranceUserEntity, dataSource.createEntityManager())
    }
}
