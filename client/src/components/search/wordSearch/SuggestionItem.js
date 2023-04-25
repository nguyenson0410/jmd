import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";

import {
  Box,
  List,
  ListItemButton,
  ListItemText,
  Divider,
  Button,
  Typography,
  Chip,
} from "@mui/material";

const SuggestionItem = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };

  const suggestion = useSelector((state) => state.suggestion.words);

  return (
    <List
      sx={{
        width: "100%",
        maxHeight: "110px",
        overflow: "auto",
        paddingTop: 0,
        paddingBottom: 0,
      }}
    >
      {suggestion.map((item, index) => (
        <ListItemButton
          selected={selectedIndex === index}
          onClick={(event) => handleListItemClick(event, index)}
          key={index}
          sx={{ padding: "0 10px", height: "50px" }}
        >
          <ListItemText
            primary={
              <React.Fragment>
                <Typography
                  sx={{
                    display: "inline",
                    fontWeight: "bold",
                    fontSize: "14px",
                  }}
                >
                  {item.k_ele[0] ? item.k_ele[0].keb : null}
                </Typography>
                &ensp;{" "}
                <Typography sx={{ display: "inline", fontSize: "12px" }}>
                  <i>{item.r_ele[0].reb}</i>
                </Typography>
              </React.Fragment>
            }
            secondary={
              <Typography sx={{ display: "inline", fontSize: "13px" }}>
                <mark>{item.sense.eng[0].gloss.join(", ")}</mark>
              </Typography>
            }
          />
          <Chip
            label="Noun"
            variant="filled"
            color="primary"
            size="small"
            sx={{ width: "50px" }}
          />
        </ListItemButton>
      ))}
    </List>
  );
};

export default SuggestionItem;
