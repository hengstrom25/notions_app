var express = require('express');
var router = express.Router();
const request = require('request');

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
    // TODO - Save body.code in express session
    console.log(body);
  });

  // res.redirect('/dashboard');
});

module.exports = router;
