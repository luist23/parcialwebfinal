var express = requiere('express');
var routes = requiere('')
var anime = requiere('../models/anime');
var animes;

animes.findAll = function(req, res){
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

};

animes.findOne = function(req, res){
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

};

animes.delete = function(req, res){
    anime.findByIdAndDelete({_id: req.body.id},function(err,animes){
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

};
animes.update = function(req, res){
    let update={
        nombre : req.body.nombre,
        genero: req.body.genero,
        creador:req.body.creador
    };
anime.findByIdAndDelete({_id: req.body.id},update,function(err,old){
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

};

module.exports = animes;