var express = require('express');
var router = express.Router();
var db = require('../mySQLConnect.js');
//var Gear = require("../models/gear").Gear
//var checkAuth = require("./../middleware/checkAuth.js")
//var async = require("async")

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Новый маршрутизатор, для маршрутов, начинающихся с gears');
});

/* Страница ведущих */
router.get('/:nick' , function(req, res, next) {
    db.query(`SELECT * FROM gears WHERE gears.nick = '${req.params.nick}'`, (err, gears) => {
        if(err) {
        console.log(err);
        if(err) return next(err)
        }else {
            if(err) return next(err)
            if(gears.lenght == 0) return next(new Error("Нет такого ведущего для поиска"))
            var gear = gears[0];
            res.render('gear', {
                title: gear.title,
                picture: gear.avatar,
                desc: gear.about
                })
            }
        })
    })
    



module.exports = router;
