import React from "react";
import { useState } from "react";
import {
  Box,
  Typography,
  IconButton,
  Stack,
  ToggleButtonGroup,
  ToggleButton,
  List,
  useMediaQuery,
  useTheme,
  Paper,
  Divider,
  Chip,
} from "@mui/material";
import {
  LanguageTwoTone,
  OpenWith as OpenWithIcon,
  ZoomOutMap as ZoomOutMapIcon,
} from "@mui/icons-material";

// import components
import DefinationMeaningItem from "./DefinationMeaningItem";
import DefinationSentenceItem from "./DefinationSentenceItem";

const DefinationNarrow = () => {
  const [language, setlanguage] = useState(() => ["Eng"]);
  const handleSelectLanguage = (event, language) => {
    setlanguage(language);
  };
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("xs"));
  return (
    <Box
      sx={{ height: "308px", border: "1px solid #D9D9D9", borderRadius: "5px" }}
    >
      <Stack direction="column" justifyContent="center">
        <Box>
          <Stack direction="row" justifyContent="space-between">
            <Typography
              sx={{
                fontStyle: "italic",
                fontWeight: 200,
                textDecorationLine: "underline",
                color: "#333333",
                textShadow: "0px 4px 4px rgba(0,0,0,0.25)",
                pl: 2,
              }}
            >
              Defination
            </Typography>

            <IconButton sx={{ p: "8px 8px 0px 8px" }}>
              <ZoomOutMapIcon fontSize="small" />
            </IconButton>
          </Stack>
        </Box>
        <Box sx={{ textAlign: "center" }}>
          <ToggleButtonGroup
            value={language}
            onChange={handleSelectLanguage}
            color="primary"
          >
            <ToggleButton
              value="Vie"
              size="small"
              sx={{ width: "30px", height: "20px", borderRadius: 0 }}
            >
              Vie
            </ToggleButton>
            <ToggleButton
              value="Eng"
              size="small"
              sx={{ width: "30px", height: "20px", borderRadius: 0 }}
            >
              Eng
            </ToggleButton>
            <ToggleButton
              value="Ger"
              size="small"
              sx={{ width: "30px", height: "20px", borderRadius: 0 }}
            >
              Ger
            </ToggleButton>
            <ToggleButton
              value="Fra"
              size="small"
              sx={{ width: "30px", height: "20px", borderRadius: 0 }}
            >
              Fra
            </ToggleButton>
            <ToggleButton
              value="Rus"
              size="small"
              sx={{ width: "30px", height: "20px", borderRadius: 0 }}
            >
              Rus
            </ToggleButton>
            <ToggleButton
              value="Hun"
              size="small"
              sx={{ width: "30px", height: "20px", borderRadius: 0 }}
            >
              Hun
            </ToggleButton>
            <ToggleButton
              value="Dut"
              size="small"
              sx={{ width: "30px", height: "20px", borderRadius: 0 }}
            >
              Dut
            </ToggleButton>
            <ToggleButton
              value="Spa"
              size="small"
              sx={{ width: "30px", height: "20px", borderRadius: 0 }}
            >
              Spa
            </ToggleButton>
            <ToggleButton
              value="Swe"
              size="small"
              sx={{ width: "30px", height: "20px", borderRadius: 0 }}
            >
              Swe
            </ToggleButton>
          </ToggleButtonGroup>
        </Box>
        <Box>
          <List
            sx={{
              width: "97.5%",
              maxHeight: "235px",
              overflow: "auto",
              marginLeft: "10px",
              marginRight: "10px",
            }}
          >
            <Divider>
              <Chip label="meaning" />
            </Divider>
            <DefinationMeaningItem />
            <DefinationSentenceItem />
          </List>
        </Box>
      </Stack>
    </Box>
  );
};

export default DefinationNarrow;
