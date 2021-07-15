use madroños;

db.createCollection("arbutus");
db.createCollection("comarostaphylis");

///// COLLECCION ARBUTUS

db.arbutus.insert([
    {
        "nombre": "arizonica",
        "imagenes": {
            "imagen1": "img/Arbutus/A.arizonica/img1.jpg",
            "imagen2": "img/Arbutus/A.arizonica/img2.jpg",
            "imagen3": "img/Arbutus/A.arizonica/img3.jpg"
        },
        "habito": "arbol",
        "corteza_ramas": "exfoliante en laminillas o persistente delgada, de color rojo o naranja",
        "corteza_ramillas": "lisa o persistente, pero delgada",
        "peciolos": "glabros (lisos), rojos",
        "hojas": "glabras (lisas), ovado lanceoladas, 3-9 cm largo, 1-6 cm ancho, herbáceas, color verde olivo",
        "haz": "glabro (liso)",
        "enves": "glabro (liso)",
        "flores": "blancas a verdosas o amarillentas",
        "ubicacion": [
            "Aguascalientes",
            "Chihuahua",
            "Ciudad de México",
            "Coahuila",
            "Durango",
            "Estado de México",
            "Guanajuato",
            "Jalisco",
            "Michoacán",
            "Nayarit",
            "Nuevo León",
            "Querétaro",
            "San Luis Potosí",
            "Sinaloa",
            "Sonora",
            "Zacatecas"
        ]
    }
]);
db.arbutus.insert([
    {
        "nombre": "arizonica.cf",
        "imagenes": {
            "imagen1": "img/Arbutus/A.arizonica-cf/img1.jpg",
            "imagen2": "img/Arbutus/A.arizonica-cf/img2.jpg",
            "imagen3": "img/Arbutus/A.arizonica-cf/img3.jpg"
        },
        "habito": "arbol",
        "corteza_ramas": "exfoliante en láminas o persistente, de color rojo o naranja, la interior crema a blanquecina ",
        "corteza_ramillas": "lisa o persistente, pero delgada",
        "peciolos": "glabros (lisos), rosas a rojos",
        "hojas": " glabras (lisas), elípticas a ovado lanceoladas, más grandes que las de arizonica, herbáceas, color verde olivo (rojas en secas)",
        "haz": "glabro (liso), lustroso",
        "enves": "glabro (liso)",
        "flores": "blancas a verdosas o amarillentas",
        "ubicacion": [
            "Chihuahua",
            "Durango",
            "Jalisco",
            "Sonora",
            "Zacatecas"
        ]
    }
]);
db.arbutus.insert([
    {
        "nombre": "bicolor",
        "imagenes": {
            "imagen1": "img/Arbutus/A.bicolor/img1.jpg",
            "imagen2": "img/Arbutus/A.bicolor/img2.jpg",
            "imagen3": "img/Arbutus/A.bicolor/img3.jpg"
        },
        "habito": "arbol",
        "corteza_ramas": "exfoliante en láminas, la interior de color crema, canela o rojizo",
        "corteza_ramillas": "lisa, la exterior exfoliada",
        "peciolos": "con muchos pelos glandulares cortos, evidentes",
        "hojas": "ovadas, 6-14 cm largo, 4-9.5 cm ancho, subcoriáceas, acorazonadas o truncadas en la base, bicolores, el haz y el envés contrastantes",
        "haz": "finamente pubescente, verde oscuro, algo opaco",
        "enves": "con pubescencia densa que cubre totalmente el envés, a veces con manchas negras (hongos)",
        "flores": "rosas o blancas con tinte rosa",
        "ubicacion": [
            "Chihuahua",
            "Ciudad de México",
            "Durango",
            "Estado de México",
            "Guanajuato",
            "Hidalgo",
            "Jalisco",
            "Michoacán",
            "Morelos",
            "Queretaro",
            "San Luis Potosí",
            "Tlaxcala",
            "Veracruz",
            "Zacatecas"
        ]
    }
]);
db.arbutus.insert([

    {
        "nombre": "madrensis",
        "imagenes": {
            "imagen1": "img/Arbutus/A.madrensis/img1.jpg",
            "imagen2": "img/Arbutus/A.madrensis/img2.jpg",
            "imagen3": "img/Arbutus/A.madrensis/img3.jpg"
        },
        "habito": "arbol",
        "corteza_ramas": "persistente (con cáscara), gris ",
        "corteza_ramillas": "persistente (leñosa, con cáscara)",
        "peciolos": "con pubescencia corta, sin pelos glandulares",
        "hojas": " ampliamente ovadas, 8-15 cm largo, 6-9 cm ancho, subcoriáceas a coriáceas, color verde,  rojas en temporada de secas",
        "haz": "glabro (liso), lustroso, puede tener pubescencia en la nervadura central",
        "enves": "con pubescencia espaciada color marrón, más en la nervadura central",
        "flores": "verdosas o blanco verdosas",
        "ubicacion": [
            "Aguascalientes",
            "Durango",
            "Jalisco",
            "Nuevo León",
            "Sinaloa",
            "Sonora",
            "Zacatecas"
        ]
    }
]);

