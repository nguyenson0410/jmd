import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Button,
  Stack,
} from "@mui/material";

function SearchHistoryModal() {
  const [history, setHistory] = useState([]);
  useEffect(() => {
    const fetchData = async (wordId) => {
      const res = await axios.get("http://localhost:5000/api/history");
      setHistory(res.data.words);
    };
    // fetch data
    fetchData();
  }, []);
  return (
    <Box>
      <Typography variant="h6" component="h2" align="center">
        Search History
      </Typography>
      <List
        sx={{
          width: "100%",
          maxWidth: 260,
          bgcolor: "background.paper",
          maxHeight: "200px",
          overflow: "auto",
        }}
      >
        {history.map((value, id) => {
          return (
            <ListItem key={id} disablePadding>
              <ListItemButton>
                <ListItemText primary={value} />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
    </Box>
  );
}

export default SearchHistoryModal;
