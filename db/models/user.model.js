const { Model, DataTypes, Sequelize } = require("sequelize");

const USER_TABLE = "users";

const UserSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  lastname: {
    type: DataTypes.STRING,
    allowNull: false

  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  },
};

class User extends Model {
  static associate(models) {
    User.hasMany(models.Order, { foreignKey: "userId" });
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: USER_TABLE,
      modelName: "User",
      timestamps: false
    };
  }
}

module.exports = { USER_TABLE, UserSchema, User };
