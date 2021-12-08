import React from "react";
import Grid from "@mui/material/Grid";
import VarausLista from "../components/varaukset/VarausLista";

//tulee bäkkäristä lopulta
const PesutuvanVaraukset = [
  {
    pvm: "08.12.",
    aloitusaika: "10:30",
    lopetusaika: "12:00",
  },
  {
    pvm: "11.12.",
    aloitusaika: "08:00",
    lopetusaika: "09:00",
  },
  {
    pvm: "13.12.",
    aloitusaika: "21:15",
    lopetusaika: "22:45",
  },
];

const KuivaushuoneenVaraukset = [];

const OmatVaraukset = () => {
  return (
    <div>
      <h2>Omat varaukset</h2>
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
