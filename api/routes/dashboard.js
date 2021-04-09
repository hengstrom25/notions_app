var express = require('express');
var router = express.Router();
var path = require('path');
const https = require('https');
const request = require('request');
const e = require('express');
const user = require('../db/models/user');

/* GET dashboard. */
router.get('/', function(req, res, next) {
    // const user = await getCurrentUser(req)

    //     req.session.user = {}
    //     req.session.user.ravelry_username = user.username
    //     req.session.user.ravelry_avatar_url = user.large_photo_url
        res.sendFile(path.join(__dirname, '../../client/build', 'index.html'))

});

// function getCurrentUser (req) {
//     return await User.findOne({ where: { id: req.session.currentUserId } });
//     // return new Promise(function(resolve, reject) {
//     //     request.get({
//     //         url: 'https://api.ravelry.com/current_user.json',
//     //         headers: {
//     //             Authorization: 'Bearer ' + req.session.ravelry_token
//     //         }
//     //     }, function(err, response, body) {
//     //             if (err) {
//     //                 reject('rejected', err)
//     //             } else {
//     //                 resolve(JSON.parse(body).user)
//     //             }
//     //     })
//     // })
// }

module.exports = router;
