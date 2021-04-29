const { Sequelize, DataTypes } = require('sequelize');

console.log('url', process.env.DATABASE_URL)

const sequelize = new Sequelize(
    process.env.DATABASE_URL, {
    'dialect': 'postgres',
    'dialectOptions': {
        'ssl': true
    },
    'protocol': 'postgres'
}
)


module.exports = { db: sequelize, datatype: DataTypes }
