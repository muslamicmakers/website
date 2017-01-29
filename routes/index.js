var express = require('express');
var router = express.Router();
var data = require('../data.json');
var request = require('request');
var url = "https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=" + CHANNEL_ID + "&maxResults=10&order=date&type=video&key=" + YOUR_API_KEY;

app.get('/', function(req, res){
  request(url, function(err, body){
    console.log(body);
      res.json(body);
  });
})


/* GET home page. */
router.get('/', function(req, res, next) {
  var past = data.past_events;
  var team = data.team;
  res.render('index', {
    title: 'Muslamic Makers',
    team: team,
    past: past
  });
});

router.get('/sponsor', function(req, res, next) {
  res.render('default', { title: 'Sponsor' });
});


module.exports = router;
