const { User, UserSchema } = require("./user.model");
const { Product, ProductSchema } = require("./product.model");
const { CategorySchema, Category } = require("./category.model");
const { Order, OrderSchema } = require("./order.model");
const { ProductItem, ProductItemSchema } = require("./productItem.model");

function initModels(sequelize) {
  User.init(UserSchema, User.config(sequelize));
  Product.init(ProductSchema, Product.config(sequelize));
  Category.init(CategorySchema, Category.config(sequelize));
  Order.init(OrderSchema, Order.config(sequelize));
  ProductItem.init(ProductItemSchema, ProductItem.config(sequelize));
}

module.exports = initModels;
