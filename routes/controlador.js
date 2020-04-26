const express = require("express");
const controlador = express.Router();
const fetch = require("node-fetch");

const handlers_ln = require("../lib/handlers/handlers_ln.js");

controlador.get("/", handlers_ln.muestraFormulario);

/*controlador.get("/:", async (req, res) => {
	console.log(req.params);
	let species = req.params.species;
	console.log(species);
	let respuesta = await fetch(
		`http://bloowatch.org/developers/json/species/${species}`
	);
	let datosJson = await respuesta.json();
	console.log(datosJson);
});
*/
//controlador.get("/:condiciones", handlers_ln.condiciones);

/*controlador.post("/:condiciones", async (req, res) => {
	console.log(req.params);
	const condiciones = req.params.condiciones;
	console.log(condiciones);
	let datos = await fetch(
		`https://cima.aemps.es/cima/rest/medicamento?${condiciones}`
		POSTbuscarEnFichaTecnica
	);
	let datosJson = await datos.json();
	console.log(datosJson);
});
*/
/*
  const lat = latlon[0];
  const lon = latlon[1];
  console.log(lat, lon);
  const api_key = process.env.API_KEY;
  const weather_url = `https://api.darksky.net/forecast/${api_key}/${lat},${lon}/?units=si`;
  const weather_response = await fetch(weather_url);
  const weather_data = await weather_response.json();

  const aq_url = `https://api.openaq.org/v1/latest?coordinates=${lat},${lon}`;
  const aq_response = await fetch(aq_url);
  const aq_data = await aq_response.json();

  const data = {
    weather: weather_data,
    air_quality: aq_data
  };
  response.json(data);*/

module.exports = controlador;
