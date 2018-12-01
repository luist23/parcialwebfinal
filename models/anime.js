var mongoose = requiere('mongoose');

var annime = new mongoose.schema({
    nombre : {type:String, requiere: true},
    genero : {type:String, requiere: true},
    creador : {type:String, requiere: true}
});

module.exports('anime',annime);