const express=require('express');
const Router = express.Router();
const ControladorComarosta=require('../controlador/controladorComarostaphylis');

Router.get('/',ControladorComarosta.index)
.post('/',ControladorComarosta.buscarvarios,ControladorComarosta.mostrar)
.get('/:key/:value',ControladorComarosta.buscar,ControladorComarosta.mostrar);

module.exports=Router;
