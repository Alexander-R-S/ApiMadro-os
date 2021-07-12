const express = require('express');
//Instanciar rutas
const app=express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Generar endpoints
//app.use('/vinos',rutasVinos);

module.exports= app;