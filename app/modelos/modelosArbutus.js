const mongoose=require('mongoose');

const ArbutusSchema = new mongoose.Schema({
    // nombre:{
    //     type:String,
    //     required:true,
    // },
    // codigo:{
    //     type:Number,
    //     required:true
    // },
    // precio:{
    //     type:Number,
    //     required:true
    // },
    // existencia:{
    //     type:Number,
    //     default:5
    // }
})
const Arbutus=mongoose.model('arbutus',ArbutusSchema);

module.exports=Arbutus;