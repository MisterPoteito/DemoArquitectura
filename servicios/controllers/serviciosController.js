const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
var serviciosModelo = require("./../model/serviciosModel");

const listarServicios = async (req, res) => {
  const resultado = await serviciosModelo.listarServicios();

  return res.status(200).send(resultado);
};

module.exports = {
  listarServicios,
};
