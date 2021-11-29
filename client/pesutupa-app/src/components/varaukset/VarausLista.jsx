import { Box } from "@mui/system";
import React from "react";

const VarausLista = ({ title }) => {
  return (
    <div className="varauslista">
      <h2 className="varauslista-otsikko">{title}</h2>
      <div className="varauslista-lista"></div>
    </div>
  );
};

export default VarausLista;
