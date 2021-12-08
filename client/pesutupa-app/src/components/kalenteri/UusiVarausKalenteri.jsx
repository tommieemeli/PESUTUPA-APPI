import React, { useState } from "react";
import { Button, FormControl, Grid, InputLabel, MenuItem } from "@mui/material";
import { Select, TextField } from "@mui/material";
import { styled } from "@material-ui/core/styles";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DateAdapter from "@mui/lab/AdapterMoment";
import DatePicker from "@mui/lab/DatePicker";
import TimePicker from "@mui/lab/TimePicker";
import CheckIcon from "@mui/icons-material/Check";

import moment from "moment";

const UusiVarausKalenteri = () => {
  const [paiva, setPaiva] = useState(moment("12.08.2021"));
  const [aika, setAika] = useState("04.20");
  const [tupa, setTupa] = useState("");

  const handleChange = (event) => {
    setTupa(event.target.value);
  };
  const CssTextField = styled(TextField)({
    "& label.Mui-focused": {
      color: "#737373",
    },
    "& .MuiOutlinedInput-root": {
      "&.Mui-focused fieldset": {
        borderColor: "#a8e1e3",
      },
    },
  });
  const CssFormControl = styled(FormControl)({
    "& label.Mui-focused": {
      color: "#737373",
    },
    "& .MuiOutlinedInput-root": {
      "&.Mui-focused fieldset": {
        borderColor: "#a8e1e3",
      },
    },
  });

  return (
    <>
      <form type="submit" className="varauskalenteri">
        <Grid container justifyContent="center">
          <Grid item xs={12} style={{ marginTop: "20px" }}>
            <CssTextField
              className="varauskalenteri-kentta"
              label="Asunto"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={8} style={{ marginTop: "35px" }}>
            <LocalizationProvider dateAdapter={DateAdapter}>
              <DatePicker
                label="PVM"
                value={paiva}
                onChange={(newValue) => {
                  setPaiva(newValue);
                }}
                renderInput={(params) => (
                  <TextField
                    className="varauskalenteri-kentta"
                    style={{ backgroundColor: "#FFFFFF" }}
                    {...params}
                  />
                )}
              />
            </LocalizationProvider>
          </Grid>
          <Grid item xs={4} style={{ marginTop: "35px" }}>
            <LocalizationProvider dateAdapter={DateAdapter}>
              <TimePicker
                label="Kellonaika"
                value={aika}
                onChange={(newValue) => {
                  setAika(newValue);
                }}
                renderInput={(params) => (
                  <TextField
                    className="varauskalenteri-kentta"
                    style={{ backgroundColor: "#FFFFFF" }}
                    {...params}
                  />
                )}
              />
            </LocalizationProvider>
          </Grid>
          <Grid item xs={12} style={{ marginTop: "35px" }}>
            <CssFormControl fullWidth>
              <InputLabel>Varauksen kohde</InputLabel>
              <Select
                className="varauskalenteri-kentta"
                value={tupa}
                label="Varauksen kohde"
                onChange={handleChange}
              >
                <MenuItem value={10}>Pesutupa</MenuItem>
                <MenuItem value={20}>Kuivaushuone</MenuItem>
              </Select>
            </CssFormControl>
          </Grid>
        </Grid>
        <div className="varauskalenteri-nappi">
          <Button
            startIcon={<CheckIcon />}
            size="small"
            variant="contained"
            color="secondary"
            style={{
              color: "#99EEFF",
              padding: "10px 30px",
              borderRadius: "7px",
            }}
          >
            Valmis
          </Button>
        </div>
      </form>
    </>
  );
};

export default UusiVarausKalenteri;
