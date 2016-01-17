var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');

var db = mongoose.connect('mongodb://127.0.0.1/mydb');

var Parents = require('../models/parents');


/* GET users listing. */
router.get('/', function(req, res) {

  var c = "";

  for(i = 1; i <= 100; i++){
    if (i % 3 == 0 && i % 5 == 0){
        c += " [" + i + "]" + " (tree & five) - ";
    } else if (i % 3 == 0){
           c += " [" + i + "]" + " (tree) - ";
    } else if (i % 5 == 0){
      c += " [" + i + "]" + " (five) - ";
    } else {
      c += i + " - ";
    }
  }
  Parents.find(function(err, parents){
    res.render('portfolio', { title: 'portfolio 1 Page', name: 'test', parents: parents});
  });
});

module.exports = router;
