import React, { useState } from "react";

import {
  Box,
  IconButton,
  Typography,
  Stack,
  ListItemButton,
  ListItemText,
  ListItemIcon,
  ListItem,
  Modal,
  Button,
  List,
  Checkbox,
} from "@mui/material";
import {
  VolumeUp as VolumeUpIcon,
  PlaylistAdd as PlaylistAddIcon,
  ReportGmailerrorred as ReportGmailerrorredIcon,
  Favorite as FavoriteIcon,
} from "@mui/icons-material";

function Meaning({ lang, data }) {
  return (
    <>
      {data.map((item, index) => (
        <ListItem sx={{ p: 0, m: 0 }} key={index}>
          <img src={`/images/flagIcons/${lang}.svg`} width="15px" height="15px" />
          &ensp;
          <ListItemText secondary={item.gloss.join(", ")} />
          <IconButton sx={{ p: 0 }}>
            <ReportGmailerrorredIcon />
          </IconButton>
        </ListItem>
      ))}
    </>
  );
}

export default Meaning;
