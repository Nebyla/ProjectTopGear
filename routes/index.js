var express = require('express')
var router = express.Router()
var Gear = require("../models/gear").Gear
var User = require("./../models/user").User


/* GET home page. */
router.get('/', function(req, res, next) {
    Gear.find({},{_id:0,title:1,nick:1},function(err,menu){
      req.session.greeting = "Hi!!!",
      res.cookie('greeting','Hi!!!').render('index', {
                              title: 'Express',
                              menu: menu,
                              counter: req.session.counter,
                          });
    })

});

router.get('/logreg', function(req, res, next) {
  res.render('logreg',{title: 'Вход', error:null});
});

router.post('/logout', function(req, res, next) {
  req.session.destroy()
  res.locals.user = null
  res.redirect('/')
});


router.post('/logreg', function(req, res, next) {
  var username = req.body.username
  var password = req.body.password
  User.findOne({username:username},function(err,user){
      if(err) return next(err)
      if(user){
          if(user.checkPassword(password)){
              req.session.user = user._id
              res.redirect('/')
          } else {
                  res.render('logreg', {title: 'Вход', error:"Пароль не верный"})
          }
      } else {
          var user = new User({username:username,password:password})
          user.save(function(err,user){
              if(err) return next(err)
              req.session.user = user._id
              res.redirect('/')
          })        
    }
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