db.arbutus.insert([
    {
        "nombre": "mollis",
        "imagenes": {
            "imagen1": "img/Arbutus/A.mollis/img1.jpg",
            "imagen2": "img/Arbutus/A.mollis/img2.jpg",
            "imagen3": "img/Arbutus/A.mollis/img3.jpg"
        },
        "habito": "arbusto usualmente formando manchones, rara vez arbolitos hasta de 2.5 m",
        "corteza_ramas": "exfoliante (lisa)",
        "corteza_ramillas": "lisa",
        "peciolos": "color rosado, con pubescencia. Algunas poblaciones del centro de México con pelos glandulares",
        "hojas": "oblongas a ovadas, 3-8.5 cm largo, 1.5-4 cm ancho, subcoriáceas a coriáceas",
        "haz": "finamente pubescente, opaco",
        "enves": "densamente pubescente al menos sobre la parte media)",
        "flores": "blanquecinas a rosadas con tinte rojo",
        "ubicacion": [
            "Aguascalientes",
            "Chihuahua",
            "Ciudad de México",
            "Guerrero",
            "Hidalgo",
            "Morelos",
            "Durango",
            "Estado de México",
            "Guanajuato",
            "Jalisco",
            "Michoacán",
            "Nayarit",
            "Puebla",
            "Oaxaca",
            "Querétaro",
            "San Luis Potosí",
            "Sinaloa",
            "Sonora",
            "Zacatecas"
        ]
    }
]);

