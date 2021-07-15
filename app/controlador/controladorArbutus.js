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
function mostrar(req,res){
    if(req.body.error) return res.status(500).send({error});
    if(!req.body.arbutus) return res.status(404).send({message:'No hay resultados'});
    let arbutus=req.body.arbutus;
    return res.status(200).send({arbutus});
}

module.exports={
    index,
    buscar,
    mostrar
}