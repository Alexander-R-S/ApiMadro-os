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
function regex(param){
    param={ '$regex':param, '$options': 'i' };
    return param;
}

function buscar2(req,res,next){
    let nombre,habito,corteza1,corteza2,peciolos,hojas,haz,enves,flores,ubicacion;
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
    ubicacion=req.body.ubicacion;

    if (nombre) {
        nombre=regex(nombre);
        query.nombre=nombre;
    }
    if(habito){
        habito=regex(habito);
        query.habito=habito;
    }
    if(corteza1){
        corteza1=regex(corteza1);
        query.corteza1=corteza1;
    }
    if(corteza2){
        corteza2=regex(corteza2);
        query.corteza2=corteza2;
    }
    if(peciolos){
        peciolos=regex(peciolos);
        query.peciolos=peciolos;
    }
    if(hojas){
        hojas=regex(hojas);
        query.hojas=hojas;
    }
    if(haz){
        haz=regex(haz);
        query.haz=haz;
    }
    if(enves){
        enves=regex(enves);
        query.enves=enves;
    }
    if(flores){
        flores=regex(flores);
        query.flores=flores;
    }
    if(ubicacion){
        ubicacion=regex(ubicacion);
        query.ubicacion=ubicacion;
    }

     console.log(query);
    ModeloArbutus.find(query).then(arbutus=>{
        if(!arbutus.length) return next();
        req.body.arbutus=arbutus;
        return next();
    }).catch(error=>{req.body.error=error;
        next();
    })
     //    query={
        //        nombre,
        //        habito
        // };
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