db.arbutus.insert([
    {
        "nombre": "occidentalis",
        "imagenes": {
            "imagen1": "img/Arbutus/A.occidentalis/img1.jpg",
            "imagen2": "img/Arbutus/A.occidentalis/img2.jpg",
            "imagen3": "img/Arbutus/A.occidentalis/img3.jpg"
        },
        "habito": "arbusto, postrado, colonial",
        "corteza": "exfoliante en laminillas o persistente delgada, de color naranja a marrón",
        "corteza_ramillas": "lisa o persistente, pero delgada",
        "peciolos": "glabros (lisos), usualmente de color rojo a púrpura",
        "hojas": "glabras (lisas), ovadas a elípticas, 2.5-5 cm largo, 1-2.6 cm ancho, subcoriáceas",
        "haz": "glabro (liso), lustroso",
        "enves": "glabro (liso)",
        "flores": "rosas, rojizas o blancas con tintes rojos",
        "ubicacion": [
            "Aguascalientes",
            "Chihuahua",
            "Durango",
            "Jalisco",
            "Nayarit",
            "Sinaloa",
            "Zacatecas"
        ]
    }
]);
db.arbutus.insert([
    {
        "nombre": "peninsularis",
        "imagenes": {
            "imagen1": "img/Arbutus/A.peninsularis/img1.jpg",
            "imagen2": "img/Arbutus/A.peninsularis/img2.jpg",
            "imagen3": "img/Arbutus/A.peninsularis/img3.jpg"
        },
        "habito": "arbol",
        "corteza_ramas": "exfoliante en láminas, la interna lisa",
        "corteza_ramillas": "exfoliante, la interna lisa",
        "peciolos": "con pelos no glandulares",
        "hojas": "ovadas, 5-11 cm largo, subcoriáceas",
        "haz": "glabro (liso), verde claro",
        "enves": "con pelos algo enmarañados",
        "flores": "amarillentas o cremosas",
        "ubicacion": [
            "Baja California"
        ]
    }
]);
db.arbutus.insert([
    {
        "nombre": "tessellata",
        "imagenes": {
            "imagen1": "img/Arbutus/A.tessellata/img1.jpg",
            "imagen2": "img/Arbutus/A.tessellata/img2.jpg",
            "imagen3": "img/Arbutus/A.tessellata/img3.jpg"

        },
        "habito": "arbol",
        "corteza_ramas": "persistente, leñosa (con cáscara)",
        "corteza_ramillas": "persistente, leñosa (con cáscara)",
        "peciolos": "rosas, con pelos glandulares largos 1-8 m",
        "hojas": "ovadas a elípticas, 2-11 cm largo, 1.4-5.5 cm ancho, herbáceas a subcoriáceas, verde claro",
        "haz": "glabro o con escasa pubescencia, verde claro",
        "enves": "con pelos glandulares, principalmente en la nervadura central",
        "flores": "blancas o amarillentas",
        "ubicacion": [
            "Aguascalientes",
            "Chihuahua",
            "Ciudad de México",
            "Colima",
            "Durango",
            "Estado de México",
            "Guanajuato",
            "Guerrero",
            "Hidalgo",
            "Jalisco",
            "Michocán",
            "Morelos",
            "Nayarit",
            "Oxaca",
            "Puebla",
            "Querétaro",
            "San Luis Potosí",
            "Sinaloa",
            "Sonora",
            "Tlaxcala",
            "Veracruz",
            "Zacatecas"
        ]
    }
]);
db.arbutus.insert([
    {
        "nombre": "xalapensis.xalapensis",
        "imagenes": {
            "imagen1": "img/Arbutus/A.xalapensis-var.xalapensis/img1.jpg",
            "imagen2": "img/Arbutus/A.xalapensis-var.xalapensis/img2.jpg",
            "imagen3": "img/Arbutus/A.xalapensis-var.xalapensis/img3.jpg"
        },
        "habito": "arbol",
        "corteza_ramas": "exfoliante en láminas, corteza interior lisa",
        "corteza_ramillas": "exfoliante, lisa",
        "peciolos": "con pelos grises, marrones o rojizos",
        "hojas": "ovadas, elípticas u oblongas, 7-15 cm largo, 3-9 cm ancho, herbáceas",
        "haz": "glabro o casi glabro, verde claro, lustroso",
        "enves": "envés con pelos rojizos largos, sobre todo a lo largo de la nervadura",
        "flores": "blancas, cremas, amarillentas a verdosas",
        "ubicacion": [
            "Aguascalientes",
            "Chiapas",
            "Chihuahua",
            "Ciudad de México",
            "Coahuila",
            "Colima",
            "Durango",
            "Estado de México",
            "Guanajuato",
            "Guerrero",
            "Hidalgo",
            "Jalisco",
            "Michoacán",
            "Morelos",
            "Nayarit",
            "Nuevo León",
            "Oaxaca",
            "Puebla",
            "Querétaro",
            "San Luis Potosi",
            "Sinaloa",
            "Sonora",
            "Tamaulipas",
            "Tlaxcala",
            "Veracruz",
            "Zacatecas"
        ]
    }
]);
db.arbutus.insert([
    {
        "nombre": "xalapensis.f.alba",
        "imagenes": {
            "imagen1": "img/Arbutus/A.xalapensis-f.alba/img1.jpg",
            "imagen2": "img/Arbutus/A.xalapensis-f.alba/img2.jpg",
            "imagen3": "img/Arbutus/A.xalapensis-f.alba/img3.jpg"
        },
        "habito": "arbol",
        "corteza_ramas": "exfoliante en láminas, corteza interior lisa",
        "corteza_ramillas": "exfoliante, lisa",
        "peciolos": "con pocos pelos cortos, blanquecinos, a veces con pequeños pelos glandulares",
        "hojas": "ovadas a elípticas, 6-14 cm largo, 3-6.4 cm ancho, herbáceas",
        "haz": "verde claro, lustroso",
        "enves": "envés con muchos pelos blanquecinos cortos, dejan ver la superficie",
        "flores": "blancas a verdosas",
        "ubicacion": [
            "Durango",
            "Sinaloa"
        ]
    }
]);
db.arbutus.insert([

    {
        "nombre": "xalapensis.f.glandulosa",
        "imagenes": {
            "imagen1": "img/Arbutus/A.xalapensis-f.glandulosa/img1.jpg",
            "imagen2": "img/Arbutus/A.xalapensis-f.glandulosa/img2.jpg",
            "imagen3": "img/Arbutus/A.xalapensis-f.glandulosa/img3.jpg"
        },
        "habito": "arbol",
        "corteza_ramas": "exfoliante en láminas, corteza interior lisa ",
        "corteza_ramillas": "exfoliante, lisa",
        "peciolos": "con pelos glandulares cortos pero evidentes",
        "hojas": "ovadas a oblongas, 7-15 cm largo, 3-9 cm ancho, herbáceas",
        "haz": "glabro o con pubescencia corta, verde claro",
        "enves": "pubescente con pelos rojizos y pelos glandulares cortos",
        "flores": "blancas, cremas o amarillentas",
        "ubicacion": [
            "Chiapas",
            "Chihuahua",
            "Ciudad de México",
            "Durango",
            "Estado de México",
            "Guerrero",
            "Hidalgo",
            "Jalisco",
            "Michoacán",
            "Morelos",
            "Oaxaca",
            "Puebla",
            "Querétaro",
            "San Luis Potosí",
            "Tlaxcala",
            "Veracruz"
        ]
    }
]);

