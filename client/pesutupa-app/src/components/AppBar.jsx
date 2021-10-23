import React from "react";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";

export const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <Link to="/">
          <h1>PESUTUPAPP</h1>
        </Link>
        <Link to="/profiili">Profiili</Link>
        <Link to="/omatvaraukset">Omat varaukset</Link>
        <Link to="/uusivaraus">Uusi varaus</Link>
        <Link>
          <Button className="card-button" color="secondary" variant="contained">
            <i class="far fa-sign-out-alt"></i>Log out
          </Button>
        </Link>
      </nav>
    </>
  );
};
