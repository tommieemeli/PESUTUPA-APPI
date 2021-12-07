import React from "react";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import { useMediaQuery } from "@material-ui/core";
import { useTheme } from "@mui/material/styles";
import EtusivuLinkki from "../components/etusivu/EtusivuLinkki";

const Home = () => {
  const theme = useTheme();
  const showStack = useMediaQuery(theme.breakpoints.up("lg"));

  return (
    <div>
      {!showStack && (
        <Grid
          direction="row"
          justifyContent="center"
          container
          spacing={10}
          sx={{ marginTop: "10px" }}
        >
          <Grid item xs={12} md={6} lg={4}>
            <Grid container justifyContent="center">
              <EtusivuLinkki
                to="/omatvaraukset"
                text="Omat varaukset"
                iconType="omatVaraukset"
              ></EtusivuLinkki>
            </Grid>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <Grid container justifyContent="center">
              <EtusivuLinkki
                to="/uusivaraus"
                text="Uusi varaus"
                iconType="uusiVaraus"
              ></EtusivuLinkki>
            </Grid>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <Grid container justifyContent="center">
              <EtusivuLinkki
                to="/profiili"
                text="Oma profiili"
                iconType="omaProfiili"
              ></EtusivuLinkki>
            </Grid>
          </Grid>
        </Grid>
      )}
      {showStack && (
        <Stack
          justifyContent="center"
          direction="row"
          spacing={15}
          sx={{ marginTop: "150px" }}
        >
          <EtusivuLinkki
            to="/omatvaraukset"
            text="Omat varaukset"
            iconType="omatVaraukset"
          ></EtusivuLinkki>
          <EtusivuLinkki
            to="/uusivaraus"
            text="Uusi varaus"
            iconType="uusiVaraus"
          ></EtusivuLinkki>
          <EtusivuLinkki
            to="/profiili"
            text="Oma profiili"
            iconType="omaProfiili"
          ></EtusivuLinkki>
        </Stack>
      )}
    </div>
  );
};

export default Home;
