const ModeloArbutus = require('../modelos/modeloArbutus');

function index(req, res) {
    // console.log('ok');
    ModeloArbutus.find({})
        .then(arbutus => {
            if (arbutus.length) return res.status(200).send({ arbutus });
            return res.status(204).send({ message: 'No hay datos que mostrar' });
        }).catch(error => res.status(500).send(error));
}

function inserta(req, res) {
    let cons = {};
    let imgs = {};
    cons.nombre = req.body.nombre;
    cons.habito = req.body.habito;
    cons.corteza_ramas = req.body.cortezar;
    cons.corteza_ramillas = req.body.cortezars;
    cons.peciolos = req.body.peciolos;
    cons.hojas = req.body.hojas;
    cons.haz = req.body.haz;
    cons.enves = req.body.enves;
    cons.flores = req.body.flores;
    cons.ubicacion = req.body.ubicacion.split(",");
    imgs.imagen1 = req.body.img1;
    imgs.imagen2 = req.body.img2;
    imgs.imagen3 = req.body.img3;
    cons.imagenes = imgs;

    ModeloArbutus(cons).save()
        .then(arbu => res.status(200).send({ message: 'Registro correcto' }))
        .catch(error => res.status(500).send({ error }));
}


function buscar(req, res, next) {
    let consulta = {};
    consulta[req.params.key] = req.params.value;
    ModeloArbutus.find(consulta).then(arbutus => {
        if (!arbutus.length) return next();
        req.body.arbutus = arbutus;
        return next();
    }).catch(error => {
        req.body.error = error;
        next();
    })
}

//Funcion para agregarle el operador LIKE a los valores de la consulta
function regex(param) {
    param = { '$regex': param, '$options': 'i' };
    return param;
}

function buscar2(req, res, next) {
    let nombre, habito, corteza1, corteza2, peciolos, hojas, haz, enves, flores, ubicacion;
    let query = {};

    nombre = req.body.nombre;
    habito = req.body.habito;
    corteza1 = req.body.corteza_ramas;
    corteza2 = req.body.corteza_ramillas;
    peciolos = req.body.peciolos;
    hojas = req.body.hojas;
    haz = req.body.haz;
    enves = req.body.enves;
    flores = req.body.flores;
    ubicacion = req.body.ubicacion;

    if (nombre) {
        nombre = regex(nombre);
        query.nombre = nombre;
    }
    if (habito) {
        habito = regex(habito);
        query.habito = habito;
    }
    if (corteza1) {
        corteza1 = regex(corteza1);
        query.corteza_ramas = corteza1;
    }
    if (corteza2) {
        corteza2 = regex(corteza2);
        query.corteza_ramillas = corteza2;
    }
    if (peciolos) {
        peciolos = regex(peciolos);
        query.peciolos = peciolos;
    }
    if (hojas) {
        hojas = regex(hojas);
        query.hojas = hojas;
    }
    if (haz) {
        haz = regex(haz);
        query.haz = haz;
    }
    if (enves) {
        enves = regex(enves);
        query.enves = enves;
    }
    if (flores) {
        flores = regex(flores);
        query.flores = flores;
    }
    if (ubicacion) {
        ubicacion = regex(ubicacion);
        query.ubicacion = ubicacion;
    }

    //console.log(query);     

    ModeloArbutus.countDocuments(query).then(cifra => {
        req.body.cifra2 = cifra
        console.log(cifra);
    }).catch(error => { req.body.error = error; })

    ModeloArbutus.find(query).then(arbutus => {
        if (!arbutus.length) return next();
        req.body.arbutus = arbutus;
        return next();
    }).catch(error => {
        req.body.error = error;
        next();
    })
    //    query={
    //        nombre,
    //        habito
    // };
}

function mostrar(req, res) {
    if (req.body.error) return res.status(500).send({ error });
    if (!req.body.arbutus) return res.status(404).send({ message: 'No hay resultados' });
    let arbutus = req.body.arbutus;
    let count = req.body.cifra2;
    return res.status(200).send({ arbutus, count });
}

function eliminar(req, res) {
    if (req.body.error) return res.status(500).send({ error });
    if (!req.body.arbutus) return res.status(404).send({ message: 'No se puede eliminar el registro' });
    req.body.arbutus[0].remove().then(arBaja => {
        res.status(200).send({ message: 'El registro se elimino correctamente', arBaja });
    }).catch(error => res.status(500).send({ error }));
}

module.exports = {
    index,
    buscar,
    buscar2,
    mostrar,
    inserta,
    eliminar
}