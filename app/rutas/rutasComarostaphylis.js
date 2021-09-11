const express=require('express');
const Router = express.Router();
const ControladorComarosta=require('../controlador/controladorComarostaphylis');

Router.get('/',ControladorComarosta.index)
.post('/add',ControladorComarosta.inserta)
.post('/',ControladorComarosta.buscarvarios,ControladorComarosta.mostrar)
.get('/:key/:value',ControladorComarosta.buscar,ControladorComarosta.mostrar)
.put('/:key/:value',ControladorComarosta.buscar,ControladorComarosta.actualizar)
.delete('/:key/:value',ControladorComarosta.buscar,ControladorComarosta.eliminar);

module.exports=Router;
