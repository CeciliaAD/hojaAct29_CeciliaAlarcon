const express = require("express");
const controlador = express.Router();
const fetch = require("node-fetch");

const handlers_ln = require("../lib/handlers/handlers_ln.js");

controlador.get("/", handlers_ln.muestraFormulario);

module.exports = controlador;
