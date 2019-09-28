const express = require('express');
const router = express.Router();

//contact route

router.get('/contact', function(req,res){
    res.render('contact',{title:'Contact Page'});
  });

//index route

router.get('/', function(req,res){
    res.render('index',{title:'Nodejs WB'});
  });

//about route
  router.get('/aboutus',function(req,res){
    res.render('aboutus',{title:'About Us'});
  });

//game route
  router.get('/game',function(req,res){
    res.render('game',{title:'game'});
  });

  module.exports = router;