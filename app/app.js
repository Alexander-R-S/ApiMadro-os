const express = require('express');
//Instanciar rutas
const rutasArbutus=require('./rutas/rutasArbutus');
const rutasComarosta=require('./rutas/rutasComarostaphylis');
const app=express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Generar endpoints
app.use('/arbutus',rutasArbutus);
app.use('/comarosta',rutasComarosta);

module.exports= app;