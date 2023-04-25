import React from "react";
import {
  Box,
  ListItem,
  ListItemText,
  Typography,
  IconButton,
} from "@mui/material";
import { ReportGmailerrorred as ReportGmailerrorredIcon } from "@mui/icons-material";

const DefinationSentenceItem = () => {
  return (
    <>
      <ListItem sx={{ p: 0, m: 0 }}>
        <ListItemText
          sx={{
            bgcolor: "#d9d9d9",
            borderRadius: "5px",
            p: "2px 10px 2px 10px",
          }}
          primary={
            <Typography color="primary" variant="body2">
              <b>1. </b>店を譲り受ける
            </Typography>
          }
          secondary="&emsp;to take over a business"
        />
        <IconButton sx={{ p: 0 }}>
          <ReportGmailerrorredIcon />
        </IconButton>
      </ListItem>
      <ListItem sx={{ p: 0, m: 0 }}>
        <ListItemText
          sx={{
            bgcolor: "#d9d9d9",
            borderRadius: "5px",
            p: "2px 10px 2px 10px",
          }}
          primary={
            <Typography color="primary">
              <b>2. </b>それを無償で譲り受ける。
            </Typography>
          }
          secondary="&emsp;I purchase that for free."
        />
        <IconButton sx={{ p: 0 }}>
          <ReportGmailerrorredIcon />
        </IconButton>
      </ListItem>
      <ListItem sx={{ p: 0, m: 0 }}>
        <ListItemText
          sx={{
            bgcolor: "#d9d9d9",
            borderRadius: "5px",
            p: "2px 10px 2px 10px",
          }}
          primary={
            <Typography color="primary" variant="body2">
              <b>3. </b>親の財産を譲り受ける
            </Typography>
          }
          secondary="&emsp;to inherit one's father's property"
        />
        <IconButton sx={{ p: 0 }}>
          <ReportGmailerrorredIcon />
        </IconButton>
      </ListItem>
      <ListItem sx={{ p: 0, m: 0 }}>
        <ListItemText
          sx={{
            bgcolor: "#d9d9d9",
            borderRadius: "5px",
            p: "2px 10px 2px 10px",
          }}
          primary={
            <Typography color="primary" variant="body2">
              <b>4. </b>小父などの）財産を譲り受ける
            </Typography>
          }
          secondary="&emsp;to come into a fortune―step into a fortune"
        />
        <IconButton sx={{ p: 0 }}>
          <ReportGmailerrorredIcon />
        </IconButton>
      </ListItem>
      <ListItem sx={{ p: 0, m: 0 }}>
        <ListItemText
          sx={{
            bgcolor: "#d9d9d9",
            borderRadius: "5px",
            p: "2px 10px 2px 10px",
          }}
          primary={
            <Typography color="primary" variant="body2">
              <b>5. </b>芸者を先客から譲り受ける
            </Typography>
          }
          secondary="&emsp;to obtain a geisha girl from her former customer"
        />
        <IconButton sx={{ p: 0 }}>
          <ReportGmailerrorredIcon />
        </IconButton>
      </ListItem>
    </>
  );
};

export default DefinationSentenceItem;
