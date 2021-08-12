'use strict';
const {
  Model, Sequelize, DataTypes
} = require('sequelize');
const Project = require('./project')
module.exports = (sequelize, DataTypes) => {
  class RowCounter extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  const sequelize = new Sequelize(
    process.env.DATABASE_URL, process.env.NODE_ENV === 'production' ? {
      dialectOptions: {
        ssl: {
          require: process.env.NODE_ENV === 'production',
          rejectUnauthorized: false
        }
      }
    } : {}
  )

  RowCounter.init({
    count: {type: DataTypes.INTEGER, allowNull: false},
    projectId: {type: DataTypes.INTEGER, allowNull: false},
    name: {type: DataTypes.STRING, allowNull: false},
    userId: {type: DataTypes.INTEGER, allowNull: false},
  }, {
    sequelize,
    modelName: 'RowCounter',
  });
  RowCounter.belongsTo(Project);
  
  return RowCounter;
};