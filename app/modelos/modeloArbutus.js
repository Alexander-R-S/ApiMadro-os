const mongoose = require('mongoose');

const ArbutusSchema = new mongoose.Schema({
    nombre:{
        type:String,
        require:true
    },
    imagenes:{
        type:Object,
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
        type:Object,
        require:true
    }
});

ArbutusSchema.index({nombre:1,habito:1,corteza_ramas:1,corteza_ramillas:1,peciolos:1,hojas:1,haz:1,enves:1,flores:1,ubicacion:1}, { unique: true });

const Arbutus = mongoose.model('arbutus', ArbutusSchema);
module.exports = Arbutus;