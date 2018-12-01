var mongoose = require('mongoose');
var anime = require('../models/anime');


module.exports = {
    findAll : function(req, res){
        anime.find({},function(err,animes){
            if(err){
                res.json({
                    ok:false,
                    err
                })
            }else{
                ok:true,
                animes
            }
        });

    },

    findOne : function(req, res){
        anime.findById({_id: req.body.id},function(err,animes){
            if(err){
                res.json({
                    ok:false,
                    err
                })
            }else{
                ok:true,
                animes
            }
        });

    },

    delete : function(req, res){
        anime.findByIdAndDelete({_id: req.body.id},function(err,eliminado){
            if(err){
                res.json({
                    ok:false,
                    err
                })
            }else{
                ok:true
                eliminado
            }
        });

    },
    update : function(req, res){
        let update={
            nombre : req.body.nombre,
            genero: req.body.genero,
            creador:req.body.creador
        };
        anime.findByIdAndUpdate({_id: req.body.id},update,function(err,old){
            if(err){
                res.json({
                    ok:false,
                    err
                })
            }else{
                ok:true,
                old,
                update
            }
        });
        },


    insert : function(req, res){
        let anime = new anime({
            nombre : req.body.nombre,
            genero: req.body.genero,
            creador:req.body.creador
        });
        anime.save({_id: req.body.id},update,function(err,insert){
            if(err){
                res.json({
                    ok:false,
                    err
                })
            }else{
                ok:true,
                insert
            }
        });

    }

}

