const ModeloComarosta =require('../modelos/modelosComarostaphylis');


function index(req,res){
     // console.log('ok');
    ModeloComarosta.find({})
    .then(comarosta=>{
        if(comarosta.length) return res.status(200).send({comarosta});
        return res.status(204).send({message:'No hay datos que mostrar'});
    }).catch(error=>res.status(500).send(error));
}

function buscar(req,res,next){
    let consulta={};
    consulta[req.params.key]=req.params.value;
    ModeloComarosta.find(consulta).then(comarosta=>{
        if(!comarosta.length) return next();
        req.body.comarosta=comarosta;
        return next();
    }).catch(error=>{req.body.error=error;
        next();
    })
}
function mostrar(req,res){
    if(req.body.error) return res.status(500).send({error});
    if(!req.body.comarosta) return res.status(404).send({message:'No hay resultados'});
    let comarosta=req.body.comarosta;
    return res.status(200).send({comarosta});
}

module.exports={
    index,
    buscar,
    mostrar
}