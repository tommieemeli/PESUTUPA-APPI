import React from "react";
import Grid from "@mui/material/Grid";
import VarausLista from "../components/varaukset/VarausLista";

const OmatVaraukset = () => {
  return (
    <div>
      <h1>omat varaukset</h1>
      <Grid direction="row" justifyContent="center" container spacing={10}>
        <Grid item xs={12} md={6}>
          <Grid
            container
            direction="row"
            justifyContent={{ xs: "center", md: "right" }}
          >
            <VarausLista title="Pesutuvan varaukset"></VarausLista>
          </Grid>
        </Grid>
        <Grid item xs={12} md={6}>
          <Grid
            container
            direction="row"
            justifyContent={{ xs: "center", md: "left" }}
          >
            <VarausLista title="Kuivaushuoneen varaukset"></VarausLista>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default OmatVaraukset;
