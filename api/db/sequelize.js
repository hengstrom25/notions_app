const { Sequelize, DataTypes } = require('sequelize');

console.log('url', process.env.DATABASE_URL)

const sequelize = new Sequelize(
    process.env.DATABASE_URL, {
        dialectOptions: {
            ssl: {
                require: true,
                rejectUnauthorized: false
            }
        }
    }
)


module.exports = { db: sequelize, datatype: DataTypes }
