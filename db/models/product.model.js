const { Model, DataTypes, Sequelize } = require("sequelize");

const PRODUCT_TABLE = "products";

const ProductSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false
  },
  price: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  categoryId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  }
};

class Product extends Model {
  static associate(models) {
    Product.belongsTo(models.Category, { foreignKey: "categoryId" });
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: PRODUCT_TABLE,
      modelName: "Product",
      timestamps: false
    };
  }
}

module.exports = { PRODUCT_TABLE, ProductSchema, Product };
