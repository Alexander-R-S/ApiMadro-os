const mongoose=require('mongoose');
const config = require('../configuracion/config');

module.exports={
    connection:null,
    connect:function(){
        if(this.connection) return this.connection
        return mongoose.connect(config.BD).then(conexion =>{
            this.connection=conexion;
            console.log('Conexion correcta');
        }).catch(error => console.log(error));
    }
}