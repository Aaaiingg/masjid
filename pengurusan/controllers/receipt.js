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
    db.getAllemployee(function(err,result){
        res.render('salary.ejs',{employee : result});
    })
router.get('/generateslip/:id',function(req,res){
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

         
        res.render('payslip.ejs',{doc : total_doc , doclist : result, appointment : appointment, applist : result1
            , asnaf : total_asnaf, asnaflist : result2, ajk : total_ajk, ajklist : result3
            , leave : leave, leavelist : result4, facility : total_facility, faclist : result5
            , complain : complain, complist : result6});
        })})})})})});
        //console.log(result.length);
        
    //});
//router.get('/',function(req,res){
    //b.getAllemployee(function(err,result){
        //res.render('salary.ejs',{employee : result});
    })
});

//router.get('/generateslip/:id',function(req,res){
    //var id = req.params.id;
    //db.getEmpbyId(id,function(err,result){
        //var name = result[0].name;
        //var id = result[0].id;
        //var email = result[0].email;
        //var role = result[0].role;
        //var salary = result[0].salary;
        //var join_date = result[0].join_date;
        //var contact = result[0].contact;
        //res.render('payslip.ejs',{name : name,id:id,email:email,role:role,salary:salary,join_date:join_date,contact:contact});
    //})})});

})





module.exports =router;