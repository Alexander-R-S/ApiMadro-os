const express = require('express');
const cors= require('cors');
const engine = require('ejs-mate');//motor de plantillas 
const path = require('path');
const passport = require('passport');
const expressession = require('express-session');
const flash = require('connect-flash');
const router = express.Router();
router.use(express.static('./views/css'))

//Instanciar rutas
const rutasArbutus=require('./rutas/rutasArbutus');
const rutasComarosta=require('./rutas/rutasComarostaphylis');
const rutasUsuario = require('./rutas/rutasUsuario');
const app=express();
require('./passport/local-auth');
app.set('views', path.join(__dirname, './views'));
app.engine('ejs', engine);
app.set('view engine', 'ejs');

app.use(cors());
app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded( {limit: '50mb', extended: true}));
app.use(expressession({
    secret: 'mysecretsecion',
    resave: false,
    saveUninitialized: false
}));
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());
app.use((req, res, next) => {
    app.locals.singupMessage = req.flash('singupMessage');
    app.locals.singinMessage = req.flash('singinMessage');
    //app.locals.adminUser = req.user;
    next();
});
//Generar endpoints
app.use('/arbutus',rutasArbutus);
app.use('/comarosta',rutasComarosta);
app.use('/usuario',rutasUsuario);

module.exports= app;