db.arbutus.insert([

    {
        "nombre": "xalapensis.texana",
        "imagenes": {
            "imagen1": "img/Arbutus/A.xalapensis-var.texana/img1.jpg",
            "imagen2": "img/Arbutus/A.xalapensis-var.texana/img2.jpg",
            "imagen3": "img/Arbutus/A.xalapensis-var.texana/img3.jpg"

        },
        "habito": "arbol",
        "corteza_ramas": "exfoliante en láminas, la interior lisa, a veces guinda oscura, cerosa",
        "corteza_ramillas": "exfoliante, lisa; ramillas gruesas",
        "peciolos": "glabros (lisos) o con pelos muy cortos",
        "hojas": "subcoriáceas a coriáceas (algo gruesas), de 3 a 5.4 cm de longitud y de 2.6 a 4.1 cm de ancho, ovadas, algo colgantes",
        "haz": "glabro (liso) o con pocos pelos cortos, verde obscuro",
        "enves": "glabro (liso) o cubierto con pelos cortos",
        "flores": "blancas a rosas",
        "ubicacion": [
            "Chihuahua",
            "Coahuila",
            "Guanajuato",
            "Hidalgo",
            "Nuevo León",
            "Querétaro",
            "San Luis Potosí",
            "Sonora",
            "Tamaulipas"
        ]
    }
]);


///// COLLECCION COMAROSTAPHYSLIS

