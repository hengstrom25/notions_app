var express = require('express');
var router = express.Router();
const request = require('request');
const app = require('../app');
const User = require('../db/models/user');
var sequelize = require('../db/sequelize');

router.get('/ravelry/callback', function(req, res) {
  // console.log('in the callback', res)
  request.post({
    url: 'https://www.ravelry.com/oauth2/token',
    headers: {
      Authorization: 'Basic ' + new Buffer(
        process.env.RAVELRY_CLIENT_ID + ':' + process.env.RAVELRY_SECRET
      ).toString('base64')
    },
    form: {
      grant_type: 'authorization_code',
      code: req.query.code,
      redirect_uri: process.env.ROOT_URL + '/session/ravelry/callback',
    }
  }, function(err, response, body) {
      const access_token = JSON.parse(body).access_token
      console.log('body', body);
      getCurrentUser(access_token).then(async function(ravelryUser) {
        console.log('rav user', ravelryUser.username)
        console.log('random user', User)
        console.log('token', access_token)
        const [user, _create] = await User(sequelize.db, sequelize.datatype).findOrCreate({
          where: { username: ravelryUser.username },
          defaults: {
            ravelryUser: ravelryUser,
            ravelryToken: JSON.parse(body).access_token,
          }
        });
        console.log('user', user)
        req.session.currentUserId = user.id
        // TODO - Save body.access_token in express session
        res.redirect('/dashboard');
      })
  });
});

function getCurrentUser (access_token) {
  return new Promise(function(resolve, reject) {
    request.get({
      url: 'https://api.ravelry.com/current_user.json',
      headers: {
        Authorization: 'Bearer ' + access_token
      }
    }, function(err, response, body) {
      if (err) {
        reject('rejected', err)
      } else {
        resolve(JSON.parse(body).user)
      }
    })
  })
}

module.exports = router;
