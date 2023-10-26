const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
var authModelo = require("./../model/authModel");
const RONDA_HASH = 10;

const encriptaPassword = async (password) => {
  return await bcrypt.hash(password, RONDA_HASH);
};

const registraUsuario = async (req, res) => {
  const { username, password, nombres } = req.body;

  /*   {
    "username":"usertest",
    "password": "123456",
    "nombres":"Usuario Prueba"
  } */

  const passEncriptada = await encriptaPassword(password);

  const userId = await authModelo.registraUsuario(
    username,
    passEncriptada,
    nombres
  );

  res.status(200).send({ id: userId[0].id });
};

const login = async (req, res) => {
  const { username, password } = req.body;

  const resultado = await authModelo.consultaUsuarioPorUsername(username);
  const { password: passEncriptada, nombres } = resultado;

  const matchPass = await bcrypt.compare(password, passEncriptada);

  if (matchPass) {
    const token = jwt.sign({ username, nombres }, process.env.SECRET_JWT);
    return res.status(200).send({ token });
  }

  return res.status(401).send({ error: "No autorizado" });
};

module.exports = {
  registraUsuario,
  login,
};
