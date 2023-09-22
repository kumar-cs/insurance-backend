import {
    Column,
    CreateDateColumn,
    Entity,
    UpdateDateColumn,
    PrimaryColumn,
  } from 'typeorm';
  
  @Entity('insurance_user_records')
  export class InsuranceUserEntity {

    @PrimaryColumn({ name:'user_id',type:'varchar' ,nullable:false})
    user_id: string;

    @Column({ name:'name',type:'varchar' ,nullable:false})
    name: string;

    @Column({ name:'father_name',type:'varchar' ,nullable:false})
    father_name: string;

    @Column({ name:'address', type:'varchar' ,nullable:false})
    address: string;

    @Column({ name:'age', type:'int' ,nullable:false})
    age: number;

    @Column({ name:'mobile_number',type:'int' ,nullable:false})
    mobile_number: number;

    @Column({ name:'martial_status',type:'varchar' ,nullable:false})
    martial_status: string;

    @Column({ name:'spouse_name',type:'varchar' ,nullable:false})
    spouse_name: string;

    @Column({ name:'email_id',type:'varchar' ,nullable:false})
    email_id: string;


    @Column({ name:'children_male',type:'int' ,nullable:false})
    children_male: number;


    @Column({ name:'children_female',type:'int' ,nullable:false})
    children_female: number;


    @Column({ name:'aadhar_number',type:'int' ,nullable:false})
    aadhar_number: number;

    @Column({ name: 'insurance_company_name', type: 'varchar',nullable: false })
    insurance_company_name: string;

    @Column({ name:'insurance_policy_number',type:'int' ,nullable:false})
    insurance_policy_number: number;

    @Column({ name:'insurance_assured_sum',type:'int' ,nullable:false})
    insurance_assured_sum: number;

    @Column({ name:'insurance_yearly_premium_sum',type:'int' ,nullable:false})
    insurance_yearly_premium_sum: number;

    @Column({ name: 'dob', type: 'varchar',nullable: false})
    dob: string;  
  
    @CreateDateColumn({ name: 'created_timestamp', type: 'timestamp', nullable: true })
    created_timestamp: string;
  
    @UpdateDateColumn({ name: 'updated_timestamp', type: 'timestamp', nullable: true})
    updated_timestamp: string;
  
    @Column({ name: 'created_by', type: 'varchar' ,nullable: true})
    created_by: string;
  
    @Column({ name: 'updated_by', type: 'varchar', nullable: true })
    updated_by: string;
  }

