var mongoose = require('mongoose');
var anime = require('../models/anime');


module.exports = {
    findAll : function(req, res){
        anime.find({},function(err,animes){
            if(err){
                res.json({
                    ok:false,
                    status: 500,
                    err
                })
            }else{
                res.json({
                    ok:true,
                    animes
                })
            }
        });

    },

    findOne : function(req, res){
        anime.findById(req.params.id,function(err,animes){
            if(err){
                res.json({
                    ok:false,
                    status: 500,
                    err
                })
            }else{
                res.json({
                    ok:true,
                    status: 500,
                    animes
                })
            }
        });

    },

    delete : function(req, res){
        anime.findByIdAndDelete(req.params.id,function(err,eliminado){
            if(err){
                res.json({
                    ok:false,
                    status: 500,
                    err
                })
            }else{
                res.json({
                    ok:true,
                    eliminado
                })
            }
        });

    },
    update : function(req, res){
        let actualizado={
            nombre : req.body.nombre,
            genero: req.body.genero,
            creador:req.body.creador
        };
        anime.findByIdAndUpdate(req.params.id,actualizado,function(err,old){
            if(err){
                res.json({
                    ok:false,
                    status: 500,
                    err
                })
            }else{
                res.json({
                    ok:true,
                    old,
                    actualizado
                })
            }
        });
        },


    insert : function(req, res){
        let animeNew = new anime({
            nombre : req.body.nombre,
            genero: req.body.genero,
            creador:req.body.creador
        });
        animeNew.save(function(err,anime){
            if(err){
                res.json({
                    ok:false,
                    status: 500,
                    err
                })
            }else{
                res.json({
                    ok:true,
                    anime
                })
            }
        });

    }

}

