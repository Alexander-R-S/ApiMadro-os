$( document ).ready(function() {

	function fetch1() {
		fetch('http://localhost:3000/arbutus', {
  		method: 'GET',
  		//body: JSON.stringify(data)
		}).then(res => res.json())
		.then(function(data) {
			var cont="";
			console.log(data);
			alert(data.arbutus.length);
			data.arbutus.forEach(function(dato){ 
				cont+='<p>'+dato.imagenes.imagen1+'</p>';	
			});
			document.getElementById("cont1").innerHTML=cont;
			
		}).catch(function(error) {
  			console.log(error);
		});
	}


	function fetch2() {
		fetch('http://localhost:3000/comarosta', {
  		method: 'GET',
  		//body: JSON.stringify(data)
		}).then(res => res.json())
		.then(function(data) {
			var cont="";
			console.log(data);
			alert(data.comarosta.length);
			data.comarosta.forEach(function(dato){ 
				cont+='<p>'+dato.nombre+'</p>';	
			});
			document.getElementById("cont2").innerHTML=cont;
			
		}).catch(function(error) {
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
		.then(function(data) {
			var cont="";
			console.log(data);
			alert(data.arbutus.length);
			data.arbutus.forEach(function(dato){ 
				cont+='<p>'+dato.nombre+'</p>';	
			});
			document.getElementById("cont1").innerHTML=cont;
			
		}).catch(function(error) {
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
		.then(function(data) {
			var cont="";
			console.log(data);
			alert(data.comarosta.length);
			data.comarosta.forEach(function(dato){ 
				cont+='<p>'+dato.nombre+'</p>';	
			});
			document.getElementById("cont1").innerHTML=cont;
			
		}).catch(function(error) {
  			console.log(error);
		});
	}
		//alert('hola');
		//fetch1();
		//fetch2();

		$('#buscar').on('click',function(event) {
			var input= $('#input').val();
			var obj={};
			obj.ubicacion=input;
			fetchpost(obj);
			//console.log(obj);
		});

});