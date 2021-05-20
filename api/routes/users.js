var express = require('express');
var router = express.Router();
const {pool} = require('../config')

/* GET users listing. */
router.get('/', function(req, res, next) {
  getUsers(req, res)
});

module.exports = router;

const getUsers = (request, response) => {
  return pool.query('SELECT * FROM users', (error, results) => {
    if (error) {
      throw error
    }
    // return results.rows
    response.status(200).json(results.rows)
  })
}
