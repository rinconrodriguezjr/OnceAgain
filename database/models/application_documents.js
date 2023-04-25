'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ApplicationDocuments extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      ApplicationsDocuments.belongsTo(models.Applications, {as:'application', foreignKey:'application_id'})
    }
  }
  ApplicationDocuments.init({
    application_id:{
      allowNull: false,
      type: DataTypes.UUID,
      primaryKey: true,
    },
    url:{
      allowNull: false,
      type: DataTypes.TEXT,
    },
    order:{
      allowNull: false,
      type: DataTypes.INTEGER,
    }},
    {
    sequelize,
    modelName: 'ApplicationDocuments',
    tableName: "applicationsdocuments",
    underscored: true,
    timestamps: true
  });
  return ApplicationDocuments;
};