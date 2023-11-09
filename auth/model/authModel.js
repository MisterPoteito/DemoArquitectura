var bd = require("./../database");

const registraUsuario = async (username, password, nombres) => {
  const queryString =
    `INSERT INTO demo_accidentes.usuarios ` +
    `( ` +
    `username, ` +
    `password, ` +
    `nombres ` +
    `) ` +
    `VALUES ` +
    `( ` +
    `$1, $2, $3 ` +
    `) RETURNING id `;

  var pgClient = await bd.connection();
  const resultado = await pgClient.query(queryString, [
    username,
    password,
    nombres,
  ]);
  console.log("LLAMADA MICROSERVICIO AUTH: ", "Se han registrado un usuario.");
  return JSON.parse(JSON.stringify(resultado.rows));
};

const consultaUsuarioPorUsername = async (username) => {
  const queryString = `SELECT username, password, nombres FROM demo_accidentes.usuarios WHERE username = $1; `;

  var pgClient = await bd.connection();
  const { rows, fields } = await pgClient.query(queryString, [username]);
  console.log(
    "LLAMADA MICROSERVICIO AUTH: ",
    "Un usuario ha solicitado iniciar sesion."
  );
  return rows[0];
};

module.exports = {
  registraUsuario,
  consultaUsuarioPorUsername,
};
