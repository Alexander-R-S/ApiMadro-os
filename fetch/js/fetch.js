$(document).ready(function () {

	function fetch1() {
		fetch('http://localhost:3000/arbutus', {
			method: 'GET',
			//body: JSON.stringify(data)
		}).then(res => res.json())
			.then(function (data) {
				var cont = "";
				//console.log(data);
				data.arbutus.forEach(function (dato,index) {
					cont += '<tr><th scope="col">'+(index+1)+'</th><th scope="col">'+dato.nombre+'</th></tr>';
				});
				document.getElementById("arbutus").innerHTML = cont;
			}).catch(function (error) {
				console.log(error);
			});
	}

	function fetch2() {
		fetch('http://localhost:3000/comarosta', {
			method: 'GET',
			//body: JSON.stringify(data)
		}).then(res => res.json())
			.then(function (data) {
				var cont = "";
				//console.log(data);
				data.comarosta.forEach(function (dato,index) {
					cont += '<tr><th scope="col">'+(index+1)+'</th><th scope="col">'+dato.nombre+'</th></tr>';
				});
				document.getElementById("comaros").innerHTML = cont;
			}).catch(function (error) {
				console.log(error);
			});
	}

	function fetchpost(dato) {
		fetch('http://localhost:3000/arbutus', {
			method: "POST",
			body: JSON.stringify(dato),
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			}
		}).then(res => res.json())
			.then(function (data) {
				var cont = "";
				//console.log(data);
				data.arbutus.forEach(function (dato,index) {
					cont += '<tr><th scope="col">'+(index+1)+'</th><th scope="col">'+dato.nombre+'</th></tr>';
				});
				document.getElementById("arbutus").innerHTML = cont;
			}).catch(function (error) {
				console.log(error);
			});

		fetch('http://localhost:3000/comarosta', {
			method: "POST",
			body: JSON.stringify(dato),
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			}
		}).then(res => res.json())
			.then(function (data) {
				var cont = "";
				//console.log(data);
				data.comarosta.forEach(function (dato,index) {
					cont += '<tr><th scope="col">'+(index+1)+'</th><th scope="col">'+dato.nombre+'</th></tr>';
				});
				document.getElementById("comaros").innerHTML = cont;
			}).catch(function (error) {
				console.log(error);
			});
	}
	//alert('hola');
	fetch1();
	fetch2();


//VARIABLES
	var obj = {};
	var cont="";
	var nex="";
	var prev="";

//CHECKBOXES
	$('.habito2').on('click', function () {
		var habito = $(this).prop('id');
		$('.habito2').not(this).prop('checked',false);
		if($(this).prop('checked')==false){
			obj.habito = "";
		}else{
			obj.habito = habito;
			fetchpost(obj);
		}
	});

	$('.flor').on('click', function () {
		var flores = $(this).prop('id');
		$('.flor').not(this).prop('checked',false);
		if($(this).prop('checked')==false){
			obj.flores = "";
		}else{
			obj.flores = flores;
			fetchpost(obj);
		}
	});

//Botones de navegacion
	function mostrar() {
		$('.filtro').each(function (index, element) {
			if ($(this).prop('hidden')==false) {
				prev = $(this).prev().attr('id');
				cont = $(this).attr('id');
				nex = $(this).next().attr('id');
			}
		});
		if(prev==null){prev=0;}
		if(nex==null){nex=0;}

		return cont,nex,prev;
	}

	$('#next').on('click', function () {
		$('#prev').prop('hidden', false);
		$('#reinicio').prop('hidden', false);
		mostrar();
		if(nex!=0){
		$('#'+cont).prop('hidden',true);
		$('#'+nex).prop('hidden',false);
		}
	});

	$('#prev').on('click', function () {
		mostrar();
		if(prev!=0){
			$('#'+cont).prop('hidden',true);
			$('#'+prev).prop('hidden',false);
			}
		if(prev="habito"){
			$('#reinicio').prop('hidden', true);
			$('#prev').prop('hidden', true);
		}
	});
	
	$('#reinicio').on('click', function () {
		$('input[type=checkbox]').prop('checked',false);
		delete obj;
		fetch1();
		fetch2();
	});
});