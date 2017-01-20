var express = require('express');
var router = express.Router();
var data = require('../data.json');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'Muslamic Makers'
  });
});

router.get('/sponsor', function(req, res, next) {
  res.render('default', { title: 'Sponsor' });
});


module.exports = router;
