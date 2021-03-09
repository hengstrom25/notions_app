var express = require('express');
var router = express.Router();
const User = require('../db/models/user')

router.get('/current_user', async function(req, res, next) {
    const user = await User.findOne({ where: { id: req.session.currentUserId } });
    // console.log('req', req.session.user)
    res.json({ user: user })
    // res.json({ user: { name: 'Foo'} })
});

module.exports = router;
