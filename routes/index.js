var express = require('express')
var router = express.Router()
var Gear = require("../models/gear").Gear


/* GET home page. */
router.get('/', function(req, res, next) {
    Gear.find({},{_id:0,title:1,nick:1},function(err,menu){
      req.session.greeting = "Hi!!!",
      res.cookie('greeting','Hi!!!').render('index', {
                              title: 'Express',
                              menu: menu
                          });
    })

});

/*router.get('/Hamond', function(req, res, next) {
  res.render('Gear', {
    title: "Ричард Хамонд",
    picture: "images/Hamond.jpg",
    desc: "Английский телеведущий, наиболее известен по телепередачам «Top Gear»,"
});
});
router.get('/Clarcson', function(req, res, next) {
  res.render('Gear', {
    title: "Джереми Кларксон",
    picture: "images/clarkson.jpg",
    desc: "Дже́реми Чарльз Ро́берт Кларксон - английский телеведущий, фермер и журналист, специализирующийся на автомобильной тематике Широко известен как ведущий телевизионных шоу «Top Gear», получившего премию «Эмми» в 2005 году,"
});
});
router.get('/Mey', function(req, res, next) {
  res.render('Gear', {
    title: "Джеймс Мей",
    picture: "images/Mey.jpg",
    desc: "английский журналист, известный как один из ведущих телепередач Top Gear"
});
});
*/
module.exports = router;
