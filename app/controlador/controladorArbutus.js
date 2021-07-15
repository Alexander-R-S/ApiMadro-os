const ModeloArbutus =require('../modelos/modeloArbutus');

function index(req,res){
     // console.log('ok');
    ModeloArbutus.find({})
    .then(arbutus=>{
        if(arbutus.length) return res.status(200).send({arbutus});
        return res.status(204).send({message:'No hay datos que mostrar'});
    }).catch(error=>res.status(500).send(error));
}

function buscar(req,res,next){
    let consulta={};
    consulta[req.params.key] = { '$regex': req.params.value, '$options': 'i' };
    // consulta[req.params.key]=req.params.value;
    ModeloArbutus.find(consulta).then(arbutus=>{
        if(!arbutus.length) return next();
        req.body.arbutus=arbutus;
        return next();
    }).catch(error=>{req.body.error=error;
        next();
    })
}

function buscar2(req,res,next){
    let nombre=0;
    let habito=0;
    let corteza1=0;
    let corteza2=0
    let peciolos=0;
    let hojas=0;
    let haz=0;
    let enves=0;
    let flores=0;
    let query={};

    nombre=req.body.nombre;
    habito=req.body.habito;
    corteza1=req.body.corteza_ramas;
    corteza2=req.body.corteza_ramillas;
    peciolos=req.body.peciolos;
    hojas=req.body.hojas;
    haz=req.body.haz;
    enves=req.body.enves;
    flores=req.body.flores;
    if (nombre!="" || habito!="") {
           console.log(nombre);
           query={
               nombre,
               habito
        };
           console.log(query);
        }   

//     for (let index = 0; index < req.body.length; index++) {
//         if (nombre!="") {
//                console.log(nombre);
//             }   
// }

    // for (let index = 0; index < req.body.length; index++) {
    //     if (nombre!="") {
    //         console.log(nombre);
    //         console.log('hola');
    //     }   
    // }

    // console.log(habito);
    // console.log(corteza1);
    // console.log(corteza2);
    // console.log(peciolos);
    // console.log(hojas);
    // console.log(haz);
    // console.log(enves);
    // console.log(flores);

    // ModeloArbutus.find(consulta).then(arbutus=>{
    //     if(!arbutus.length) return next();
    //     req.body.arbutus=arbutus;
    //     return next();
    // }).catch(error=>{req.body.error=error;
    //     next();
    // })
}

function mostrar(req,res){
    if(req.body.error) return res.status(500).send({error});
    if(!req.body.arbutus) return res.status(404).send({message:'No hay resultados'});
    let arbutus=req.body.arbutus;
    return res.status(200).send({arbutus});
}

module.exports={
    index,
    buscar,
    buscar2,
    mostrar
}