const ModeloComarosta =require('../modelos/modelosComarostaphylis');


function index(req,res){
     // console.log('ok');
    ModeloComarosta.find({})
    .then(comarosta=>{
        if(comarosta.length) return res.status(200).send({comarosta});
        return res.status(204).send({message:'No hay datos que mostrar'});
    }).catch(error=>res.status(500).send(error));
}

function inserta(req, res) {
    let cons = {};
    let imgs = {};
    cons.nombre = req.body.nombre;
    cons.habito = req.body.habito;
    cons.peciolos_ramillas = req.body.peciolosr;
    cons.inflorescencia = req.body.inflorescencia;
    cons.margen = req.body.margen;
    cons.hojas = req.body.hojas;
    cons.haz = req.body.haz;
    cons.enves = req.body.enves;
    cons.flores = req.body.flores;
    cons.ubicacion = req.body.ubicacion.split(",");
    imgs.imagen1 = req.body.img1;
    imgs.imagen2 = req.body.img2;
    imgs.imagen3 = req.body.img3;
    cons.imagenes = imgs;

    ModeloComarosta(cons).save()
        .then(coma => res.status(200).send({ message: 'Registro correcto' }))
        .catch(error => res.status(500).send({ error }));
}

function actualizar(req,res){
    if(req.body.error) return res.status(500).send({error});
    if(!req.body.comarosta) return res.status(404).send({message:'No se puede actualizar'});

    let cons = {};
    let imgs = {};
    cons.nombre = req.body.nombre;
    cons.habito = req.body.habito;
    cons.peciolos_ramillas = req.body.peciolosr2;
    cons.inflorescencia = req.body.inflorescencia2;
    cons.margen = req.body.margen2;
    cons.hojas = req.body.hojas;
    cons.haz = req.body.haz;
    cons.enves = req.body.enves;
    cons.flores = req.body.flores;
    cons.ubicacion = req.body.ubicacion.split(",");
    imgs.imagen1 = req.body.img1;
    imgs.imagen2 = req.body.img2;
    imgs.imagen3 = req.body.img3;
    cons.imagenes = imgs;

    let comaObj= req.body.comarosta[0];
    comaObj=Object.assign(comaObj,cons);
    comaObj.save().then(comaAlta=>{
    res.status(200).send({message:'El registro se actualizo correctamente', comaAlta});
    }).catch(error=>res.status(500).send({error}));
}

function buscar(req,res,next){
    let consulta={};
    //consulta[req.params.key] = { '$regex': req.params.value, '$options': 'i' } && { '$regex': req.params.value, '$options': 'i' };
    consulta[req.params.key] = req.params.value;
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
    let nombre,habito,peciolos,hojas,haz,enves,flores,ubicacion;
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

    //console.log("consulta",query);
    ModeloComarosta.countDocuments(query).then(cifra=>{
        console.log("numero de objetos",cifra);
    }).catch(error=>{req.body.error=error;})

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

function eliminar(req, res) {
    if (req.body.error) return res.status(500).send({ error });
    if (!req.body.comarosta) return res.status(404).send({ message: 'No se puede eliminar el registro' });
    req.body.comarosta[0].remove().then(comaBaja => {
        res.status(200).send({ message: 'El registro se elimino correctamente', comaBaja });
    }).catch(error => res.status(500).send({ error }));
}

module.exports={
    index,
    buscar,
    buscarvarios,
    mostrar,
    inserta,
    eliminar,
    actualizar
}