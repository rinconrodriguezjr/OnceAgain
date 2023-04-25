'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Applications extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Applications.belongsTo(models.Users,{as:'user', foreignKey:'user_id'})
      Applications.hasMany(models.ApplicationsPhotos, {as:'photos', foreignKey: 'application_id'})
      Applications.hasMany(models.ApplicationsDocuments, {as:'documents', foreignKey: 'application_id'})
      Applications.hasMany(models.ApplicationsPayments, {as:'payments', foreignKey: 'application_id'})
    }
  }
  Applications.init({
    // id: {
    //   type:DataTypes.UUID,
    //   primaryKey: true,
    //   unique: true
    // },
    user_id: {
      allowNull: false,
      primaryKey:true,
      type: DataTypes.UUID,
      foreignKey:true,
      references: {
        model: 'users',
        key: 'id'
      },
      onUpdate: 'CASCADE', 
      onDelete: 'RESTRICT'
    },
    legal_first_names: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    legal_last_names: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    nationality: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    email: {
      allowNull: false,
      unique: true,
      type: DataTypes.STRING,
    },
    phone: {
      allowNull: false,
      type: DataTypes.STRING
    },
    date_of_birth: {
      allowNull: false,
      type: DataTypes.DATE
    },
    genre: {
      allowNull: false,
      type: DataTypes.STRING
    },
    passport_number: {
      allowNull: false,
      type: DataTypes.STRING
    },
    passport_expiration_date: {
      allowNull: false,
      type: DataTypes.DATE
    },
    residence: {
      allowNull: false,
      type: DataTypes.STRING
    },
    residence_address: {
      allowNull: false,
      type: DataTypes.STRING
    },
    job : {
      allowNull: false,
      type: DataTypes.STRING
    },
    comments: {
      allowNull: false,
      type: DataTypes.TEXT
    },
    status: {
      allowNull: false,
      type: DataTypes.STRING
    }
  }, {
    sequelize,
    modelName: 'Applications',
    tableName: "applications",
    underscored: true,
    timestamps: true
  });
  return Applications;
};