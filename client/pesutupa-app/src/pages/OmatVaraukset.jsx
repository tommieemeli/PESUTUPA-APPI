import React from "react";
import Grid from "@mui/material/Grid";
import VarausLista from "../components/varaukset/VarausLista";

//tulee bäkkäristä lopulta
const PesutuvanVaraukset = [
  {
    pvm: "24.09.",
    aloitusaika: "18:00",
    lopetusaika: "19:00",
  },
  {
    pvm: "01.09.",
    aloitusaika: "08:00",
    lopetusaika: "09:00",
  },
];

const KuivaushuoneenVaraukset = [{}];

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
            <VarausLista
              varaukset={PesutuvanVaraukset}
              title="Pesutuvan varaukset"
            ></VarausLista>
          </Grid>
        </Grid>
        <Grid item xs={12} md={6}>
          <Grid
            container
            direction="row"
            justifyContent={{ xs: "center", md: "left" }}
          >
            <VarausLista
              varaukset={KuivaushuoneenVaraukset}
              title="Kuivaushuoneen varaukset"
            ></VarausLista>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default OmatVaraukset;
