import React from "react";
import { Box, IconButton, Typography, Stack, List } from "@mui/material";
import {
  OpenWith as OpenWithIcon,
  ZoomOutMap as ZoomOutMapIcon,
} from "@mui/icons-material";

const Kanji = () => {
  return (
    <Box
      sx={{ height: "165px", border: "1px solid #D9D9D9", borderRadius: "5px" }}
    >
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
          Kanji
        </Typography>
        <IconButton sx={{ p: "8px 8px 0px 8px" }}>
          <ZoomOutMapIcon fontSize="small" />
        </IconButton>
      </Stack>
      <List
        sx={{
          width: "100%",
          maxHeight: "110px",
          overflow: "auto",
          paddingTop: 0,
          paddingBottom: 0,
        }}
      >
        
      </List>
    </Box>
  );
};

export default Kanji;
