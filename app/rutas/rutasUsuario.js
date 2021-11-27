const express = require('express');
const router = express.Router();
const passport = require('passport');
router.use(express.static('./app/public'));

router.get('/registro', (req, res, next) => {
    res.render('registro');
});

router.post('/registro', passport.authenticate('local-singup',{
    successRedirect: 'login',
    failureRedirect: 'registro',
    passReqToCallback: true
}));

router.get('/login', (req, res, next) => {
    res.render('login');
});

router.post('/login', passport.authenticate('local-singin',{
    successRedirect: 'newArbutus',
    failureRedirect: 'login',
    passReqToCallback: true
}));

router.get('/logout', (req, res, next) => {
    req.logOut();
    res.redirect('/usuario/login');
});

router.get('/perfil', isAuthenticated, (req, res, next) => {
    res.render('perfil');
});

router.get('/newarbutus', isAuthenticated, (req, res, next) => {
    res.render('newArbutus');
});
router.get('/newcomarostaphylis', isAuthenticated, (req, res, next) => {
    res.render('newComarostaphylis');
});

function isAuthenticated(req, res, next) {
    if(req.isAuthenticated()) {
        return next();
    }
    res.redirect('/usuario/login');
};
module.exports = router;