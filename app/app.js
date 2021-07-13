const express = require('express');
//Instanciar rutas
const rutasArbutus=require('./rutas/rutasArbutus');
const rutasComaros=require('./rutas/rutasComaros');
const app=express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Generar endpoints
app.use('/arbutus',rutasArbutus);
app.use('/comarostaphylis',rutasComaros);

module.exports= app;