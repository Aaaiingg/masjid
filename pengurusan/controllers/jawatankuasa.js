var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var db = require.main.require ('./models/db_controller');
const { check, validationResult } = require('express-validator');

module.exports = router;



router.get('*', function(req, res, next){
	if(req.cookies['username'] == null){
		res.redirect('/login');
	}else{
		next();
	}
});

router.get('/',function(req,res){
    db.getAllemployee(function(err,result){
        console.log(result);
        res.render('jawatankuasa.ejs',{list : result});

    });
   
});

router.get('/add_ajk',function(req,res){
    res.render('add_ajk.ejs');
});

router.post('/add_ajk',function(req,res){

    db.add_employee(req.body.name,req.body.umur,req.body.ic,req.body.address,req.body.job,req.body.role,function(err,result){
        console.log('jawatankuasa inserted!!');
        res.redirect('/jawatankuasa');
    });

});


router.get('/leave',function(req,res){
    db.getAllLeave(function(err,result){
       
        res.render('leave.ejs',{user : result});
    });
});

router.get('/add_leave',function(req,res){
    res.render('add_leave.ejs');
    
});

router.get('/edit_leave/:id',function(req,res){

    var id = req.params.id;
    db.getleavebyid(id,function(err,result){
        res.render('edit_leave.ejs',{user:result});
    });
});

router.post('/edit_leave/:id',function(req,res){
    var id = req.params.id;
    db.edit_leave(id,req.body.name,req.body.leave_type,req.body.from,req.body.to,req.body.reason,function(err,result){
        res.redirect('/jawatankuasa/leave');
    });
});

router.get('/delete_leave/:id',function(req,res){
    var id = req.params.id;
    db.getleavebyid(id,function(err,result){

        res.render('delete_leave.ejs' ,{user : result});
    });
});

router.post('/delete_leave/:id',function(req,res){
    var id = req.params.id;
    
    db.deleteleave(id,function(err,result){
        res.redirect('/jawatankuasa/leave');
    });

});



router.get('/edit_ajk/:id',function(req,res){
    var id = req.params.id;
    db.getEmpbyId(id,function(err,result){

        res.render('edit_ajk.ejs' ,{list : result});
    });
});



router.post('/edit_ajk/:id',function(req,res){
    var id = req.params.id;
    db.editEmp(id,req.body.name,req.body.umur,req.body.ic,req.body.address,req.body.job,req.body.role,function(err,result){
        res.redirect('/jawatankuasa');
    });

});

router.get('/delete_ajk/:id',function(req,res){
    var id = req.params.id;
    db.getEmpbyId(id,function(err,result){

        res.render('delete_ajk.ejs' ,{list : result});
    });
});

router.post('/delete_ajk/:id',function(req,res){
    var id = req.params.id;
    
    db.deleteEmp(id,function(err,result){
        res.redirect('/jawatankuasa');
    });

});

router.post('/search',function(req,res){
    var key = req.body.search;
    db.searchEmp(key,function(err,result){
        console.log(result);
        
        res.render('jawatankuasa.ejs',{list : result});
    });
});


router.post('/add_leave',[
    check('name').notEmpty(),
    check('id').notEmpty(),
    check('leave_type').notEmpty(),
    check('from').notEmpty().withMessage('select a date'),
    check('to').notEmpty().withMessage('select a date'),
    check('reason').notEmpty().withMessage('Specify Reason')
],function(req,res){

    
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() });
      }

    db.add_leave(req.body.name,req.body.id,req.body.leave_type,req.body.from,req.body.to,req.body.reason,function(err,result){
        res.redirect('/jawatankuasa/leave');
    });
});