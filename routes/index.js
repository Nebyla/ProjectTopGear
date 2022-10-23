var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/Hamond', function(req, res, next) {
  res.send("<h1>Страница Ричарда Хамонда</h1>")
});
router.get('/Clarcson', function(req, res, next) {
  res.send("<h1>Страница Джереми Кларксона</h1>")
});
router.get('/Mey', function(req, res, next) {
  res.send("<h1>Страница Джейм Мея</h1>")
});

module.exports = router;
