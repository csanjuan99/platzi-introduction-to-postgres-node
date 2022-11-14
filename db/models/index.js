const { User, UserSchema } = require("./user.model");
const { Product, ProductSchema } = require("./product.model");
const { CategorySchema, Category } = require("./category.model");
const { Order, OrderSchema } = require("./order.model");
const { ProductItem, ProductItemSchema } = require("./productItem.model");
const { Customer, CustomerSchema } = require("./customer.model");

function initModels(sequelize) {
  User.init(UserSchema, User.config(sequelize));
  Customer.init(CustomerSchema, Customer.config(sequelize));
  Product.init(ProductSchema, Product.config(sequelize));
  Category.init(CategorySchema, Category.config(sequelize));
  Order.init(OrderSchema, Order.config(sequelize));
  ProductItem.init(ProductItemSchema, ProductItem.config(sequelize));

  Customer.associate(sequelize.models);
  User.associate(sequelize.models);
  Product.associate(sequelize.models);
  Category.associate(sequelize.models);
  Order.associate(sequelize.models);
  ProductItem.associate(sequelize.models);
}

module.exports = initModels;
