var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/healthcheck', function(req, res, next) {
  res.send('Yo');
});

router.post('/transactions', function(req, res, next) {
  res.send('To implement later');
});

module.exports = router;
