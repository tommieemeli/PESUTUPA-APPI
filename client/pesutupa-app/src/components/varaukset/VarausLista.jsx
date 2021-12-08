import React from "react";
import VarausListaVaraus from "./VarausListaVaraus";
import VarausListaUusiVaraus from "./VarausListaUusiVaraus";

const VarausLista = ({ title, varaukset }) => {
  return (
    <div className="varauslista">
      <h2 className="varauslista-otsikko">{title}</h2>
      <div className="varauslista-lista">
        {varaukset.map((varaus, x) => (
          <VarausListaVaraus
            key={x}
            pvm={varaus.pvm}
            aloitusaika={varaus.aloitusaika}
            lopetusaika={varaus.lopetusaika}
          ></VarausListaVaraus>
        ))}
        {varaukset.length == 0 && <VarausListaUusiVaraus />}
      </div>
    </div>
  );
};

export default VarausLista;
