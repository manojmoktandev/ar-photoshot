var express = require('express');
var router = express.Router();

/* GET http://localhost:3000/ */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Photo Shot Server'});
});

/* GET http://localhost:3000/test */
router.get('/test', function(req, res, next) {
  res.render('index', { title: 'Photo Shot Server Test'});
});

module.exports = router;
