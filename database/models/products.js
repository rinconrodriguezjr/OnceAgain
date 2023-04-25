'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Products extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Products.init({
    id: {
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      type: DataTypes.INTEGER
    },
    name:{
      allowNull: false,
      type: DataTypes.STRING
    },
    price_id:{
      allowNull: false,
      type: DataTypes.STRING,
    },
    description:{
      allowNull: false,
      type: DataTypes.STRING,
    }},
    {
    sequelize,
    modelName: 'Products',
    tableName: "products",
    underscored: true,
    timestamps: true
  });
  return Products;
};