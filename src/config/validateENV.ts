import * as Joi from 'joi';

export const envValidation = Joi.object({
  NODE_ENV: Joi.string()
    .valid('development', 'production', 'test', 'provision')
    .default('development')
    .required(),
  PORT: Joi.number().default(2014),
  DB_SCHEMA_NAME: Joi.string()
    .valid('insurance_details')
    .default('public'),
  DB_PORT: Joi.number().default(1433),
  DATABASE_HOST: Joi.string().min(1).max(150).required(),
  DB_NAME: Joi.string().min(1).max(150).required(),
  DB_USERNAME: Joi.string().min(1).max(100).required(),
  DB_PASSWORD: Joi.string().min(1).max(30).required()
});
