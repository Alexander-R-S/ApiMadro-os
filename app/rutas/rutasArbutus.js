const express=require('express');
const Router = express.Router();
const ControladorArbutus=require('../controlador/controladorArbutus');


Router.get('/',ControladorArbutus.index)
.get('/:key/:value',ControladorArbutus.buscar,ControladorArbutus.mostrar);

module.exports=Router;
