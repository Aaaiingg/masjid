var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var multer = require ('multer');
var fs = require ('fs');
var path = require ('path');


var db = require.main.require ('./models/db_controller');


router.get('*', function(req, res, next){
	if(req.cookies['username'] == null){
		res.redirect('/login');
	}else{
		next();
	}
});



var storage = multer.diskStorage({
    destination: function(req, file, cb) {
      cb(null, "public/assets/images/upload_images"); //here we specify the destination. in this case i specified the current directory
    },
    filename: function(req, file, cb) {
      console.log(file); //log the file object info in console
      cb(null, file.originalname);//here we specify the file saving name. in this case. 
  //i specified the original file name .you can modify this name to anything you want
    }
  });

  var upload = multer({ storage: storage });


router.get('/',function(req,res){

    db.getAllDoc(function(err,result){
        if(err)
        throw err;
        res.render('anakyatim.ejs',{list : result})
    });
    
});

router.use(bodyParser.urlencoded({extended : true}));
router.use(bodyParser.json());

router.get('/add_anakyatim',function(req,res){
    db.getalldept(function(err,result){
        res.render('add_anakyatim.ejs',{list:result});
    });

    
});

router.post('/add_anakyatim',upload.single("image"),function(req,res){

    

        db.add_doctor(req.body.full_name,req.body.ic,req.body.phone,req.body.dob,req.body.no_sibling,req.body.address,req.body.guardian_name,req.file.filename,req.body.guardian_salary,req.body.guardian_job);
    if(db.add_doctor){
        console.log('1 anak yatim inserted');
    }
    res.redirect('add_anakyatim');
    });

    router.get('/edit_anakyatim/:id',function(req,res){
        var id = req.params.id;

        db.getDocbyId(id,function(err,result){

            
                res.render('edit_anakyatim.ejs' ,{list : result});
           
            
        });
    });

    router.post('/edit_anakyatim/:id',function(req,res){
        var id = req.params.id;
        db.editDoc(id,req.body.full_name,req.body.ic,req.body.phone,req.body.dob,req.body.no_sibling,req.body.address,req.body.guardian_name,req.body.image,req.body.guardian_salary,req.body.guardian_job,function(err,result){
            if (err) throw err;
            
            //res.render('edit_doctor.ejs',{list:result});
        res.redirect('back');
         
        
            
        });
});

router.get('/delete_anakyatim/:id',function(req,res){
    var id = req.params.id;
    db.getDocbyId(id,function(err,result){
        res.render('delete_anakyatim.ejs',{list:result})
    });

    
});

router.post('/delete_anakyatim/:id',function(req,res){
    var id = req.params.id;
    db.deleteDoc(id,function(err,result){

        res.redirect('/anakyatim');
    });
});







//  router.get('/search',function(req,res){
//      res.rende
//      var key = req.body.search;
//      console.log(key);
//     db.searchDoc(key,function(err, rows, fields) {
//         if (err) throw err;
//       var data=[];
//       for(i=0;i<rows.length;i++)
//         {
//           data.push(rows[i].first_name);
//         }
//         res.end(JSON.stringify(data));
//       });
//     });


    router.get('/',function(req,res){

        db.getAllDoc(function(err,result){
            if(err)
            throw err;
            res.render('anakyatim.ejs',{list : result})
        });
        
    });


    router.post('/search',function(req,res){
        var key = req.body.search;
        db.searchDoc(key,function(err,result){
            console.log(result);
            
            res.render('anakyatim.ejs',{list : result});
        });
    });

module.exports = router;