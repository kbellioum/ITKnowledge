var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');

var db = mongoose.connect('mongodb://127.0.0.1/mydb');

var Parents = require('../models/parents');


/* GET users listing. */
router.get('/', function(req, res) {
  Parents.find(function(err, parents){
    res.render('portfolio', { title: 'portfolio 1 Page', name: 'test', parents: parents});
  });
});

module.exports = router;
