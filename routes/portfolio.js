var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res) {
  res.render('portfolio', { title: 'portfolio 1 Page', name: 'test'});
});

module.exports = router;