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
  const sequelize = new Sequelize(`postgres://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_DATABASE}`)

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
