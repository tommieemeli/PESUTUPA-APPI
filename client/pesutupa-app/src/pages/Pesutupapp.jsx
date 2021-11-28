import React, { useContext, useEffect, useCallback } from "react";
import Home from "./Home";
import Login from "./Login";
import Profiili from "./Profiili";
import UusiVaraus from "./UusiVaraus";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import OmatVaraukset from "./OmatVaraukset";
import { UserContext } from "../context/UserContext";
import Loader from "./Loader";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";

const Pesutupapp = () => {
  const [userContext, setUserContext] = useContext(UserContext);

  const fetchUserDetails = useCallback(() => {
    const url = "http://localhost:8081/";

    fetch(url + "users/me", {
      method: "GET",
      credentials: "include",
      // Pass authentication token as bearer token in header
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userContext.token}`,
      },
    }).then(async (response) => {
      if (response.ok) {
        const data = await response.json();
        setUserContext((oldValues) => {
          return { ...oldValues, details: data };
        });
      } else {
        if (response.status === 401) {
          // Edge case: when the token has expired.
          // This could happen if the refreshToken calls have failed due to network error or
          // User has had the tab open from previous day and tries to click on the Fetch button
          window.location.reload();
        } else {
          setUserContext((oldValues) => {
            return { ...oldValues, details: null };
          });
        }
      }
    });
  }, [setUserContext, userContext.token]);

  useEffect(() => {
    if (!userContext.details) {
      fetchUserDetails();
    }
  }, [userContext.details, fetchUserDetails]);

  const logoutHandler = () => {
    const url = "http://localhost:8081/";

    fetch(url + "users/logout", {
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userContext.token}`,
      },
    }).then(async (res) => {
      setUserContext((oldValues) => {
        return { ...oldValues, details: undefined, token: null };
      });
      window.localStorage.setItem("logout", Date.now());
    });
  };

  const Navbar = () => {
    return (
      <>
        <nav className="navbar">
          <Link to="/">
            <h1>PESUTUPAPP</h1>
          </Link>
          <Link to="/profiili">Profiili</Link>
          <Link to="/omatvaraukset">Omat varaukset</Link>
          <Link to="/uusivaraus">Uusi varaus</Link>
          <Link to="#">
            <Button
              color="secondary"
              variant="contained"
              onClick={logoutHandler}
            >
              <i class="far fa-sign-out-alt"></i>Log out
            </Button>
          </Link>
        </nav>
      </>
    );
  };

  return useContext.details === null ? (
    "Virhe ladattaessa käyttäjän tietoja"
  ) : !userContext.details ? (
    <Loader />
  ) : (
    <>
      <div className="App">
        <BrowserRouter>
          <div className="appi">
            <Navbar />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/profiili" component={Profiili} />
              <Route exact path="/uusivaraus" component={UusiVaraus} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/omatvaraukset" component={OmatVaraukset} />
            </Switch>
          </div>
        </BrowserRouter>
        <Button
          text="Logout"
          onClick={logoutHandler}
          minimal
          intent="primary"
        />
      </div>
    </>
  );
};

export default Pesutupapp;
