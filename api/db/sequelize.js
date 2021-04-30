const { Sequelize, DataTypes } = require('sequelize');

console.log('url', process.env.DATABASE_URL)

const sequelize = new Sequelize(
    process.env.DATABASE_URL, {
        dialectOptions: {
            ssl: true
        }
    }
)


module.exports = { db: sequelize, datatype: DataTypes }
