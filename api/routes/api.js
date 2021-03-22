var express = require('express');
var router = express.Router();
const User = require('../db/models/user')

router.get('/current_user', async function(req, res, next) {
    console.log('getting user from api')
    const user = await User().findOne({ where: { id: req.session.currentUserId } });
    res.json({ user: user })
});

module.exports = router;
