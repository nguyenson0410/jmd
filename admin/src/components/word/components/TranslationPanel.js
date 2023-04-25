import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

// import Redux slices
import wordSlice from "../../../redux/slices/wordSlice";

// import React components
import Translation from "./Translation";

// import MUI components
import { Tab, Box, IconButton, Stack } from "@mui/material";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import { AddCircle as AddCircleIcon } from "@mui/icons-material";

function TranslationPanel({ word, cb }) {
  const dispatch = useDispatch();
  const sense = useSelector((state) => state.word.data.sense);
  const mode = useSelector((state) => state.word.mode);
  const [value, setValue] = useState("eng");
  const languageArr = [
    { language: "English", langCode: "eng" },
    { language: "French", langCode: "fre" },
    { language: "German", langCode: "ger" },
    { language: "Russian", langCode: "rus" },
    { language: "Dutch", langCode: "dut" },
    { language: "Spain", langCode: "spa" },
    { language: "Hungari", langCode: "hun" },
    { language: "Slovenia", langCode: "slv" },
    { language: "Sweden", langCode: "swe" },
  ];

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const addTranslation = (langcode) => {
    dispatch(wordSlice.actions.addTranslation(langcode));
  };
  return (
    <Box>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList onChange={handleChange} centered>
            {languageArr.map((item, index) => {
              return (
                <Tab
                  label={`${item.language} (${sense[item.langCode].length})`}
                  value={item.langCode}
                  key={index}
                />
              );
            })}
          </TabList>
        </Box>
        {languageArr.map((item, index) => {
          return (
            <TabPanel value={item.langCode} key={index}>
              <Translation
                language={sense[item.langCode]}
                title={item.language}
                langCode={item.langCode}
              />
              {mode.adding ? (
                <Stack direction="row" justifyContent="center">
                  <IconButton
                    onClick={() => {
                      addTranslation(item.langCode);
                    }}
                  >
                    <AddCircleIcon color="primary" fontSize="large" />
                  </IconButton>
                </Stack>
              ) : null}
            </TabPanel>
          );
        })}
      </TabContext>
    </Box>
  );
}

export default TranslationPanel;
