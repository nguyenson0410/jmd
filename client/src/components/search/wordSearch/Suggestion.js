import React from "react";
import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Divider,
} from "@mui/material";

// import components
import SuggestionItem from "./SuggestionItem";

const Suggestion = () => {
  return (
    <Box
      sx={{
        height: "140px",
        border: "1px solid #D9D9D9",
        borderRadius: "5px",
        pl: 2,
      }}
    >
      <Box>
        <Typography
          sx={{
            fontStyle: "italic",
            fontWeight: 200,
            textDecorationLine: "underline",
            color: "#333333",
            textShadow: "0px 4px 4px rgba(0,0,0,0.25)",
          }}
        >
          Suggestion
        </Typography>
      </Box>
      <SuggestionItem />
    </Box>
  );
};

export default Suggestion;
