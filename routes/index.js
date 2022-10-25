var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/Hamond', function(req, res, next) {
  res.render('Hamond', {
    title: "Ричард Хамонд",
    picture: "images/Hamond.jpg",
    desc: "Английский телеведущий, наиболее известен по телепередачам «Top Gear»,"
});
});
router.get('/Clarcson', function(req, res, next) {
  res.render('Clarcson', {
    title: "Джереми Кларксон",
    picture: "images/clarkson.jpg",
    desc: "английский телеведущий, фермер и журналист, специализирующийся на автомобильной тематике. Широко известен как ведущий телевизионных шоу «Top Gear»"
});
});
router.get('/Mey', function(req, res, next) {
  res.render('Mey', {
    title: "Джеймс Мей",
    picture: "images/Mey.jpg",
    desc: "английский журналист, известный как один из ведущих телепередач Top Gear"
});
});
module.exports = router;
