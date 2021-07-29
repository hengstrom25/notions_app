var express = require('express');
var router = express.Router();
const User = require('../db/models/user');
const Project = require('../db/models/project');
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

router.get('/current_user/projects/:id', async function(req, res, next) {
    await getCurrentUserProject(req).then(project => {
         res.json({ project: project })
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
            // console.log(body)
            if (err) {
                reject('rejected', err)
            } else {
                resolve(JSON.parse(body).projects)
            }
        })
    })
}

async function getCurrentUserProject (req) {
    const user = await User().findOne({ where: { id: req.session.currentUserId } });
    return new Promise(function(resolve, reject) {
        request.get({
            url: `https://api.ravelry.com/projects/${user.username}/${req.params.id}.json`,
            headers: {
                Authorization: `Bearer ${user.ravelryToken}`
            }
        }, async function(err, response, body) {
            if (err) {
                reject('rejected', err)
            } else {
                const ravelryProject = JSON.parse(body).project
                const [project, created] = await Project().findOrCreate({
                    where: { ravelryId: ravelryProject.id },
                    defaults: {
                        name: ravelryProject.name,
                        rowCount: 0
                    }
                  });  
                  if (!created) {
                    await Project().update(
                      {
                        name: ravelryProject.name,
                      },
                      { where: { id: project.id } }
                    );
                  }
                resolve(project)
            }
        })
    })
}
module.exports = router;
