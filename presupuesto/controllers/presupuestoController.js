const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
var presupuestoModelo = require("../model/presupuestoModel");
const RONDA_HASH = 10;

const ingresaPresupuesto = async (req, res) => {
  const { descripcion, monto } = req.body;

  const presupuestoId = await presupuestoModelo.ingresaPresupuesto(
    new Date(),
    descripcion,
    monto
  );

  res.status(200).send(presupuestoId);
};

const listarPresupuesto = async (req, res) => {
  const presupuestos = await presupuestoModelo.listarPresupuestos();

  if (Object.keys(presupuestos).length) {
    return res.status(200).send(presupuestos);
  }

  return res.status(200).send({ presupuestos });
};

module.exports = {
  listarPresupuesto,
  ingresaPresupuesto,
};
