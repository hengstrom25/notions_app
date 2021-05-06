'use strict';
const {
  Model, Sequelize, DataTypes
} = require('sequelize');


module.exports = () => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  const sequelize = new Sequelize(process.env.DATABASE_URL)

  User.init({
    username: { type: DataTypes.STRING, allowNull: false },
    ravelryToken: { type: DataTypes.STRING, allowNull: false },
    ravelryUser: { type: DataTypes.JSONB, allowNull: false }
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};
