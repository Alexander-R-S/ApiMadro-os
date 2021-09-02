$(document).ready(function () {
	var vacio = 0;

	//Boton limpiar
	$('#limpia').on('click', function () {
		$('#formarbu').trigger('reset');
	});

	//validar campos
	function validar() {
		$('input[type=text]').each(function (i, v) {
			if (this.value.length < 1) {
				vacio = 1;
				return false;
			}
			vacio = 0;
		});
	}

	///Limitar input file a 3 archivos
	$("#img").on("change", function () {
		if ($("#img")[0].files.length > 3) {
			alert("Solo se pueden seleccionar 3 imagenes como maximo");
			$("#inserta").prop('disabled', true);
		}
		else {
			$("#inserta").prop('disabled', false);
		}
	});


	///FETCH GET
	function fetch1() {
		fetch('http://localhost:3000/arbutus', {
			method: 'GET',
		}).then(res => res.json())
			.then(function (data) {
				var cont = ""
				data.arbutus.forEach(function (dato, index) {
					cont += '<tr><td scope="row">' + (index + 1) + '</td><td>' + dato.nombre + '</td><td><span class="d-inline-flex"><button type="button" class="btn btn-success">Editar</button><button type="button" class="btn btn-danger delete" id="' + dato._id + '" value="' + dato.nombre + '">Eliminar</button></span></td></tr>';
				});

				//var ruta = data.arbutus[0];
				console.log(data.arbutus);
				// ruta.ubicacion.forEach(function (dato, index) {
				// 	cont += dato;
				// 	console.log(ruta.ubicacion[index]);
				// });
				document.getElementById("espa").innerHTML = cont;
			}).catch(function (error) {
				console.log(error);
			});
	}

	///AJAX PRUEBA IMG
	// function ajaximg() {
	// 	$.ajax({
	// 		type: "GET",
	// 		url: "http://localhost:3000/arbutus/nombre/a",
	// 		cache: false,
	// 		contentType: false,
	// 		processData: false,
	// 		success: function (r) {
	// 			var foto1 = document.getElementById("foto1");
	// 			var foto2 = document.getElementById("foto2");
	// 			var foto3 = document.getElementById("foto3");
	// 			let src1 = r.arbutus[0].imagenes.imagen1;
	// 			let src2 = r.arbutus[0].imagenes.imagen2;
	// 			let src3 = r.arbutus[0].imagenes.imagen3;
	// 			if(src1){
	// 				foto1.src = src1;
	// 			}
	// 			if(src2){
	// 				foto2.src = src2;
	// 			}
	// 			if(src3){
	// 				foto3.src = src3;
	// 			}
	// 		},
	// 		error: function (error) {
	// 			console.log("Something went wrong", error);
	// 		}
	// 	});
	// }

	//ajaximg();

	///AJAX INSERT
	function fetchinsert(datos) {

		fetch('http://localhost:3000/arbutus/add', {
			method: 'POST',
			body: datos,
			headers: {
				'Content-Type': 'application/json',
				"Accept": "application/json"
			}
		}).then(res => res.json())
			.then(function (data) {
				alert(data.message);
				fetch1();
				$('#insert').modal('hide');
			}).catch(function (error) {
				console.log(error);
			});
	}

	///FETCH ELIMINAR
	function fetchdelete(c, v) {
		fetch('http://localhost:3000/arbutus/' + c + '/' + v, {
			method: 'DELETE'
		}).then(res => res.json())
			.then(function (data) {
				alert(data.message + ': ' + data.arBaja.nombre);
				fetch1();
			}).catch(function (error) {
				console.log(error);
			});
	}

	fetch1();


	//FUNCION CONVERTIR IMGS A BASE64

	function base64(file) {
		return new Promise(function (resolve, reject) {
			let fr = new FileReader();

			fr.onload = function () {
				resolve(fr.result);
			};
			fr.onerror = function () {
				reject(fr);
			};
			fr.readAsDataURL(file);
		});
	}


	//Boton Insertar
	$('#inserta').click(function () {

		var imgs = document.getElementById('img').files;
		let readers = [];

		for (let i = 0; i < imgs.length; i++) {
			readers.push(base64(imgs[i]));
		}

		Promise.all(readers).then((values) => {
			let img1="",img2="",img3="";
			let dato = new FormData(document.getElementById('formarbu'));
			dato.delete('files');
			var estados = $('#ubicacion').val();
			dato.append('ubicacion', estados);
			img1=values[0];
			img2=values[1];
			img3=values[2];

			if(img2===undefined){img2="";}
			if(img3===undefined){img3="";}

			dato.append('img1', img1);
			dato.append('img2', img2);
			dato.append('img3', img3);

			const entradas = Object.fromEntries(dato.entries());
			const datos = JSON.stringify(entradas);

			fetchinsert(datos);
		});
	});


	//Boton Eliminar
	$('body').on('click', '.delete', function () {
		var id = $(this).prop('id');
		var nombre = $(this).prop('value');
		var campo = "_id";
		var opcion = confirm("Esta seguro de eliminar: " + nombre);
		if (opcion) {
			fetchdelete(campo, id);
		}
	});


		// function base64(file, callback) {
	// 	var reader = new FileReader();
	// 	reader.onload = function () { callback(JSON.stringify(reader.result)) };
	// 	reader.readAsText(file);
	// }
	// base64(imgs[0], function (img1) { 
	// 	console.log(img1);
	// });


	// for (var entrie of dato.entries()) {
		// 	console.log(entrie[0] + ': ' + entrie[1]);
		// }


	// validar();
	// if (vacio == 1) {
	// 	alert('Todos los campos son requeridos');
	// } else {	
	///fetchinsert(dato);
	// }

	//Generar base64
	// if (imgs.length > 0) {
	// 	var imageFile = imgs[0];
	// 	var fileReader = new FileReader();
	// 	fileReader.onload = function(fileLoadedEvent) {
	// 	  var srcData = fileLoadedEvent.target.result;
	// 	  var newImage = document.createElement('img');
	// 	  newImage.src = srcData;
	// 	  document.getElementById("dummy").innerHTML = newImage.outerHTML;
	// 	  document.getElementById("txt").value = document.getElementById("dummy").innerHTML;
	// 	}
	// 	fileReader.readAsDataURL(imageFile);
	//   }

	// Imprimir objeto data
	//for (var entrie of data.entries()) {
	// 		console.log(entrie[0]+ ': ' + entrie[1]); 
	// }

});