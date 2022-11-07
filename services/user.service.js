const boom = require('@hapi/boom');
const pool = require('../libs/postgres.pool');
const { models } = require('../libs/sequelize');

class UserService {
  constructor() {
    this.pool = pool;
    this.pool.on('error', (err) => {
      console.error('Unexpected error on idle client', err);
    });
  }

  async create(data) {
    return data;
  }

  async find() {
    return await models.User.findAll();
  }

  async findOne(id) {
    return { id };
  }

  async update(id, changes) {
    return {
      id,
      changes,
    };
  }

  async delete(id) {
    return { id };
  }
}

module.exports = UserService;
