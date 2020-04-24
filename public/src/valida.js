async function consulta() {
	let datos = await fetch(
		"https://cima.aemps.es/cima/rest/medicamento?nregistro=51347"
	);
	let datosJson = await datos.json();
	console.log(datosJson);
}

document.getElementById("botonSubmit").addEventListener("click", consulta);
