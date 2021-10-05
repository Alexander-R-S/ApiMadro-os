const expres = require('express');
const router = expres.Router();
const passport = require('passport');

router.get('/',(req, res, next) => {
    res.render('index');
});

router.get('/registro', (req, res, next) => {
    res.render('registro');
});

router.post('/registro', passport.authenticate('local-singup',{
    successRedirect: '/perfil',
    failureRedirect: '/registro',
    passReqToCallback: true
}));

router.get('/login', (req, res, next) => {
    res.render('login');
});

router.post('/login', passport.authenticate('local-singin',{
    successRedirect: '/perfil',
    failureRedirect: '/login',
    passReqToCallback: true
}));

router.get('/logout', (req, res, next) => {
    req.logOut();
    res.redirect('/');
});
 
router.get('/perfil', isAuthenticated, (req, res, next) => {
    res.render('perfil');
});

function isAuthenticated(req, res, next) {
    if(req.isAuthenticated()) {
        return next();
    }
    res.redirect('/');
};
module.exports = router;