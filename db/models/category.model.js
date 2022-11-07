const { Model, DataTypes, Sequelize } = require("sequelize");

const CATEGORY_TABLE = "categories";

const CategorySchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  }
};

class Category extends Model {
  static associate(models) {
    Category.hasMany(models.Product, { foreignKey: "categoryId" });
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: CATEGORY_TABLE,
      modelName: "Category",
      timestamps: false
    };
  }
}

module.exports = { CATEGORY_TABLE, CategorySchema, Category };
