const { Model, DataTypes, Sequelize } = require("sequelize");

const ORDER_TABLE = "orders";

const OrderSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  status: {
    type: DataTypes.STRING,
    allowNull: false
  },
  total: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false
  }
};

class Order extends Model {
  static associate(models) {
    Order.belongsTo(models.User, { foreignKey: "userId" });
    Order.hasMany(models.ProductItem, { foreignKey: "orderId" });
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: ORDER_TABLE,
      modelName: "Order",
      timestamps: false
    };
  }
}

module.exports = { ORDER_TABLE, OrderSchema, Order };
