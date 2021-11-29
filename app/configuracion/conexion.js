const mongoose=require('mongoose');
const config = require('../configuracion/config');

module.exports={
    connection:null,
    connect:function(){
        if(this.connection) return this.connection
        return mongoose.connect(config.BD,{useNewUrlParser:true,useUnifiedTopology:true}).then(conexion =>{
            this.connection=conexion;
            console.log('Conexion correcta');
        }).catch(error => console.log(error));
    }
}