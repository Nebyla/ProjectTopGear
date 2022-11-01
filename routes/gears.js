var express = require('express');
var router = express.Router();
var Gear = require("../models/gear").Gear

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Новый маршрутизатор, для маршрутов, начинающихся с gears');
});

/* Страница героев */
router.get('/:nick', function(req, res, next) {
  Gear.findOne({nick:req.params.nick}, function(err,gear){
      if(err) return next(err)
      if(!gear) return next(new Error("Нет такого ведущего в этом сериале"))
      res.render('gear', {
          title: gear.title,
          picture: gear.avatar,
          desc: gear.desc
      })
  })
})


module.exports = router;
