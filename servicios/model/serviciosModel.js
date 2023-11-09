var bd = require("../database");

const listarServicios = async () => {
  const queryString = `SELECT id, nombre, detalle, TO_CHAR(fecha_solicitud, 'dd/mm/yyyy') fecha_solicitud, TO_CHAR(fecha_programada, 'dd/mm/yyyy') fecha_programada FROM demo_accidentes.servicios; `;

  var pgClient = await bd.connection();
  const { rows, fields } = await pgClient.query(queryString);
  console.log(
    "LLAMADA MICROSERVICIO SERVICIOS: ",
    "Se han listado los servicios."
  );

  return rows;
};

module.exports = {
  listarServicios,
};
