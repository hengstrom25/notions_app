var express = require('express');
var router = express.Router();

router.get('/current_user', function(req, res, next) {
    res.json({ user: { name: 'Foo'} })
});

module.exports = router;