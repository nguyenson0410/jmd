import React from "react";
import { useSelector } from "react-redux";

// import React components
import TranslationItem from "./TranslationItem";

// import MUI components
import { Box, Stack,  } from "@mui/material";


function Translation({ language, title, langCode }) {
  

  return (
    <Box>
      <Stack direction="column" spacing="10px">
        <TranslationItem data={language} title={title} langCode={langCode} />
      </Stack>
    </Box>
  );
}

export default Translation;
