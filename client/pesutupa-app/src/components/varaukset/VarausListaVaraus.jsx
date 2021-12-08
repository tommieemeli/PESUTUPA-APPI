import React from "react";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/DeleteOutline";
import Grid from "@mui/material/Grid";

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
          Muokkaa
        </Button>
        <Button
          className="ikoni-nappi"
          startIcon={<DeleteIcon />}
          size="extra-large"
          variant="contained"
          color="secondary"
          sx={{ padding: "4px 0" }} //mitä tää tekee?
          style={{
            color: "#99EEFF",
            padding: "10px",
            borderRadius: "7px",
          }}
        ></Button>
      </div>
    </div>
  );
};

export default VarausListaVaraus;
