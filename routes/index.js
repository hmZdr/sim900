var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

const Devices = mongoose.model('Device', 
  { 
    name: String,
    hum: String,
    temp: String,
    date: { type: Date, default: Date.now },
  }
);

router.get('/save', function(req, res, next) {
  var devicesName = req.query.n || 'Demo';
  var hum = req.query.h || "hum";
  var temp = req.query.t || "temp";

  const kitty = new Devices({ 
    name: devicesName,
    temp,
    hum
  });
  kitty.save().then(() => {
    console.log('save')
  });
  res.send({
    hello: 'hello',
    name: devicesName,
    hum: hum,
    temp: temp
  });
});

module.exports = router;
