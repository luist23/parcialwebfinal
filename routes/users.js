var express = require('express');
var router = express.Router();
var animeController = require('../controllers/anime');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/',animeController.insert);
router.get('/:id',animeController.findOne);
router.get('/all',animeController.findAll);
router.delete('/:id',animeController.delete);
router.put('/',animeController.update);
module.exports = router;
