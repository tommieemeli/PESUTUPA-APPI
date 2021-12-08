import React from "react";
import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import EventAvailableOutlinedIcon from "@mui/icons-material/EventAvailableOutlined";
import DateRangeOutlinedIcon from "@mui/icons-material/DateRangeOutlined";
import ManageAccountsOutlinedIcon from "@mui/icons-material/ManageAccountsOutlined";

function RenderIcon(iconType) {
  if (iconType === "omatVaraukset") {
    return <EventAvailableOutlinedIcon className="etusivu-linkki-ikoni" />;
  } else if (iconType === "uusiVaraus") {
    return <DateRangeOutlinedIcon className="etusivu-linkki-ikoni" />;
  }
  return <ManageAccountsOutlinedIcon className="etusivu-linkki-ikoni" />;
}

const EtusivuLinkki = ({ to, text, iconType }) => {
  return (
    <Card className="etusivu-linkki">
      <CardContent>
        <Typography variant="h2" component="div">
          {RenderIcon(iconType)}
        </Typography>
        <Link className="etusivu-linkki-linkki" to={to}>
          <Button
            size="large"
            variant="contained"
            color="pink"
            style={{
              color: "#6666FF",
              padding: "20px 50px",
              borderRadius: "17px",
              fontWeight: "bold",
              fontSize: "18px",
            }}
          >
            {text}
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
};

export default EtusivuLinkki;
