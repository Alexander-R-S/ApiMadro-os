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
    //consulta[req.params.key] = { '$regex': req.params.value, '$options': 'i' } && { '$regex': req.params.value, '$options': 'i' };
    consulta[req.params.key] = { '$regex': req.params.value, '$options': 'i' };
    //consulta[req.params.key]=req.params.value;
    ModeloComarosta.find(consulta).then(comarosta=>{
        if(!comarosta.length) return next();
        req.body.comarosta=comarosta;
        return next();
    }).catch(error=>{req.body.error=error;
        next();
    })
}

function regex(param){
    param={ '$regex':param, '$options': 'i' };
    return param;
}

function buscarvarios(req,res,next){
    let nombre,habito,corteza1,corteza2,peciolos,hojas,haz,enves,flores,ubicacion;
    let query={};

    nombre=req.body.nombre;
    habito=req.body.habito;
    peciolos=req.body.peciolos_ramillas;
    hojas=req.body.hojas;
    margen=req.body.margen;
    haz=req.body.haz;
    enves=req.body.enves;
    inflorescencia=req.body.inflorescencia;
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
    if(peciolos){
        peciolos=regex(peciolos);
        query.peciolos=peciolos;
    }
    if(hojas){
        hojas=regex(hojas);
        query.hojas=hojas;
    }
    if(margen){
        margen=regex(margen);
        query.margen=margen;
    }
    if(haz){
        haz=regex(haz);
        query.haz=haz;
    }
    if(enves){
        enves=regex(enves);
        query.enves=enves;
    }
    if(inflorescencia){
        inflorescencia=regex(inflorescencia);
        query.inflorescencia=inflorescencia;
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
    ModeloComarosta.find(query).then(comarosta=>{
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
    regex,
    buscarvarios,
    mostrar
}