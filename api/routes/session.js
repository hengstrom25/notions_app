var express = require('express');
var router = express.Router();
const request = require('request');
const app = require('../app');

router.get('/ravelry/callback', function(req, res) {
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
      console.log(body);
      req.session.ravelry_token = JSON.parse(body).access_token
    // TODO - Save body.access_token in express session
      res.redirect('/dashboard');
  });
});

module.exports = router;
