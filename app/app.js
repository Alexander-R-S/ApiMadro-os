const express = require('express');
const cors= require('cors');
//Instanciar rutas
const rutasArbutus=require('./rutas/rutasArbutus');
const rutasComarosta=require('./rutas/rutasComarostaphylis');
const app=express();

app.use(cors());

app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded( {limit: '50mb', extended: true}));

//Generar endpoints
app.use('/arbutus',rutasArbutus);
app.use('/comarosta',rutasComarosta);

module.exports= app;