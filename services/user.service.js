const boom = require("@hapi/boom");
const pool = require("../libs/postgres.pool");
const { models } = require("../libs/sequelize");

class UserService {
  constructor() {
    this.pool = pool;
    this.pool.on("error", (err) => {
      console.error("Unexpected error on idle client", err);
    });
  }

  async create(data) {
    return models.User.create(data);
  }

  async find() {
    return await models.User.findAll();
  }

  async findOne(id) {
    const user = await models.User.findByPk(id);
    if (!user) {
      throw boom.notFound("User not found");
    }
    return user;
  }

  async update(id, changes) {
    const user = await models.User.findByPk(id);
    if (!user) {
      throw boom.notFound("User not found");
    }
    return await user.update(changes);
  }

  async delete(id) {
    const user = await models.User.findByPk(id);
    if (!user) {
      throw boom.notFound("User not found");
    }
    return await user.destroy();
  }
}

module.exports = UserService;
