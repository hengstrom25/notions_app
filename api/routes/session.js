var express = require('express');
var router = express.Router();

router.get('/ravelry/callback', function(req, res) {
  res.end(JSON.stringify(req.session.grant.response, null, 2))
});

module.exports = router;
