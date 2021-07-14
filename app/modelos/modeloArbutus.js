const mongoose = require('mongoose');

const ArbutusSchema = new mongoose.Schema({
    nombre:{
        type:String,
        require:true
    },
    codigo:{
        type:Number,
        require:true
    },
    precio:{
        type:Number,
        require:true
    },
    existencia:{
        type:Number,
        default:5
    }
})

const Arbutus = mongoose.model('Arbutus', ArbutusSchema);
module.exports = Arbutus;