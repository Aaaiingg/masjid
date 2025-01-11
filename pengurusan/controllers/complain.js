var mysql =require('mysql');
var express = require ('express');
var cookie = require ('cookie-parser');
var db = require.main.require ('./models/db_controller');
var router = express.Router();

router.get('/view_complain',function(req,res){
    db.getcomplain(function(err,result){
        res.render('view_complain.ejs',{list : result});
    })
    
});
router.get('/add_complain',function(req,res){
 
    res.render ('complain.ejs');
});

router.post('/add_complain',function(req,res){

    var message = req.body.message;
    var name = req.body.name;
    var email = req.body.email;
    var subject = req.body.subject;

    db.postcomplain(message,name,email,subject,function(err,result){
        res.redirect('back');
    });

});




module.exports = router;