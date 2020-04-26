async function consulta() {
	let webUrls = [];
	let valor = document.getElementById("word").value;
	console.log(valor);
	let respuesta = await fetch(
		`https://content.guardianapis.com/search?q=${valor}&api-key=854faf6c-0709-4bb8-8254-00234a537d9d`
	);
	let datosJson = await respuesta.json();
	console.log(datosJson);
	console.log(datosJson["response"]["results"][0].webUrl);

	let listaOpciones = document.createElement("ul");
	listaOpciones.setAttribute("id", "listaOpciones");
	this.parentNode.appendChild(listaOpciones);
	let elementosLista = "";
	for (let i = 0; i < datosJson["response"]["results"].length; i++) {
		let webUrls = datosJson["response"]["results"][i].webUrl;
		elementosLista += `<li class="articulos"><br/><a href="${webUrls}"><span>${webUrls}<span></a></li>`;
	}
	listaOpciones.innerHTML = elementosLista;
	console.log(elementosLista);
}

document.getElementById("botonSubmit").addEventListener("click", consulta);
