import React from "react";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import cx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

const useStyles = makeStyles(() => ({
  card: {
    borderRadius: 25,
    backgroundColor: "#99EEFF",
  },
}));

const Home = () => {
  const stylet = useStyles();

  return (
    <div>
      <Container className={cx(stylet.container)}>
        <Card
          classes={stylet}
          sx={{ minWidth: 275 }}
          className={cx(stylet.card)}
        >
          <CardContent>
            <Typography variant="h5" component="div">
              (icon)
            </Typography>
            <Link to="/omatvaraukset">
              <Button size="small" variant="contained" color="pink">
                Omat varaukset
              </Button>
            </Link>
          </CardContent>
        </Card>
        <Card sx={{ minWidth: 275 }} className={cx(stylet.card)}>
          <CardContent>
            <Typography variant="h5" component="div">
              (icon)
            </Typography>
            <Link to="/uusivaraus">
              <Button size="small" variant="contained" color="pink">
                Uusi varaus
              </Button>
            </Link>
          </CardContent>
        </Card>
        <Card sx={{ minWidth: 275 }} className={cx(stylet.card)}>
          <CardContent>
            <Typography variant="h5" component="div">
              (icon)
            </Typography>
            <Link to="/profiili">
              <Button size="small" variant="contained" color="pink">
                Oma profiili
              </Button>
            </Link>
          </CardContent>
        </Card>
      </Container>
    </div>
  );
};

export default Home;
