import React, { useState, useEffect } from "react";
import { Grid, Typography } from "@mui/material";
import Page from "./Page";
import DataGridServicios from "./TablaServicios";

const Servicios = () => {
  return (
    <Page activeMenu={0}>
      <Grid item md={12}>
        <Typography variant="h3">Servicios Solicitados</Typography>
      </Grid>
      <Grid item md={10} sx={{ paddingTop: 8 }}>
        <DataGridServicios />
      </Grid>
    </Page>
  );
};

export default Servicios;
