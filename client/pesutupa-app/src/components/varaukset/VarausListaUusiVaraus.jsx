import React from "react";
import Button from "@mui/material/Button";
import { Grid } from "@mui/material";

const VarausListaUusiVaraus = () => {
  return (
    <div className="varauslista-varaus">
      <Grid container justifyContent="center">
        <div>
          <h2 className="varauslista-varausteksti">EI VARAUKSIA</h2>
        </div>
      </Grid>
      <div className="varauslista-napit">
        <Button size="small" variant="contained" color="secondary">
          Uusi varaus
        </Button>
      </div>
    </div>
  );
};

export default VarausListaUusiVaraus;
