var express = require('express');
var router = express.Router();
var path = require('path');
const https = require('https');
const request = require('request');

/* GET dashboard. */
router.get('/', function(req, res, next) {
    // debugger
    getCurrentUser(req)
    res.end(JSON.stringify(req.session.grant.response.access_token, null, 2));
});

function getCurrentUser(req) {
    let access_token = req.session.grant.response.access_token;
    let options = {
        url: 'https://api.ravelry.com/current_user.json',
        headers: {
            Authorization: 'Bearer ' + access_token
        }
    }
    request(options, (error, response, body) => {
        console.log(options, error, response, body)
    })
}

module.exports = router;