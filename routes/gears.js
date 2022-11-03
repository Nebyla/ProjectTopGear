var express = require('express');
var router = express.Router();
var Gear = require("../models/gear").Gear
var async = require("async")

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Новый маршрутизатор, для маршрутов, начинающихся с gears');
});

/* Страница ведущих */
router.get('/:nick', function(req, res, next) {
  async.parallel([
          function(callback){
              Gear.findOne({nick:req.params.nick}, callback)
          },
          function(callback){
              Gear.find({},{_id:0,title:1,nick:1},callback)
          }
      ],
      function(err,result){
          if(err) return next(err)
          var gear = result[0]
          var gears = result[1] || []
          if(!gear) return next(new Error("Нет такого ведущего в Top Gear"))
          res.render('gear', {
              title: gear.title,
              picture: gear.avatar,
              desc: gear.desc,
              menu: gears
          });
      })
})




module.exports = router;
