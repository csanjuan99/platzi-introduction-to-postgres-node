const { Model, DataTypes } = require("sequelize");


const CUSTOMER_TABLE = "customer";

const CustomerSchema = {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  nit: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  phone: {
    type: DataTypes.STRING,
    allowNull: false
  }
};

class Customer extends Model {
  static associate(models) {
    this.belongsTo(models.User, { as: "user" });
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: CUSTOMER_TABLE,
      modelName: "Customer",
      timestamps: false
    };
  }
}

module.exports = {
  CustomerSchema,
  Customer,
  CUSTOMER_TABLE
};
