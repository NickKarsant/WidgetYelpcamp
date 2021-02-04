var express = require('express');
var router = express.Router();



router.get('/', function(req,res,next){
  res.send('API working properly');
});

router.get('/yelpcamp', function(req,res,next){
  res.send('yelpcamp landing here');
});

module.exports = router;