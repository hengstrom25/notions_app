// require('dotenv').config()
const dotenv = require('dotenv')
const dotenvexpand = require('dotenv-expand')
const dotenvconfig = dotenv.config();

dotenvexpand(dotenvconfig)

const {Pool} = require('pg')
const isProduction = process.env.NODE_ENV === 'production'

const connectionString = process.env.DATABASE_URL

const pool = new Pool({
  connectionString: isProduction ? process.env.DATABASE_URL : connectionString,
  ssl: isProduction,
})

module.exports = {pool}
