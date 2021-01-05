var express = require('express');
var router = express.Router();
const request = require('request');

router.get('/ravelry/callback', function(req, res) {
    let authorizationBuffer = new Buffer(process.env.REACT_APP_RAVELRY_CLIENT_ID + ':' + process.env.REACT_APP_RAVELRY_CLIENT_SECRET)
    console.log(authorizationBuffer.toString("base64"))
    debugger
    let options = {
        url: 'https://www.ravelry.com/oauth2/token?grant_type=authorization_code&redirect_uri=https://localhost:8080/ravelry/callback/token&code=' + req.body.code,
        method: 'POST',
        headers: {
            Authorization: 'Basic ' + authorizationBuffer.toString("base64"),
            'Content-Type': 'application/x-www-form-urlencoded',
        },
    }
    request(options, (error, response, body) => {
        debugger
        console.log(options, error, response, body)
    })
    res.redirect('/dashboard');
    // res.end(JSON.stringify(req.session.grant.response, null, 2))
});

module.exports = router;
