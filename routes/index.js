var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/SignUp', function(req, res, next) {
  res.render('SignUp');
});

module.exports = router;
