import React from "react";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/DeleteOutline";
import { Grid } from "@mui/material";

const VarausListaVaraus = ({ pvm, aloitusaika, lopetusaika }) => {
  return (
    <div className="varauslista-varaus">
      <Grid container justifyContent="center">
        <div>
          <p className="varauslista-varausteksti">Päivä: {pvm}</p>
          <p className="varauslista-varausteksti">
            Kello: {aloitusaika} - {lopetusaika}
          </p>
        </div>
      </Grid>
      <div className="varauslista-napit">
        <Button size="small" variant="contained" color="secondary">
          Muokkaa
        </Button>
        <Button
          className="ikoni-nappi"
          startIcon={<DeleteIcon />}
          size="small"
          variant="contained"
          color="secondary"
          sx={{ padding: "4px 0" }}
        ></Button>
      </div>
    </div>
  );
};

export default VarausListaVaraus;
