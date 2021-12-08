import React from "react";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";

const VarausListaUusiVaraus = () => {
  return (
    <div className="varauslista-varaus">
      <Grid container justifyContent="center">
        <div>
          <h2 className="varauslista-varaustekstiotsikko">EI VARAUKSIA</h2>
        </div>
      </Grid>
      <div className="varauslista-napit-uusivaraus">
        <Button
          size="small"
          variant="contained"
          color="secondary"
          style={{
            color: "#99EEFF",
            padding: "10px 30px",
            borderRadius: "7px",
          }}
        >
          Uusi varaus
        </Button>
      </div>
    </div>
  );
};

export default VarausListaUusiVaraus;
