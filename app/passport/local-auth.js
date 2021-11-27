const passport = require('passport');
//los distontos metodos de autenticacion que utiliza passport se les nombran estrategias Strategy
const localStrategy = require('passport-local').Strategy; 
const User = require('../modelos/modeloUsuario');


/*estas dos funciones sirven para serializar los datos mediante passport y de esta 
manera guardarlos en datos del navegador para validar que se hizo un login correcto y 
puede acceder a las vistas permitidas, esta primera es para serializar*/
passport.serializeUser((user, done) => {
    done(null, user.id);
});
/*y esta para deserializar y buscar si esta en la db*/
passport.deserializeUser(async (id, done) => {
    const user = await User.findById(id);
    done(null, user);
});

//funcion para procesar los datos del cliente
passport.use('local-singup', new localStrategy({
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true
    //datos que voy a cachar, aqui
}, async (req, email, password, done) => {
    //funcion para saber que voy a hacer con los datos que cache, aqui
    const replic = await User.findOne({ email: email });
    console.log(replic);
    if(replic){
        return done(null, false, req.flash('singupMessage', 'No se pudo hacer el registro porque el usuario ya existe'));
    } else {
        const newUser = new User();
        newUser.email = email;
        newUser.password = newUser.encryptPassword(password);//asi es como se sifra los datos que se estubieron preparando
        console.log(newUser);
        await newUser.save();
        done(null, newUser);
    }
}));

passport.use('local-singin', new localStrategy({
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true
}, async (req, email, password, done) => {

    const user = await User.findOne({email: email});
    if(!user) {
        return done(null, false, req.flash('singinMessage', 'Usuario no encontrado'));
    }
    if(!user.comparePassword(password)) {
        return done(null, false, req.flash('singinMessage', 'Contraseña incorrecta'));
    }
    done(null, user);
}));