var express = require('express');
var router = express.Router();
var data = require('../data.json');

/* GET home page. */
router.get('/', function(req, res, next) {
  var team = data.team;
  res.render('index', {
    title: 'Muslamic Makers',
    team: team
  });
});

router.get('/sponsor', function(req, res, next) {
  res.render('default', { title: 'Sponsor' });
});


module.exports = router;
