var express = require('express');
var router = express.Router();

router.get('/current_user', function(req, res, next) {
    console.log('req', req.session.user)
    res.json({ user: req.session.user })
    // res.json({ user: { name: 'Foo'} })
});

module.exports = router;
