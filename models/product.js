'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.Product.belongsTo(models.Category);
      models.Product.belongsToMany(models.User, {
        through: 'UsersProducts'
    });
  }};
  Product.init({
    Name: DataTypes.STRING,
    Description: DataTypes.STRING,
    Price: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};