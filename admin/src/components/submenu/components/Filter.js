import React from "react";

// import MUI components
import { Box, Typography } from "@mui/material";
import { TitleItalic } from "../../../styled/text";

function Filter() {
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
      <TitleItalic text="Filter" />
    </Box>
  );
}

export default Filter;
