const express=require('express');
const ControladorArbutus=require('../controlador/controladorArbutus');

const Router=express.Router();

Router.get('/',ControladorArbutus.index)
.get('/:key/:value',ControladorArbutus.buscar,ControladorArbutus.mostrar)

module.exports=Router;
