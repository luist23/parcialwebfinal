var mongoose = require('mongoose');

var annime = new mongoose.Schema({
    nombre : {type:String, requiere: true},
    genero : {type:String, requiere: true},
    creador : {type:String, requiere: true}
});

module.exports = mongoose.model('anime',annime);