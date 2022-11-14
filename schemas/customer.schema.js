const Joi = require("joi");

const id = Joi.number().integer();
const phone = Joi.string().min(8);
const nit = Joi.string().min(8);

const createCustomerSchema = Joi.object({
  phone: phone.required(),
  nit: nit.required()
});

const updateCustomerSchema = Joi.object({
  phone: phone,
  nit: nit
});

const getCustomerSchema = Joi.object({
  id: id.required()
});

module.exports = { createCustomerSchema, updateCustomerSchema, getCustomerSchema };
