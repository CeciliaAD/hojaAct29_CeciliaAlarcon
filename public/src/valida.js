async function consulta() {
	let listaOpciones = document.getElementById("listaArticulos");
	if (listaOpciones) {
		listaOpciones.remove();
	}

	let valor = document.getElementById("word").value;
	console.log(valor);
	let respuesta = await fetch(
		`https://content.guardianapis.com/search?q=${valor}&api-key=854faf6c-0709-4bb8-8254-00234a537d9d`
	);

	let datosJson = await respuesta.json();
	console.log(datosJson);

	if (datosJson["response"]["results"].length == 0) {
		alert("Plese submit words");
	} else {
		//console.log(datosJson["response"]["results"][0].webTitle);
		let webUrls = [];
		let listaArticulos = document.createElement("ul");
		listaArticulos.setAttribute("id", "listaArticulos");
		this.parentNode.appendChild(listaArticulos);
		let elementosLista = "";
		for (let i = 0; i < datosJson["response"]["results"].length; i++) {
			let webUrls = datosJson["response"]["results"][i].webUrl;
			let webTitles = datosJson["response"]["results"][i].webTitle;
			elementosLista += `<li class="articulos"><a href="${webUrls}"><span>${webTitles}<span></a></li>`;
		}
		listaArticulos.innerHTML = elementosLista;

		//console.log(elementosLista);
		/*if (elementosLista) {
		elementosLista.remove();
		
	}*/
	}
}
document.getElementById("botonSubmit").addEventListener("click", consulta);
