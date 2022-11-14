const boom = require("@hapi/boom");
const { models } = require("../libs/sequelize");

class ProductsService {
  constructor() {
  }

  async create(payload) {
    const { phone, nit } = payload;
    return await models.Customer.create({
      phone,
      nit
    });
  }

  async find() {
    return await models.Customer.findAll();
  }

  async findOne(id) {
    return await models.Customer.findByPk(id);
  }

  async update(id, changes) {
    const customer = await models.Customer.findByPk(id);
    if (!customer) {
      throw boom.notFound("Customer not found");
    }
    return await customer.update(changes);
  }

  async delete(id) {
    const customer = await models.Customer.findByPk(id);
    if (!customer) {
      throw boom.notFound("Customer not found");
    }
    return await customer.destroy();
  }
}

module.exports = ProductsService;
