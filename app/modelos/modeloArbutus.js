const mongoose = require('mongoose');

const ArbutusSchema = new mongoose.Schema({
    nombre:{
        type:String,
        require:true
    },
    imagenes:{
        type:String,
        require:true
    },
    habito:{
        type:String,
        require:true
    },
    corteza_ramas:{
        type:String,
        require:true
    },
    corteza_ramillas:{
        type:String,
        require:true
    },
    peciolos:{
        type:String,
        require:true
    },
    hojas:{
        type:String,
        require:true
    },
    haz:{
        type:String,
        require:true
    },
    enves:{
        type:String,
        require:true
    },
    flores:{
        type:String,
        require:true
    },
    ubicacion:{
        type:String,
        require:true
    }
})

const Arbutus = mongoose.model('arbutus', ArbutusSchema);
module.exports = Arbutus;