var mysql =require('mysql');
var express = require('express');
var router = express.Router();


var con = mysql.createConnection({

    host : 'localhost',
    user : 'root',
    //password : '1234',
    database : 'masjid'
});

con.connect(function(err){
    if(err){
        throw err;
        console.log('you are connected');

    }
});

module.exports.signup = function(username,email,password,status,callback) {
    var query =  "INSERT INTO `users`(`username`,`email`,`password`,`email_status`) VALUES ('" + username + "','" + email + "','" + password + "','"+status+"')";
    con.query(query,callback);
}

module.exports.getuserid = function (email,callback){
    var query = "select *from verify where email = '"+email+"' ";
    con.query(query,callback);
}

module.exports.verify = function (username,email,token,callback){
    var query = "insert into `verify` (`username`,`email`,`token`) values ('"+username+"','"+email+"','"+token+"')";
    con.query(query,callback);
}

module.exports.add_doctor= function(full_name,ic,phone,dob,no_sibling,address,guardian_name,image,guardian_salary,guardian_job,callback){
    var query = "INSERT INTO `orphan`(`full_name`,`ic`,`phone`,`dob`,`no_sibling`,`address`,`guardian_name`,`image`,`guardian_salary`,`guardian_job`) values ('"+full_name+"','"+ic+"','"+phone+"','"+dob+"','"+no_sibling+"','"+address+"','"+guardian_name+"','"+image+"','"+guardian_salary+"','"+guardian_job+"')";
    con.query(query,callback);
    console.log(query);
    
}

module.exports.getAllDoc = function(callback){
    var query = "select * from orphan" ;
    con.query(query,callback);
}


module.exports.getDocbyId = function(id,callback){
    var query = "select * from orphan where id ="+id;
    con.query(query,callback);
}

module.exports.getEmpbyId = function(id,callback){
    var query = "select * from jawatankuasa where id ="+id;
    con.query(query,callback);
}

module.exports.editDoc = function(id,full_name,ic,phone,dob,no_sibling,address,guardian_name,image,guardian_salary,guardian_job,callback){
    var query = "update `orphan` set `full_name`='"+full_name+"', `ic`='"+ic+"', `phone`='"+phone+"', `dob`='"+dob+"',`no_sibling`='"+no_sibling+"',`address`='"+address+"',`guardian_name`='"+guardian_name+"',`image`='"+image+"',`guardian_salary`='"+guardian_salary+"',`guardian_job`='"+guardian_job+"' where id="+id;
    con.query(query,callback);
   // console.log(query);
}

module.exports.editEmp = function(id,name,umur,ic,address,job,role,callback){
    var query = "update `jawatankuasa` set `name`='"+name+"', `umur`='"+umur+"', `ic`='"+ic+"', `address`='"+address+"', `job`='"+job+"', `role`='"+role+"' where id="+id;
    con.query(query,callback);
}

module.exports.deleteDoc = function(id,callback){
    //console.log("i m here");
    var query = "delete from orphan where id="+id;
    con.query(query,callback);
}

module.exports.deleteEmp = function(id,callback){
    //console.log("i m here");
    var query = "delete from jawatankuasa where id="+id;
    con.query(query,callback);
}

module.exports.deletemed = function(id,callback){
    //console.log("i m here");
    var query = "delete from asnaf where id="+id;
    con.query(query,callback);
}

module.exports.postcomplain = function(message,name,email,subject,callback){
    var query = "insert into complain (message,name,email,subject) values ('"+message+"','"+name+"','"+email+"','"+subject+"')";
    console.log(query);
    con.query(query,callback);
}

module.exports.getcomplain = function(callback){
    var query = "select * from complain";
    con.query(query,callback);
}


module.exports.add_appointment =function(name,ic,phone,address,payment,callback){
    var query = "insert into khairat (name,ic,phone,address,payment) values ('"+name+"','"+ic+"','"+phone+"','"+address+"','"+payment+"')";
    con.query(query,callback);
}

module.exports.getallappointment = function(callback){
    var query = "select * from khairat";
    con.query(query,callback);
}

 module.exports.searchDoc = function(key,callback){
     var query='SELECT  *from orphan where full_name like "%'+key+'%"';
     con.query(query,callback);
     console.log(query);
 }
 module.exports.searchappointment = function(key,callback){
    var query='SELECT  *from khairat where name like "%'+key+'%"';
    con.query(query,callback);
    console.log(query);
}

 module.exports.searchmed = function(key,callback){
    var query='SELECT  *from asnaf where name like "%'+key+'%"';
    con.query(query,callback);
 }

 module.exports.searchEmp = function(key,callback){
    var query='SELECT  *from jawatankuasa where name  like "%'+key+'%"' ;
    con.query(query,callback);
    console.log(query);
}


 module.exports.getappointmentbyid = function(id,callback){
     var query = "select * from khairat where id="+id;
     console.log(query);
     con.query(query,callback);
 }


 module.exports.editappointment = function(id,name,ic,phone,address,payment,callback){
     var query = "update khairat set name='"+name+"',ic='"+ic+"',phone='"+phone+"',address='"+address+"',payment='"+payment+"' where id="+id;
     con.query(query,callback);
 }

 module.exports.deleteappointment = function(id,callback){
     var query = "delete from khairat where id="+id;
     con.query(query,callback);
 }
