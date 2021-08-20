$(document).ready(function () {
	var vacio = 0;

	function fetch1() {
		fetch('http://localhost:3000/arbutus', {
			method: 'GET',
		}).then(res => res.json())
			.then(function (data) {
				var cont = ""
				data.arbutus.forEach(function (dato, index) {
						cont += '<tr><td scope="row">'+(index+1)+'</td><td>'+dato.nombre+'</td><td><span class="d-inline-flex"><button type="button" class="btn btn-success">Editar</button><button type="button" class="btn btn-danger">Eliminar</button></span></td></tr>';
					});

				//var ruta = data.arbutus[0];
				//console.log(data.arbutus[0]);
				// ruta.ubicacion.forEach(function (dato, index) {
				// 	cont += dato;
				// 	console.log(ruta.ubicacion[index]);
				// });
				document.getElementById("espa").innerHTML = cont;
			}).catch(function (error) {
				console.log(error);
			});
	}


	function fetchinsert(datos) {
		fetch('http://localhost:3000/arbutus/add', {
			method: 'POST',
			body:datos,
			headers: {
				'Content-Type': 'application/json',
				"Accept": "application/json"
			}
		}).then(res => res.json())
			.then(function (data) {
				alert(data);
			}).catch(function (error) {
				console.log(error);
			});
	}

	fetch1();

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

	//Boton Insertar
	$('#inserta').click(function () {
		var estados = $('#ubicacion').val();
		// validar();
		// if (vacio == 1) {
		// 	alert('Todos los campos son requeridos');
		// } else {
		let dato = new FormData(document.getElementById('formarbu'));
		dato.append('ubicacion', estados);
		const entradas = Object.fromEntries(dato.entries());
		const datos = JSON.stringify(entradas);
		
		fetchinsert(datos);

		// }
	});

	// Imprimir objeto data
	//for (var entrie of data.entries()) {
	// 		console.log(entrie[0]+ ': ' + entrie[1]); 
	// }

});