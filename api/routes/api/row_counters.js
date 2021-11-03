
var express = require('express');
var router = express.Router();
const RowCounter = require('../../db/models/rowcounter');
const request = require('request');
const { initParams } = require('request');

router.get('/', async function(req, res, next) {
    await getAllRowCountersForProject(req).then(rowCounters => {
         res.json({ rowCounters })
     })
 });

  router.get('/:row_counter_id', async function(req, res, next) {
    await getRowCounterForProjectById(req).then(project => {
         res.json({ project: project })
     })
 });

 async function getAllRowCountersForProject(req) {
    let counters = await RowCounter().findAll({ where: { ravelryProjectId: req.project_id } });
    if (counters.length === 0) {
        counters.push(await RowCounter().create({ 
            ravelryProjectId: req.project_id, 
            userId: req.session.currentUserId,
            name: 'Row Counter',
            count: 0
        }));
    }
    return counters
 };

 module.exports = router;