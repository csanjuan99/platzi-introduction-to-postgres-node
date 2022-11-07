const { Model, DataTypes, Sequelize } = require("sequelize");

const PRODUCT_ITEM_TABLE = "product_items";

const ProductItemSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  quantity: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  productId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'product_id'
  },
  orderId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'order_id'
  }
};

class ProductItem extends Model {
  static associate(models) {
    ProductItem.belongsTo(models.Product, { foreignKey: "productId" });
    ProductItem.belongsTo(models.Order, { foreignKey: "orderId" });
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: PRODUCT_ITEM_TABLE,
      modelName: "ProductItem",
      timestamps: false
    };
  }
}

module.exports = { PRODUCT_ITEM_TABLE, ProductItemSchema, ProductItem };
