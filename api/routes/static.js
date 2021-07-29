var express = require('express');
var router = express.Router();
var path = require('path');

router.get('/*', function(req, res, next) {
    console.log('getting a random route');
    res.sendFile(path.join(__dirname, '../../client/build', 'index.html'));
});

module.exports = router;