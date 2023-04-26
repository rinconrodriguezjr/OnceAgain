'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ApplicationPhotos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      ApplicationPhotos.belongsTo(models.Applications, {as:'application', foreignKey:'application_id'})
    }
  }
  ApplicationPhotos.init({
    application_id:{
      allowNull: false,
      type: DataTypes.UUID,
      primaryKey: true,
      // foreingKey: true,
      // unique: true,
      // references:{
      //   model: 'applications',
      //   key: 'user_id'
      // },
      // onUpdate: 'CASCADE', 
      // onDelete: 'RESTRICT'
    },
    url:{
      allowNull: false,
      type: DataTypes.TEXT,
    },
    order:{
      allowNull: false,
      type: DataTypes.INTEGER,
      primaryKey: true,
    }},
    {
    sequelize,
    modelName: 'ApplicationPhotos',
    tableName: "applicationsphotos",
    underscored: true,
    timestamps: true
  });
  return ApplicationPhotos;
};