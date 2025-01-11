var express = require ('express');
var router = express.Router();
var db = require.main.require ('./models/db_controller');
var bodyPaser = require ('body-parser');

router.get('*', function(req, res, next){
	if(req.cookies['username'] == null){
		res.redirect('/login');
	}else{
		next();
	}
});

router.get('/',function(req,res){
    db.getallappointment(function(err,result){
        console.log(result);
        res.render('khairat.ejs',{list :result});
    })
    
});

router.get('/add_ahlikhairat',function(req,res){
    res.render('add_ahlikhairat.ejs');
});

router.post('/add_ahlikhairat',function(req,res){

    db.add_appointment(req.body.name,req.body.ic,req.body.phone,req.body.address,req.body.payment,function(err,result){
        res.redirect('/khairat');
    });

});


router.get('/edit_ahlikhairat/:id',function(req,res){
    var id = req.params.id;
    db.getappointmentbyid(id,function(err,result){
        console.log(result);
        res.render('edit_ahlikhairat.ejs',{list : result});
    });

});

router.post('/edit_ahlikhairat/:id',function(req,res){
    var id = req.params.id;
    db.editappointment(id,req.body.name,req.body.ic,req.body.phone,req.body.address,req.body.payment,function(err,result){
        res.redirect('/khairat');
    });
});


router.get('/delete_ahlikhairat/:id',function(req,res){
    var id = req.params.id;
    db.getappointmentbyid(id,function(err,result){
        console.log(result);
        res.render('delete_ahlikhairat.ejs',{list:result});
    })
    
});

router.post('/delete_ahlikhairat/:id',function(req,res){
    var id =req.params.id;
    db.deleteappointment(id,function(err,result){
        res.redirect('/khairat');
    });
})
router.post('/search',function(req,res){
    var key = req.body.search;
    db.searchappointment(key,function(err,result){
        console.log(result);
        
        res.render('khairat.ejs',{list : result});
    });
});









module.exports =router;