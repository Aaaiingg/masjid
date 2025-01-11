var mysql =require('mysql');
var express = require ('express');
var cookie = require ('cookie-parser');
var db = require.main.require ('./models/db_controller');

var router = express.Router();
router.get('*', function(req, res, next){
	if(req.cookies['username'] == null){
		res.redirect('/login');
	}else{
		next();
	}
});

router.get('/',function(req,res){
    db.getallmed(function(err,result){
        res.render('asnaf.ejs',{list : result});
    })
    
});

router.get('/add_asnaf',function(req,res){
    res.render('add_asnaf.ejs');
});


router.post('/add_asnaf',function(req,res){
 var name = req.body.name;
 var ic = req.body.ic;
 var address = req.body.address;
 var job = req.body.job;
 var income = req.body.income;
 var tanggungan = req.body.tanggungan;

 db.addMed(name,ic,address,job,income,tanggungan,function(err,result){
    res.redirect('/asnaf');
 });

});

router.get('/edit_asnaf/:id',function(req,res){
    var id = req.params.id;
    db.getMedbyId(id,function(err,result){
        
        res.render('edit_asnaf.ejs' ,{list : result});
    });
}); 

router.post('/edit_asnaf/:id',function(req,res){
    var id = req.params.id;
    db.editmed(id,req.body.name,req.body.ic,req.body.address,req.body.job,req.body.income,req.body.tanggungan,function(err,result){
        res.redirect('/asnaf');
    });

});

router.get('/delete_asnaf/:id',function(req,res){
    var id = req.params.id;
    db.getMedbyId(id,function(err,result){
        
        res.render('delete_asnaf.ejs' ,{list : result});
    });
});


router.post('/delete_asnaf/:id',function(req,res){
    var id = req.params.id;
    
    db.deletemed(id,function(err,result){
        res.redirect('/asnaf');
    });

});


router.post('/search',function(req,res){
    var key = req.body.search;
    db.searchmed(key,function(err,result){
        console.log(result);
        
        res.render('asnaf.ejs',{list : result});
    });
});

module.exports = router ;