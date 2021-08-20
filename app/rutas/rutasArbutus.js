const express=require('express');
const Router = express.Router();
const ControladorArbutus=require('../controlador/controladorArbutus');


Router.get('/',ControladorArbutus.index)
.post('/add',ControladorArbutus.inserta)
.post('/',ControladorArbutus.buscar2,ControladorArbutus.mostrar)
.get('/:key/:value',ControladorArbutus.buscar,ControladorArbutus.mostrar);

module.exports=Router;
