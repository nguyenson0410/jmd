import React from "react";
import { useState } from "react";

// import MUI components
import {
  Box,
  Typography,
  FormGroup,
  FormControl,
  Checkbox,
  Stack,
  FormLabel,
  FormControlLabel,
  FormHelperText,
} from "@mui/material";
import { TitleItalic } from "../../../styled/text";

function LanguageFilter() {
  const [language, setLanguage] = useState({
    Eng: true,
    Ger: true,
    Rus: false,
    Dut: false,
    Swe: false,
    Fra: true,
    Hun: false,
    Slv: false,
    Spa: false,
  });

  const [all, setAll] = useState(false);

  const handleSelectLanguage = (e) => {
    setLanguage({
      ...language,
      [e.target.value]: e.target.checked,
    });
  };

  return (
    <Box
      flex={1}
      sx={{
        border: "1px solid #D9D9D9",
        borderRadius: "5px",
        minHeight: "110px",
        p: "5px",
      }}
    >
      
      <TitleItalic text="Language Filter" />
      <FormControl>
        <FormGroup row>
          <FormControlLabel
            value="Eng"
            control={
              <Checkbox
                checked={language.Eng}
                onChange={handleSelectLanguage}
              />
            }
            label="Eng"
            labelPlacement="end"
            sx={{ color: "#333333" }}
          />
          <FormControlLabel
            value="Ger"
            control={
              <Checkbox
                checked={language.Ger}
                onChange={handleSelectLanguage}
              />
            }
            label="Ger"
            labelPlacement="end"
            sx={{ color: "#333333" }}
          />
          <FormControlLabel
            value="Rus"
            control={
              <Checkbox
                checked={language.Rus}
                onChange={handleSelectLanguage}
              />
            }
            label="Rus"
            labelPlacement="end"
            sx={{ color: "#333333" }}
          />
          <FormControlLabel
            value="Dut"
            control={
              <Checkbox
                checked={language.Dut}
                onChange={handleSelectLanguage}
              />
            }
            label="Dut"
            labelPlacement="end"
            sx={{ color: "#333333" }}
          />
          <FormControlLabel
            value="Swe"
            control={
              <Checkbox
                checked={language.Swe}
                onChange={handleSelectLanguage}
              />
            }
            label="Swe"
            labelPlacement="end"
            sx={{ color: "#333333" }}
          />
        </FormGroup>
        <FormGroup row>
          <FormControlLabel
            value="Fra"
            control={
              <Checkbox
                checked={language.Fra}
                onChange={handleSelectLanguage}
              />
            }
            label="Fra"
            labelPlacement="end"
            sx={{ color: "#333333" }}
          />
          <FormControlLabel
            value="Hun"
            control={
              <Checkbox
                checked={language.Hun}
                onChange={handleSelectLanguage}
              />
            }
            label="Hun"
            labelPlacement="end"
            sx={{ color: "#333333" }}
          />
          <FormControlLabel
            value="Slv"
            control={
              <Checkbox
                checked={language.Slv}
                onChange={handleSelectLanguage}
              />
            }
            label="Slv"
            labelPlacement="end"
            sx={{ color: "#333333" }}
          />
          <FormControlLabel
            value="Spa"
            control={
              <Checkbox
                checked={language.Spa}
                onChange={handleSelectLanguage}
              />
            }
            label="Spa"
            labelPlacement="end"
            sx={{ color: "#333333" }}
          />
          <FormControlLabel
            value="All"
            control={<Checkbox checked={all} />}
            label="All"
            labelPlacement="end"
            sx={{ color: "#333333" }}
          />
        </FormGroup>
      </FormControl>
    </Box>
  );
}

export default LanguageFilter;
