const mongoose = require('mongoose');

const ComarostaSchema = new mongoose.Schema({
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

const Comarosta = mongoose.model('Comarosta', ComarostaSchema);
module.exports = Comarosta;