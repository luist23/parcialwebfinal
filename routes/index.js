var express = require('express');
var router = express.Router();
var animeController = require('../controllers/anime');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Administrador de Anime' });
});
router.get('/all/',animeController.findAll);
router.post('/',animeController.insert);
router.get('/:id',animeController.findOne);

router.delete('/:id',animeController.delete);
router.put('/',animeController.update);
module.exports = router;
