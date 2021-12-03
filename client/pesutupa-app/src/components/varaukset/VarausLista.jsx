import React from "react";
import VarausListaVaraus from "./VarausListaVaraus";

const VarausLista = ({ title, varaukset }) => {
  console.log(varaukset);
  return (
    <div className="varauslista">
      <h2 className="varauslista-otsikko">{title}</h2>
      <div className="varauslista-lista">
        {varaukset.map((varaus) => (
          <VarausListaVaraus
            pvm={varaus.pvm}
            aloitusaika={varaus.aloitusaika}
            lopetusaika={varaus.lopetusaika}
          ></VarausListaVaraus>
        ))}
      </div>
    </div>
  );
};

export default VarausLista;
