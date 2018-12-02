var express = require('express');
var router = express.Router();
var animeController = require('../controllers/anime');


router.get('/all/',animeController.findAll);
router.post('/',animeController.insert);
router.get('/:id',animeController.findOne);

router.delete('/:id',animeController.delete);
router.put('/:id',animeController.update);
module.exports = router;