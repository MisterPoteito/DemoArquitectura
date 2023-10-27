import React, { useState, useEffect } from "react";
import { Grid, Typography } from "@mui/material";
import Page from "./Page";
import DataGridPresupuesto from "./TablaPresupuestos";

const Presupuesto = () => {
  return (
    <Page activeMenu={1}>
      <Grid item md={12}>
        <Typography variant="h3">Presupuestos Realizados</Typography>
      </Grid>
      <Grid item md={10} sx={{ paddingTop: 8 }}>
        <DataGridPresupuesto />
      </Grid>
    </Page>
  );
};

export default Presupuesto;
