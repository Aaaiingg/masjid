var express = require ('express');
var session = require ('express-session');
var cookie = require ('cookie-parser');
var path = require ('path');
var ejs= require ('ejs');
var multer = require('multer');
var path = require ('path');
var async = require ('async');
var nodmailer = require ('nodemailer');
var crypto = require ('crypto');
var expressValidator = require ('express-validator');
var  sweetalert = require('sweetalert2');
var app = express();



var bodyParser = require ('body-parser');

var  login = require ('./controllers/login');
var  home = require ('./controllers/home');
var  signup = require ('./controllers/signup');
var  anak_yatim = require ('./controllers/anak_yatim');
var db = require ('./models/db_controller');
var reset = require('./controllers/reset_controller');
var set = require('./controllers/set_controller');
var jawatankuasa = require ('./controllers/jawatankuasa.js');
var logout = require ('./controllers/logout');
var verify = require ('./controllers/verify');
var asnaf = require ('./controllers/asnaf');
var landing = require ('./controllers/landing');
var complain = require ('./controllers/complain');
var inbox = require ('./controllers/inbox');
var khairat = require ('./controllers/khairat');
var receipt = require ('./controllers/receipt');
//var booking = require ('./controllers/booking');

var app = express();


app.set('view engine ', 'ejs');




app.use(express.static('./public'));
app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());
app.use(cookie());
//app.use(expressValidator());


var server =app.listen(3000 , function(){

    console.log('server started');
});

app.use('/login' ,login);
app.use('/home' , home);
app.use('/signup' , signup);
app.use('/anakyatim', anak_yatim);
app.use('/resetpassword' ,reset);
app.use('/setpassword',set);
app.use('/jawatankuasa',jawatankuasa);
app.use ('/logout',logout);
app.use ('/verify', verify);
app.use ('/asnaf', asnaf);
app.use ('/',landing);
app.use ('/complain',complain);
app.use ('/inbox',inbox);
app.use ('/khairat',khairat);
app.use('/receipt',receipt);
//app.use('/booking',booking);

