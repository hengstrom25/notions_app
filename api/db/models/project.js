'use strict';
const {
  Model, Sequelize, DataTypes
} = require('sequelize');

module.exports = () => {
  class Project extends Model {
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

  Project.init({
    ravelryId: {type: DataTypes.INTEGER, allowNull: false},
    rowCount: {type: DataTypes.INTEGER, allowNull: false}
  }, {
    sequelize,
    modelName: 'Project',
  });
  return Project;
};