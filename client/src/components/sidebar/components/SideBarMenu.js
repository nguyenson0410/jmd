import React from "react";
import {
  Box,
  List,
  ListItemButton,
  ListItemText,
  ListItemIcon,
  Divider,
} from "@mui/material";
import {
  ChromeReaderMode as ChromeReaderModeIcon,
  ListAlt as ListAltIcon,
  FormatListBulleted as FormatListBulletedIcon,
  Style as StyleIcon,
  Article as ArticleIcon,
  Settings as SettingsIcon,
  History as HistoryIcon,
} from "@mui/icons-material";
import { useState } from "react";

function SideBarMenu() {
  const menu = [];

  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };
  return (
    <Box>
      <List component="nav">
        <Divider />
        <ListItemButton
          selected={selectedIndex === 0}
          onClick={(event) => handleListItemClick(event, 0)}
        >
          <ListItemIcon>
            <ChromeReaderModeIcon />
          </ListItemIcon>
          <ListItemText
            primary="Profile"
            sx={{ fontWeight: 800, color: "#666666" }}
          />
        </ListItemButton>

        <ListItemButton
          selected={selectedIndex === 1}
          onClick={(event) => handleListItemClick(event, 1)}
        >
          <ListItemIcon>
            <FormatListBulletedIcon />
          </ListItemIcon>
          <ListItemText
            primary="Wordlist"
            sx={{ fontWeight: 800, color: "#666666" }}
          />
        </ListItemButton>

        <ListItemButton
          selected={selectedIndex === 2}
          onClick={(event) => handleListItemClick(event, 2)}
        >
          <ListItemIcon>
            <StyleIcon />
          </ListItemIcon>
          <ListItemText
            primary="Flashcard"
            sx={{ fontWeight: 800, color: "#666666" }}
          />
        </ListItemButton>

        <ListItemButton
          selected={selectedIndex === 3}
          onClick={(event) => handleListItemClick(event, 3)}
        >
          <ListItemIcon>
            <ArticleIcon />
          </ListItemIcon>
          <ListItemText
            primary="Comment"
            sx={{ fontWeight: 800, color: "#666666" }}
          />
        </ListItemButton>

        <ListItemButton
          selected={selectedIndex === 4}
          onClick={(event) => handleListItemClick(event, 4)}
        >
          <ListItemIcon>
            <SettingsIcon />
          </ListItemIcon>
          <ListItemText
            primary="Setting"
            sx={{ fontWeight: 800, color: "#666666" }}
          />
        </ListItemButton>

        <ListItemButton
          selected={selectedIndex === 5}
          onClick={(event) => handleListItemClick(event, 5)}
        >
          <ListItemIcon>
            <HistoryIcon />
          </ListItemIcon>
          <ListItemText
            primary="History"
            sx={{ fontWeight: 800, color: "#666666" }}
          />
        </ListItemButton>
      </List>
    </Box>
  );
}

export default SideBarMenu;
