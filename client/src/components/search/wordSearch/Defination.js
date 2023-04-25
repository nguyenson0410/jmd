import React, { useState, useEffect } from "react";

// import React components
import { TitleItalic } from "../../../styled/text";
import Character from "./Character";
import Meaning from "./Meaning";

// import Redux
import { useSelector, useDispatch } from "react-redux";
import { filtersSlice } from "../../../redux/slices/filtersSlice";

// import MUI component
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



const Defination = () => {
  const languageItems = [
    "eng",
    "fre",
    "ger",
    "rus",
    "dut",
    "spa",
    "hun",
    "slv",
    "swe",
  ];
  const dispatch = useDispatch();
  const theme = useTheme();

  const [language, setlanguage] = useState(() => []);

  const languageArray = useSelector((state) => state.filters.languages);
  const data = useSelector((state) => state.word.data);
  const query = useSelector((state) => state.word.query);

  useEffect(() => {
    setlanguage(languageArray);
  }, [languageArray]);

  const handleSelectLanguage = (event, language) => {
    dispatch(filtersSlice.actions.languageUpdate(language));
  };
  const isMobile = useMediaQuery(theme.breakpoints.down("xs"));
  return (
    <Box
      sx={{ height: "472px", border: "1px solid #D9D9D9", borderRadius: "5px" }}
    >
      <Stack direction="column" justifyContent="center">
        <Box>
          <Stack direction="row" justifyContent="space-between" p="10px">
            <TitleItalic text="Defination" />

            <IconButton>
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
            {languageItems.map((item, index) => {
              return (
                <ToggleButton
                  key={item}
                  value={item}
                  size="small"
                  sx={{ width: "30px", height: "20px", borderRadius: 0 }}
                >
                  {item}
                </ToggleButton>
              );
            })}
          </ToggleButtonGroup>
        </Box>
        {data._id ? (
          <Box>
            <List
              sx={{
                width: { xs: "95%", sm: "98.5%", md: "98.5%", lg: "98.5%" },
                maxHeight: "365px",
                overflow: "auto",
                marginLeft: "10px",
                marginRight: "10px",
              }}
            >
             
              <Stack direction="column" spacing="10px">
                <Character
                  k_ele={data.k_ele}
                  r_ele={data.r_ele}
                  query={query}
                />
               
                {languageArray.map((item, index) => {
                  return (
                    <Meaning lang={item} data={data.sense[item]} key={index} />
                  );
                })}
              </Stack>
              <Divider>
                <Chip label="example" variant="outlined" />
              </Divider>
            </List>
          </Box>
        ) : null}
      </Stack>
    </Box>
  );
};

export default Defination;
