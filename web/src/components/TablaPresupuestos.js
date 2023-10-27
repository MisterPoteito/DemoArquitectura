import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import { Button, ButtonGroup, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import DoneIcon from "@mui/icons-material/Done";
import axios from "axios";
import { toast } from "react-toastify";

export default function DataGridPresupuesto() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchPresupuestos();
  }, []);

  const fetchPresupuestos = () => {
    const url = `http://localhost:4000/api/v1/presupuestos`;
    axios
      .get(url)
      .then((response) => setData(response.data))
      .catch((error) => console.error(error));
  };

  const handleDeletePresupuesto = (id) => {
    const url = `http://localhost:4000/api/v1/presupuestos`;
    axios
      .delete(url, { data: { id } })
      .then((response) => {
        toast.success("Se ha rechazado el presupuesto");
        fetchPresupuestos();
      })
      .catch((error) => console.error(error));
  };

  const columns = [
    {
      field: "id",
      headerName: "ID",
      width: 10,
      hide: true,
    },
    {
      field: "fecha",
      headerName: "Fecha",
      width: 120,
      editable: true,
    },
    {
      field: "descripcion",
      headerName: "Descripción",
      width: 700,
      editable: true,
    },
    {
      field: "monto",
      headerName: "Monto",
      width: 110,
      editable: true,
      valueGetter: (params) => {
        return `$ ${params.row.monto}`;
      },
    },
    {
      field: "opcion",
      headerName: "Opciones",
      renderCell: (params) => (
        <>
          <IconButton
            aria-label="delete"
            color="primary"
            onClick={() => console.log("Se marca como aceptado")}
          >
            <DoneIcon />
          </IconButton>
          <IconButton
            aria-label="delete"
            color="error"
            onClick={() => handleDeletePresupuesto(params.row.id)}
          >
            <DeleteIcon />
          </IconButton>
        </>
      ),
    },
  ];

  return (
    <Box sx={{ height: 600, width: "100%" }}>
      <DataGrid
        rows={data}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 9,
            },
          },
        }}
        pageSizeOptions={[5]}
        disableRowSelectionOnClick
      />
    </Box>
  );
}
