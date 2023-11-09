import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import { Button, ButtonGroup, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import DoneIcon from "@mui/icons-material/Done";
import axios from "axios";

const columns = [
  {
    field: "id",
    headerName: "ID",
    width: 10,
    hide: true,
  },
  {
    field: "nombre",
    headerName: "Servicio",
    width: 80,
    editable: true,
  },
  {
    field: "detalle",
    headerName: "Detalle",
    width: 600,
    editable: true,
  },
  {
    field: "fecha_solicitud",
    headerName: "Fecha Solicitud",
    width: 110,
    editable: true,
  },
  {
    field: "fecha_programada",
    headerName: "Fecha Programada",
    description: "cuando se llevará a cabo",
    sortable: false,
    width: 160,
  },
  {
    field: "opcion",
    headerName: "Opciones",
    renderCell: (params) => (
      <>
        <IconButton
          aria-label="delete"
          color="primary"
          onClick={() => console.log(params)}
        >
          <DoneIcon />
        </IconButton>
        <IconButton
          aria-label="delete"
          color="error"
          onClick={() => console.log(params)}
        >
          <DeleteIcon />
        </IconButton>
      </>
    ),
  },
];
/* 
const rows = [
  {
    id: 1,
    nombre: "Capacitación",
    detalle:
      "Capacitar a personal de planta acerca de prevenciones en linea de producción.",
    fecha_solicitud: "2023-10-27",
    fecha_programada: "2023-11-02",
  },
  {
    id: 2,
    nombre: "Capacitación",
    detalle:
      "2da Capacitación a personal de planta acerca de prevenciones en linea de producción.",
    fecha_solicitud: "2023-10-27",
    fecha_programada: "2023-11-03",
  },
  {
    id: 3,
    nombre: "Revision de Equipos",
    detalle: "Revision de equipos y certificación de estado de ellos.",
    fecha_solicitud: "2023-10-14",
    fecha_programada: "2023-11-10",
  },
  {
    id: 4,
    nombre: "Charla Informativa",
    detalle: "charla informativa de servicios y asesorías.",
    fecha_solicitud: "2023-10-20",
    fecha_programada: "2023-11-02",
  },
  {
    id: 5,
    nombre: "Asesoría",
    detalle:
      "Asesoría acerca de emergencias y planes de contingencia y mitigación ante accidentes laborales.",
    fecha_solicitud: "2023-10-20",
    fecha_programada: "2023-11-02",
  },
]; */

export default function DataGridServicios() {
  const [rows, setRows] = useState([]);

  useEffect(() => {
    const url = `http://localhost:4004/api/v1/servicios`;
    axios
      .get(url)
      .then((response) => setRows(response.data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <Box sx={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
        disableRowSelectionOnClick
      />
    </Box>
  );
}
