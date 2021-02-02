var express = require('express');
var router = express.Router();
const request = require('request');

router.get('/current_user', function(req, res, next) {
    console.log('req', req.session.user)
    res.json({ user: req.session.user })
    // res.json({ user: { name: 'Foo'} })
});

router.get('/current_user/projects', function(req, res, next) {
    getCurrentUserProjectList(req).then(list => {
        res.json({ projects: list })
    })
});


function getCurrentUserProjectList (req) {
    return new Promise(function(resolve, reject) {
        request.get({
            url: `https://api.ravelry.com/projects/${req.session.user.ravelry_username}/list.json`,
            headers: {
                Authorization: `Bearer ${req.session.ravelry_token}`
            }
        }, function(err, response, body) {
            if (err) {
                reject('rejected', err)
            } else {
                resolve(JSON.parse(body).projects)
            }
        })
    })
}
module.exports = router;
