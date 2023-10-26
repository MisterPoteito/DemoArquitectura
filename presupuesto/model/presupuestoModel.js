var bd = require("../database");

const ingresaPresupuesto = async (fecha, descripcion, monto) => {
  const queryString =
    `INSERT INTO demo_accidentes.presupuestos ` +
    `( ` +
    `fecha, ` +
    `descripcion, ` +
    `monto ` +
    `) ` +
    `VALUES ` +
    `( ` +
    `$1, $2, $3 ` +
    `) RETURNING id `;

  var pgClient = await bd.connection();
  const resultado = await pgClient.query(queryString, [
    fecha,
    descripcion,
    monto,
  ]);

  return JSON.parse(JSON.stringify(resultado.rows));
};

const listarPresupuestos = async (username) => {
  const queryString = `SELECT * FROM demo_accidentes.presupuestos; `;

  var pgClient = await bd.connection();
  const { rows, fields } = await pgClient.query(queryString);

  return rows;
};

module.exports = {
  ingresaPresupuesto,
  listarPresupuestos,
};
