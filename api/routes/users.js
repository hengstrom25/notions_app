var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;

// const express = require('express')
// const bodyParser = require('body-parser')
// const cors = require('cors')
// const {pool} = require('../config')

// const app = express()

// app.use(bodyParser.json())
// app.use(bodyParser.urlencoded({extended: true}))
// app.use(cors())

// const getUsers = (request, response) => {
//   pool.query('SELECT * FROM users', (error, results) => {
//     if (error) {
//       throw error
//     }
//     response.status(200).json(results.rows)
//   })
// }

// // const addBook = (request, response) => {
// //   const {author, title} = request.body

// //   pool.query(
// //     'INSERT INTO books (author, title) VALUES ($1, $2)',
// //     [author, title],
// //     (error) => {
// //       if (error) {
// //         throw error
// //       }
// //       response.status(201).json({status: 'success', message: 'Book added.'})
// //     },
// //   )
// // }

// app
//   .route('/users')
//   // GET endpoint
//   .get(getUsers)
//   // POST endpoint
//   // .post(addUser)

// // Start server
// app.listen(process.env.PORT || 3002, () => {
//   console.log(`Server listening`)
// })
