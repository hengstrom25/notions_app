var express = require('express');
var router = express.Router();
const User = require('../db/models/user');
const request = require('request');

router.get('/current_user', async function(req, res, next) {
    console.log('getting user from api')
    const user = await User().findOne({ where: { id: req.session.currentUserId } });
    res.json({ user: user })
});

router.get('/current_user/projects', async function(req, res, next) {
   await getCurrentUserProjectList(req).then(list => {
        res.json({ projects: list })
    })
});


async function getCurrentUserProjectList (req) {
    const user = await User().findOne({ where: { id: req.session.currentUserId } });
    return new Promise(function(resolve, reject) {
        request.get({
            url: `https://api.ravelry.com/projects/${user.username}/list.json`,
            headers: {
                Authorization: `Bearer ${user.ravelryToken}`
            }
        }, function(err, response, body) {
            console.log(body)
            if (err) {
                reject('rejected', err)
            } else {
                resolve(JSON.parse(body).projects)
            }
        })
    })
}
module.exports = router;
