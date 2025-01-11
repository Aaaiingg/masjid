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
    db.getAllDoc(function(err,result){
        db.getallappointment(function(err,result1){
            db.getallmed(function(err,result2){
                db.getAllemployee(function(err,result3){
                    db.getAllLeave(function(err,result4){
                        db.getalldept(function(err,result5){
                            db.getcomplain(function(err,result6){
        var total_doc = result.length ;
        var appointment = result1.length;
        var total_asnaf = result2.length;
        var total_ajk = result3.length;
        var leave = result4.length;
        var total_facility = result5.length;
        var complain = result6.length;

         
        res.render('home.ejs',{doc : total_doc , doclist : result, appointment : appointment, applist : result1
            , asnaf : total_asnaf, asnaflist : result2, ajk : total_ajk, ajklist : result3
            , leave : leave, leavelist : result4, facility : total_facility, faclist : result5
            , complain : complain, complist : result6});
        })})})})})});
        //console.log(result.length);
        
    });
   
});


router.get('/mosque_economy',function(req,res){

    db.getalldept(function(err,result){

        res.render('mosque_economy.ejs',{list:result});

    });
    
});

router.get('/add_economy',function(req,res){
    res.render('add_economy.ejs');
});

router.post('/add_economy',function(req,res){
    var facility_name = req.body.facility_name;
    var facility_desc = req.body.facility_desc;
    var facility_status = req.body.facility_status;
    db.add_dept(facility_name,facility_desc,facility_status,function(err,result){
        res.redirect('/home/mosque_economy');
    });
});

router.get('/delete_economy/:id',function(req,res){

    var id = req.params.id;
    db.getdeptbyId(id,function(err,result){
        res.render('delete_economy.ejs',{list:result});
    });
});

router.post('/delete_economy/:id',function(req,res){
    var id = req.params.id;
    db.delete_department(id,function(err,result){
        res.redirect('/home/mosque_economy');
    });
});

router.get('/edit_economy/:id',function(req,res){
    var id = req.params.id;
    db.getdeptbyId(id,function(err,result){
        res.render('edit_economy.ejs',{list:result});
    })
});


router.post('/edit_economy/:id',function(req,res){

    db.edit_dept(req.params.id,req.body.facility_name,req.body.facility_desc,req.body.facility_status,function(err,result){
        res.redirect('/home/mosque_economy');
    });
});

router.get('/profile',function(req,res){
    var username = req.cookies['username'];
    db.getuserdetails(username,function(err,result){
        //console.log(result);
        res.render('profile.ejs',{list:result});
    });
});

router.post('/profile',function(req,res){
    var username = req.cookies['username'];
    db.getuserdetails(username,function(err,result){
        var id = result[0].id;
        var password = result[0].password;
        var username = result[0].username; 
        if (password== req.body.password){

            db.edit_profile(id,req.body.username,req.body.email,req.body.new_password,function(err,result1){
                if (result1){
                    res.send("profile edited successfully");
                }
                if(!result1){ res.send("old password did not match");}
                   
                

            });
        }
        


    }) ;
});

module.exports =router;