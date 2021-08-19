var express = require('express');
var router = express.Router();
const apiCurrentUserRouter = require('./api/current_user')
const apiProjectsRouter = require('./api/projects')

router.use('/current_user', apiCurrentUserRouter)

router.use('/current_user/projects', apiProjectsRouter)

module.exports = router;
