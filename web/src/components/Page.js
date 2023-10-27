import React from "react";
import BarNavigation from "./Barnavigation";
import { Container, Grid } from "@mui/material";

const Page = ({ activeMenu, children }) => {
  return (
    <Grid container justifyContent="center" sx={{ padding: 10 }}>
      {children}
      <BarNavigation activeMenu={activeMenu} />
    </Grid>
  );
};

export default Page;
