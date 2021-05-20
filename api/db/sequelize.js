const { Sequelize, DataTypes } = require('sequelize');

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


module.exports = { db: sequelize, datatype: DataTypes }
