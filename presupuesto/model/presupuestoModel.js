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
  console.log(
    "LLAMADA MICROSERVICIO PRESUPUESTO: ",
    "Se ha ingresado un presupuesto."
  );
  return JSON.parse(JSON.stringify(resultado.rows));
};

const listarPresupuestos = async (username) => {
  const queryString = `SELECT id, TO_CHAR(fecha, 'dd/mm/yyyy') fecha, descripcion, monto FROM demo_accidentes.presupuestos; `;

  var pgClient = await bd.connection();
  const { rows, fields } = await pgClient.query(queryString);
  console.log(
    "LLAMADA MICROSERVICIO PRESUPUESTO: ",
    "Se han listado los presupuestos."
  );
  return rows;
};

const eliminaPresupuesto = async (id) => {
  const queryString = `DELETE FROM demo_accidentes.presupuestos WHERE id = $1 RETURNING id; `;

  var pgClient = await bd.connection();
  const { rows, fields } = await pgClient.query(queryString, [id]);

  console.log(
    "LLAMADA MICROSERVICIO PRESUPUESTO: ",
    "Se ha eliminado un presupuesto."
  );
  return rows;
};

module.exports = {
  ingresaPresupuesto,
  listarPresupuestos,
  eliminaPresupuesto,
};