//module.exports =router;


module.exports.findOne =function (email , callback){
    var query = "select *from users where email='"+email+"'" ;
    con.query(query,callback);
    console.log(query);
}

module.exports.temp = function(id,email,token,callback){
    var query = "insert into `temp` (`id`,`email`,`token`) values ('"+id+"','"+email+"','"+token+"')";
    con.query(query,callback);
}

module.exports.checktoken=function(token,callback){
    var query = "select *from temp where token='"+token+"'";
    con.query(query,callback);
    console.log(query);
}

module.exports.setpassword =function(id,newpassword,callback){
    var query = "update `users` set `password`='"+newpassword+"' where id="+id;
    con.query(query,callback);
}

module.exports.add_employee = function(name,umur,ic,address,job,role,callback){
    var query = "Insert into `jawatankuasa` (`name`,`umur`,`ic`,`address`,`job`,`role`,) values ('"+name+"','"+umur+"','"+ic+"','"+address+"','"+job+"','"+role+"')";
    con.query(query,callback);
    console.log(query);
}

module.exports.addMed = function(name,ic,address,job,income,tanggungan,callback){
    var query = "Insert into `asnaf` (name,ic,address,job,income,tanggungan) values('"+name+"','"+ic+"','"+address+"','"+job+"','"+income+"','"+tanggungan+"')";
    console.log(query);
    con.query(query,callback);
}

module.exports.getMedbyId =function(id,callback){
    var query = "select * from asnaf where id="+id;
    con.query(query,callback);
}

module.exports.editmed =function(id,name,ic,address,job,income,tanggungan,callback){
    var query = "update asnaf set name='"+name+"', ic='"+ic+"',address='"+address+"' ,job='"+job+"',income='"+income+"',tanggungan='"+tanggungan+"' where id="+id;
    console.log(query);
    con.query(query,callback);
}

module.exports.getallmed =function (callback){
    var query = "select *from asnaf order by id desc";
    console.log(query);
    con.query(query,callback);
}


module.exports.getAllemployee = function (callback){
    var query = "select * from jawatankuasa";
    con.query(query,callback);
}

module.exports.add_leave = function (name,id,type,from,to,reason,callback){
    var query = "Insert into `leaves` (`employee`,`emp_id`,`leave_type`,`date_from`,`date_to`,`reason`) values ('"+name+"','"+id+"','"+type+"','"+from+"','"+to+"','"+reason+"')";
    console.log(query);
    con.query(query,callback);

    
}

module.exports.getAllLeave=function(callback){
    var query = "Select * from leaves";
    con.query(query,callback);
    
}

module.exports.matchtoken = function(id,token,callback){
    var query = "select * from `verify` where token='"+token+"' and id="+id;
    con.query(query,callback);
    console.log(query);
}

module.exports.updateverify = function (email,email_status,callback){
    var query = "update `users` set `email_status`='"+email_status+"' where `email`='"+email+"'";
    con.query(query,callback);
    
}


module.exports.add_dept = function (facility_name,facility_desc,facility_status,callback){
    var query = "insert into economy(facility_name,facility_desc,facility_status) values ('"+facility_name+"','"+facility_desc+"','"+facility_status+"')";
    con.query(query,callback);
}


module.exports.getalldept = function (callback){
    var query = "select * from economy";
    con.query(query,callback);
}

module.exports.delete_department = function(id,callback){
    var query = "delete from economy where id="+id;
    con.query(query,callback);
}

module.exports.getdeptbyId = function(id,callback){
    var query = "select * from economy where id="+id;
    con.query(query,callback);
}

module.exports.edit_dept= function(id,facility_name,facility_desc,facility_status,callback){
    var query = "update economy set facility_name='"+facility_name+"',facility_desc='"+facility_desc+"',facility_status='"+facility_status+"' where id="+id;
    con.query(query,callback);
}

module.exports.getuserdetails = function(username,callback){
    var query = "select * from users where username='"+username+"'";
    con.query(query,callback);
    console.log(query);
}

module.exports.edit_profile=function(id,username,email,password,callback){
    var query = "update users set username ='"+username+"', email = '"+email+"',password='"+password+"' where id="+id;
    con.query(query,callback);
    console.log(query);
}

module.exports.getleavebyid = function(id,callback){
    var query = "select * from leaves where id="+id;
    con.query(query,callback);
}

module.exports.deleteleave = function(id,callback){
    var query = "delete  from leaves where id="+id;
    con.query(query,callback);
}

module.exports.edit_leave = function(id,name,leave_type,from,to,reason,callback){
    var query = "update leaves set employee='"+name+"',leave_type='"+leave_type+"',date_from='"+from+"',date_to='"+to+"',reason='"+reason+"' where id="+id;
    con.query(query,callback);
}
module.exports.getAllcomplain = function(callback){
    var query = "select * from complain" ;
    con.query(query,callback);
}