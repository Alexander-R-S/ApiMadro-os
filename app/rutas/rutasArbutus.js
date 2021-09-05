const express=require('express');
const Router = express.Router();
const ControladorArbutus=require('../controlador/controladorArbutus');

//const multer = require('multer');
//const storage = multer.memoryStorage();
// SET STORAGE
// var storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//       cb(null, 'uploads')
//     },
//     filename: function (req, file, cb) {
//       cb(null, file.fieldname + '-' + Date.now())
//     }
//   })
//const upload = multer({ storage: storage });
//upload.array("files", 3)

Router.get('/',ControladorArbutus.index)
.post('/add',ControladorArbutus.inserta)
.post('/',ControladorArbutus.buscar2,ControladorArbutus.mostrar)
.put('/:key/:value',ControladorArbutus.buscar,ControladorArbutus.actualizar)
.get('/:key/:value',ControladorArbutus.buscar,ControladorArbutus.mostrar)
.delete('/:key/:value',ControladorArbutus.buscar,ControladorArbutus.eliminar);

module.exports=Router;
