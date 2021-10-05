const passport = require('passport');
const localStrategy = require('passport-local').Strategy;
const User = require('../modelos/modeloUsuario')

passport.serializeUser((user, done) => {
    done(null, user.id);
});
passport.deserializeUser(async (id, done) => {
    const user = await User.findById(id);
    done(null, user);
});

passport.use('local-singup', new localStrategy({
    usernameField: 'user',
    passwordField: 'password',
    passReqToCallback: true
}, async (req, user, password, done) => {
    const replic = await User.findOne({ user: user });
    console.log(replic);
    if(replic){
        return done(null, false, req.flash('singupMessage', 'No se puedo hacer el registro porque el usuario ya existe'));
    } else {
        const newUser = new User();
        newUser.user = user;
        newUser.password = newUser.encryptPassword(password);
        await newUser.save();
        done(null, newUser);
    }
}));

passport.use('local-singin', new localStrategy({
    usernameField: 'user',
    passwordField: 'password',
    passReqToCallback: true
}, async (req, user, password, done) => {

    const user = await User.findOne({user: user});
    if(!user) {
        return done(null, false, req.flash('singinMessage', 'usuario no encontrado'));
    }
    if(!user.comparePassword(password)) {
        return done(null, false, req.flash('singinMessage', 'Contraseña incorrecta'));
    }
    done(null, user);
}));