db.comarostaphylis.insert([
    {
        "nombre": "arbutoides",
        "imagenes": {
            "imagen1": "img/Comarostaphylis/C.arbutoides/img1.jpg",
            "imagen2": "img/Comarostaphylis/C.arbutoides/img2.jpg",
            "imagen3": "img/Comarostaphylis/C.arbutoides/img3.jpg"
        },
        "habito": "arbusto o arbol",
        "peciolos_ramillas": "pubescentes y usualmente con pelos glandulares",
        "hojas": "4.5 a 13 cm de largo, 1.8 a 4.6 cm de ancho",
        "margen": "entero a poco ondulado o con dientes espaciados hacia el ápice",
        "haz": "casi glabro o algo pubescente",
        "enves": "con pubescencia espaciada a densa",
        "inflorescencia": "pubescente, con frecuencia con pelos glandulares",
        "flores": "blancas a verdosas o amarillentas",
        "ubicacion": [
            "Chiapas",
            "Estado de México",
            "Guerrero",
            "Hidalgo",
            "Jalisco",
            "Michoacán",
            "Oaxaca",
            "Puebla",
            "Querétaro",
            "San Luis Potosí",
            "Tamaulipas",
            "Veracruz"
        ]
    },

    {
        "nombre": "arguta",
        "imagenes": {
            "imagen1": "img/Comarostaphylis/C.arguta/img1.jpg",
            "imagen2": "img/Comarostaphylis/C.arguta/img2.jpg",
            "imagen3": "img/Comarostaphylis/C.arguta/img3.jpg"
        },
        "habito": "arbusto",
        "peciolos_ramillas": "pubescentes o glabras",
        "hojas": "2 a 8 cm de largo, 0.8 a 3.7 cm de ancho",
        "margen": "plano, aserrado",
        "haz": "algo pubescente o glabro",
        "enves": "pubescente o glabro",
        "inflorescencia": "pubescente o glabra (rara vez glandular)",
        "flores": "blancas, blancas a verdosas, blanco rojizas o rosas",
        "ubicacion": [
            "Chiapas",
            "Oaxaca",
            "Puebla",
            "Veracruz"
        ]
    },

    {
        "nombre": "coahuilensis",
        "imagenes": {
            "imagen1": "img/Comarostaphylis/C.coahuilensis/img1.jpg",
            "imagen2": "img/Comarostaphylis/C.coahuilensis/img2.jpg",
            "imagen3": "img/Comarostaphylis/C.coahuilensis/img3.jpg"
        },
        "habito": "arbusto",
        "peciolos_ramillas": "pubescentes",
        "hojas": "3 a 5.5 cm de largo, 0.8 a 1.9 cm de ancho, planas o dobladas a la mitad",
        "margen": "entero casi plano",
        "haz": "espaciadamente pubescente o glabro",
        "enves": "pubescente",
        "inflorescencia": "pubescente y con pelos grandulares",
        "flores": "de color rosa",
        "ubicacion": [
            "Chihuahua",
            "Coahuila"
        ]
    },

    {
        "nombre": "diggsii",
        "imagenes": {
            "imagen1": "img/Comarostaphylis/C.diggsii/img1.jpg",
            "imagen2": "img/Comarostaphylis/C.diggsii/img2.jpg",
            "imagen3": "img/Comarostaphylis/C.diggsii/img3.jpg"
        },
        "habito": "arbusto",
        "peciolos_ramillas": "con pelos glandulares",
        "hojas": "3 a 7.2 cm de largo, 0.7 a 1.5 cm de ancho",
        "margen": "entero o con dientes espaciados hacia el ápice",
        "haz": "pubescente",
        "enves": "con pubescencia densa",
        "inflorescencia": "con pelos grandulares",
        "flores": "rosa intenso a magenta",
        "ubicacion": [
            "Durango",
            "Jalisco",
            "Zacatecas"
        ]
    },

    {
        "nombre": "discolor.subsp.discolor",
        "imagenes": {
            "imagen1": "img/Comarostaphylis/C.discolor-subsp.discolor/img1.jpg",
            "imagen2": "img/Comarostaphylis/C.discolor-subsp.discolor/img2.jpg",
            "imagen3": "img/Comarostaphylis/C.discolor-subsp.discolor/img3.jpg"
        },
        "habito": "arbusto o arbol",
        "peciolos_ramillas": "glabros (lisos), con frecuencia glacucos y con tinción rojiza",
        "hojas": "7 a 16 cm de largo, 1.5 a 2.6(-3.6) cm de ancho",
        "margen": "plano o poco revoluto, con dientes o aserrado",
        "haz": "glabro (liso)",
        "enves": "glabro (liso), con frecuencia glauco",
        "inflorescencia": "con solo pelos glandulares o glabra",
        "flores": "blancas a blancas con tinción rosa",
        "ubicacion": [
            "Ciudad de México",
            "Estado de México",
            "Guerrero",
            "Hidalgo",
            "Jalisco",
            "Michoacán",
            "Morelos",
            "Oaxaca",
            "Tlaxcala",
            "Veracruz"
        ]
    },

    {
        "nombre": "discolor.subsp.manantlanensis",
        "imagenes": {
            "imagen1": "img/Comarostaphylis/C.discolor-subsp.manantlanensis/img1.jpg",
            "imagen2": "img/Comarostaphylis/C.discolor-subsp.manantlanensis/img2.jpg",
            "imagen3": "img/Comarostaphylis/C.discolor-subsp.manantlanensis/img3.jpg"
        },
        "habito": "arbusto o arbol",
        "peciolos_ramillas": "pubescentes a densamente tomentosas, a veces con pelos glandulares",
        "hojas": "8 a 20 cm de largo, 2.5 a 4.5 cm de ancho",
        "margen": "plano o muy poco revoluto, con dientes o aserrado",
        "haz": "glabro o pubescente",
        "enves": "pubescente a densamente tomentoso",
        "inflorescencia": "pubescente y glandular",
        "flores": "blancas a verde pálido o amarillentas, a veces con tinción rosa",
        "ubicacion": [
            "Jalisco"
        ]
    },

    {
        "nombre": "discolor.subsp.rupestris",
        "imagenes": {
            "imagen1": "img/Comarostaphylis/C.discolor-subsp.rupestris/img1.jpg",
            "imagen2": "img/Comarostaphylis/C.discolor-subsp.rupestris/img2.jpg",
            "imagen3": "img/Comarostaphylis/C.discolor-subsp.rupestris/img3.jpg"
        },
        "habito": "arbusto o arbol",
        "peciolos_ramillas": "pubescentes",
        "hojas": "7 a 17 cm de largo, 1.5 a 4 cm de ancho",
        "margen": "plano, aserrado",
        "haz": "glabro o poco pubescente",
        "enves": "pubescente a densamente tomentoso",
        "inflorescencia": "pubescente pero no glandular",
        "flores": "blancas a verde pálido o amarillentas, a veces con tinción rosa",
        "ubicacion": [
            "Colima",
            "Jalisco",
            "Michoacán"
        ]
    },

    {
        "nombre": "diversifolia",
        "imagenes": {
            "imagen1": "img/Comarostaphylis/C.diversifolia/img1.jpg",
            "imagen2": "img/Comarostaphylis/C.diversifolia/img2.jpg",
            "imagen3": "img/Comarostaphylis/C.diversifolia/img3.jpg"
        },
        "habito": "arbusto o arbol",
        "peciolos_ramillas": "pubescentes",
        "hojas": "3 a 13 cm de largo, 1 a 4.2 cm de ancho",
        "margen": "plano o revoluto, aserrado",
        "haz": "glabro o poco pubescente",
        "enves": "casi glabro a densamente tomentoso",
        "inflorescencia": "pubescente, a veces con pelos glandulares",
        "flores": "blancas a amarillentas",
        "ubicacion": [
            "Baja California"
        ]
    },

    {
        "nombre": "glandulifera",
        "imagenes": {
            "imagen1": "img/Comarostaphylis/C.glandulifera/img1.jpg",
            "imagen2": "img/Comarostaphylis/C.glandulifera/img2.jpg",
            "imagen3": "img/Comarostaphylis/C.glandulifera/img3.jpg"
        },
        "habito": "arbusto",
        "peciolos_ramillas": "con pelos glandulares",
        "hojas": "1.8 a 7.5 cm de largo, 0.8 a 3.7 cm de ancho",
        "margen": "plano, aserrado",
        "haz": "glabro o pubescente",
        "enves": "densamente tomentoso",
        "inflorescencia": "con pelos glandulares",
        "flores": "blanco verdosas a rosas o con tintes rojizos",
        "ubicacion": [
            "Oaxaca",
            "Puebla"
        ]
    },

    {
        "nombre": "glaucescens",
        "imagenes": {
            "imagen1": "img/Comarostaphylis/C.glaucescens/img1.jpg",
            "imagen2": "img/Comarostaphylis/C.glaucescens/img2.jpg",
            "imagen3": "img/Comarostaphylis/C.glaucescens/img3.jpg"
        },
        "habito": "arbusto o arbol",
        "peciolos_ramillas": "cortamente pubescente",
        "hojas": "deciduas, 3 a 12 cm de largo, 0.6 a 3.2 cm de ancho",
        "margen": "revoluto en hojas jóvenes, plano en hojas maduras, entero a poco ondulado o poco pubescente",
        "haz": "glabro o poco pubescente",
        "enves": "glabro o pubescente",
        "inflorescencia": "casi glabra a pubescente",
        "flores": "rosa intenso a magenta o rojo",
        "ubicacion": [
            "Aguascalientes",
            "Chihuahua",
            "Durango",
            "Estado de México",
            "Guanajuato",
            "Guerrero",
            "Jalisco",
            "Michoacán",
            "Morelos",
            "Nayarit",
            "Oaxaca",
            "Puebla",
            "Querétaro",
            "San Luis Potosí",
            "Sinaloa",
            "Zacatecas"
        ]
    },

    {
        "nombre": "hartwegiana",
        "imagenes": {
            "imagen1": "img/Comarostaphylis/C.hartwegiana/img1.jpg",
            "imagen2": "img/Comarostaphylis/C.hartwegiana/img2.jpg",
            "imagen3": "img/Comarostaphylis/C.hartwegiana/img3.jpg"
        },
        "habito": "arbusto bajo, forma colonias",
        "peciolos_ramillas": "con pelos glandulares",
        "hojas": "3.7 a 7 cm de largo, 0.4 a 1 cm de ancho",
        "margen": "entero, muy revoluto",
        "haz": "casi glabro o pubescente y glandular",
        "enves": "pubescente y glandular",
        "inflorescencia": "con pelos glandulares",
        "flores": "rosas",
        "ubicacion": [
            "Durango",
            "Jalisco"
        ]
    },

    {
        "nombre": "laevis",
        "imagenes": {
            "imagen1": "img/Comarostaphylis/C.laevis/img1.jpg",
            "imagen2": "img/Comarostaphylis/C.laevis/img2.jpg",
            "imagen3": "img/Comarostaphylis/C.laevis/img3.jpg"
        },
        "habito": "arbusto",
        "peciolos_ramillas": "glabras, glaucas, con tinte rosa o púrpura",
        "hojas": "6 a 8 cm de largo, 0.4 a 1 cm de ancho",
        "margen": "entero, revoluto",
        "haz": "glabro",
        "enves": "glabro, glauco",
        "inflorescencia": "glabra, con tinte rosa o púrpura",
        "flores": "rosa intenso a magenta",
        "ubicacion": [
            "Durango",
            "Jalisco",
            "Zacatecas"
        ]
    },

    {
        "nombre": "lanata",
        "imagenes": {
            "imagen1": "img/Comarostaphylis/C.lanata/img1.jpg",
            "imagen2": "img/Comarostaphylis/C.lanata/img2.jpg",
            "imagen3": "img/Comarostaphylis/C.lanata/img3.jpg"
        },
        "habito": "arbusto",
        "peciolos_ramillas": "con pelos glandulares",
        "hojas": "3.5 a 6.6 cm de largo, 0.8 a 2.2 cm de ancho, densamente agrupadas y ascendentes",
        "margen": "entero a poco ondulado, muy revoluto",
        "haz": "pubescente con algunos pelos glandulares",
        "enves": "pubescente a densamente tomentoso (casi glabro en Tamaulipas)",
        "inflorescencia": "con pelos glandulares",
        "flores": "rojas en Tamaulipas; color no registrado para las de San Luis Potosí",
        "ubicacion": [
            "San Luis Potosí",
            "Tamaulipas"
        ]
    },

    {
        "nombre": "longifolia",
        "imagenes": {
            "imagen1": "img/Comarostaphylis/C.longifolia/img1.jpg",
            "imagen2": "img/Comarostaphylis/C.longifolia/img2.jpg",
            "imagen3": "img/Comarostaphylis/C.longifolia/img3.jpg"
        },
        "habito": "arbusto o arbol",
        "peciolos_ramillas": "con pelos glandulares",
        "hojas": "5 a 20 cm de largo, 1.1 a 7.5 cm de ancho",
        "margen": "plano o muy poco revoluto, con dientes o aserrado",
        "haz": "pubescente, frecuentemente con pelos glandulares",
        "enves": "pubescente a densamente tomentoso y glandular",
        "inflorescencia": "con pelos glandulares",
        "flores": "blancas, verdosas, amarillentas o de color crema",
        "ubicacion": [
            "Estado de México",
            "Guerrero",
            "Jalisco",
            "Michoacán",
        ]
    },

    {
        "nombre": "macvaughii",
        "imagenes": {
            "imagen1": "img/Comarostaphylis/C.macvaughii/img1.jpg",
            "imagen2": "img/Comarostaphylis/C.macvaughii/img2.jpg",
            "imagen3": "img/Comarostaphylis/C.macvaughii/img3.jpg"
        },
        "habito": "arbusto bajo, de menos de 30 cm",
        "peciolos_ramillas": "glabros",
        "hojas": "1 a 4 cm de largo, 0.1 a 0.5 cm de ancho, rara vez más grandes; ápice agudo y con mucrón largo",
        "margen": "plano o muy poco revoluto, entero",
        "haz": "glabro",
        "enves": "glabro",
        "inflorescencia": "glabra o con pubescencia glandular muy corta",
        "flores": "rosas",
        "ubicacion": [
            "Jalisco"
        ]
    },

    {
        "nombre": "mucronata",
        "imagenes": {
            "imagen1": "img/Comarostaphylis/C.mucronata/img1.jpg",
            "imagen2": "img/Comarostaphylis/C.mucronata/img2.jpg",
            "imagen3": "img/Comarostaphylis/C.mucronata/img3.jpg"
        },
        "habito": "arbusto o arbol",
        "peciolos_ramillas": "con pubescencia blanquecina",
        "hojas": "2.4 a 12 cm de largo, 0.7 a 3.3 cm de ancho; ápice redondeado",
        "margen": "plano o muy poco revoluto, entero, ondulado o algo serrulado",
        "haz": "glabro o poco pubescente",
        "enves": "con pubescencia blanquecina a gris pálida que a veces cae",
        "inflorescencia": "con pubescencia blanquecina a gris pálida",
        "flores": "de color blanco a rosa intenso",
        "ubicacion": [
            "Guanajuato",
            "Hidalgo",
            "Querétaro",
            "San Luis Potosí"
        ]
    },

    {
        "nombre": "polifolia.subsp.polifolia",
        "imagenes": {
            "imagen1": "img/Comarostaphylis/C.polifolia-subsp.polifolia/img1.jpg",
            "imagen2": "img/Comarostaphylis/C.polifolia-subsp.polifolia/img2.jpg",
            "imagen3": "img/Comarostaphylis/C.polifolia-subsp.polifolia/img3.jpg"
        },
        "habito": "arbusto o arbol",
        "peciolos_ramillas": "glabras, pubescentes o con pelos glandulares",
        "hojas": "2 a 7.6 cm de largo, 0.4 a 1.4 cm de ancho",
        "margen": "entero o casi entero, plano o usualmente revoluto",
        "haz": "glabro o espaciadamente pubescente",
        "enves": "glabro a espaciadamente pubescente o densamente tomentoso",
        "inflorescencia": "pubescente o con pelos glandulares",
        "flores": "blancas o usualmente rosas",
        "ubicacion": [
            "Aguascalientes",
            "Chihuahua",
            "Ciudad de México",
            "Durango",
            "Estado de México",
            "Guanajuato",
            "Jalisco",
            "Michoacán",
            "Nayarit",
            "Oaxaca",
            "Puebla",
            "Querétaro",
            "San Luis Potosí",
            "Sonora",
            "Tlaxcala",
            "Veracruz",
            "Zacatecas"
        ]
    },

    {
        "nombre": "polifolia.subsp.minor",
        "imagenes": {
            "imagen1": "img/Comarostaphylis/C.polifolia-subsp.minor/img1.jpg",
            "imagen2": "img/Comarostaphylis/C.polifolia-subsp.minor/img2.jpg",
            "imagen3": "img/Comarostaphylis/C.polifolia-subsp.minor/img3.jpg"
        },
        "habito": "arbusto",
        "peciolos_ramillas": "glabras o casi glabras",
        "hojas": "2 a 6.6 cm de largo, 0.4 a 1.9 cm de ancho; ápice redondeado",
        "margen": "plano o muy poco revoluto, entero",
        "haz": "glabro",
        "enves": "glabro o casi glabro",
        "inflorescencia": "con pubescencia fina",
        "flores": "rosas",
        "ubicacion": [
            "Guanajuato",
            "Nuevo León",
            "San Luis Potosí",
            "Tamaulipas"
        ]
    },

    {
        "nombre": "sharpii",
        "imagenes": {
            "imagen1": "img/Comarostaphylis/C.sharpii/img1.jpg",
            "imagen2": "img/Comarostaphylis/C.sharpii/img2.jpg",
            "imagen3": "img/Comarostaphylis/C.sharpii/img3.jpg"
        },
        "habito": "arbusto",
        "peciolos_ramillas": "con pelos glandulares",
        "hojas": "4.3 a 11.5 cm de largo, 1.4 a 4.2 cm de ancho",
        "margen": "entero o con dientes espaciados hacia el ápice, plano o muy poco revoluto",
        "haz": "pubescente",
        "enves": "densamente tomentoso",
        "inflorescencia": "con pelos glandulares rojos",
        "flores": "rosa intenso a rojas",
        "ubicacion": [
            "Tamaulipas"
        ]
    }
]);

db.arbutus.find({"habito":"arbol","ubicacion":""}) 

