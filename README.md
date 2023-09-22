
Clone the repository

Database setup

Install postgres@15

create an user as insurance_admin and password as "*****"

create a DB - insurance_backend with the insurance_admin user

create a schema - insurance_details


create a table - insurance_user_records,


-- Table: insurance_details.insurance_user_records

-- DROP TABLE IF EXISTS insurance_details.insurance_user_records;

CREATE TABLE IF NOT EXISTS insurance_details.insurance_user_records
(
    name character varying(15) COLLATE pg_catalog."default" NOT NULL,
    father_name character varying(15) COLLATE pg_catalog."default" NOT NULL,
    age bigint NOT NULL,
    address character varying(200) COLLATE pg_catalog."default" NOT NULL,
    mobile_number bigint NOT NULL,
    martial_status character varying(10) COLLATE pg_catalog."default" NOT NULL,
    spouse_name character varying(15) COLLATE pg_catalog."default" NOT NULL,
    children_male bigint NOT NULL,
    children_female bigint NOT NULL,
    aadhar_number bigint NOT NULL,
    dob date NOT NULL,
    insurance_company_name character varying(30) COLLATE pg_catalog."default" NOT NULL,
    insurance_policy_number bigint NOT NULL,
    insurance_assured_sum bigint NOT NULL,
    insurance_yearly_premium_sum bigint NOT NULL,
    created_timestamp timestamp with time zone DEFAULT CURRENT_TIMESTAMP,
    updated_timestamp timestamp with time zone DEFAULT CURRENT_TIMESTAMP,
    created_by character varying(15) COLLATE pg_catalog."default",
    updated_by character varying(15) COLLATE pg_catalog."default",
    user_id character varying COLLATE pg_catalog."default" NOT NULL DEFAULT gen_random_uuid(),
    email_id character varying COLLATE pg_catalog."default" NOT NULL,
    CONSTRAINT insurance_user_records_pkey PRIMARY KEY (user_id)
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS insurance_details.insurance_user_records
    OWNER to insurance_admin;



Please verify and give appropriate values in the .env file

NODE_ENV = development
DATABASE_HOST=localhost
DB_PORT=5432
DB_USERNAME=insurance_admin
DB_PASSWORD= ********
DB_NAME=insurance_backend
DB_SCHEMA_NAME=insurance_details



## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).

