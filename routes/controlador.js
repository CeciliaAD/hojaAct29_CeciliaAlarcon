const express = require("express");
const controlador = express.Router();

const handlers_ln = require("../lib/handlers/handlers_ln.js");

controlador.get("/", handlers_ln.muestraFormulario);

//controlador.get("/:condiciones", handlers_ln.condiciones);

module.exports = controlador;
