const express=require('express');
const Router = express.Router();
const ControladorComarosta=require('../controlador/controladorComarostaphylis');


Router.get('/',ControladorComarosta.index)
.get('/:key/:value',ControladorComarosta.buscar,ControladorComarosta.mostrar);

module.exports=Router;
