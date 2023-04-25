import React from "react";
import {
  Box,
  ListItem,
  ListItemText,
  List,
  Typography,
  InputBase,
  IconButton,
  Stack,
  ListItemIcon,
  ListSubheader,
  Switch,
  ListItemButton,
  Divider,
  Button,
} from "@mui/material";
import {
  Create as CreateIcon,
  HighlightOff as HighlightOffIcon,
  Wifi as WifiIcon,
  Bluetooth as BluetoothIcon,
  Delete as DeleteIcon,
  DeleteForever as DeleteForeverIcon,
} from "@mui/icons-material";

function RightBar() {
  return (
    <Box flex={2} sx={{ border: "1px solid #D9D9D9", borderRadius: "5px" }}>
      <List
        sx={{
          width: { xs: "97%", sm: "97%", md: "97%", lg: "97%" },
          maxHeight: "430px",
          overflow: "auto",
        }}
        subheader={<ListSubheader>Words in List</ListSubheader>}
      >
        <ListItem sx={{ mt: 0, mb: 0, pt: 0, pb: 0 }} divider>
          <ListItemButton
            sx={{
              mt: 0,
              mb: 0,
              pt: 0,
              pb: 0,
            }}
          >
            <ListItemText
              primary={
                <>
                  <span
                    style={{
                      color: "#F74545",
                      fontWeight: "bold",
                      fontSize: "14px",
                    }}
                  >
                    譲り受ける
                  </span>
                  <span
                    style={{
                      fontStyle: "italic",
                      fontWeight: 200,
                      color: "#333333",
                      fontSize: "12px",
                    }}
                  >
                    &ensp; ゆずりうける
                  </span>
                </>
              }
              secondary={
                <p style={{ fontSize: "12px" }}>
                  <mark>Thừa kế, thừa hưởng</mark>
                </p>
              }
            />
          </ListItemButton>

          <ListItemIcon>
            <IconButton sx={{ mt: 0, mb: 0, pt: 0, pb: 0 }}>
              <DeleteForeverIcon color="error" />
            </IconButton>
          </ListItemIcon>
        </ListItem>
        <ListItem sx={{ mt: 0, mb: 0, pt: 0, pb: 0 }} divider>
          <ListItemButton
            sx={{
              mt: 0,
              mb: 0,
              pt: 0,
              pb: 0,
            }}
          >
            <ListItemText
              primary={
                <>
                  <span
                    style={{
                      color: "#F74545",
                      fontWeight: "bold",
                      fontSize: "14px",
                    }}
                  >
                    勉強する
                  </span>
                  <span
                    style={{
                      fontStyle: "italic",
                      fontWeight: 200,
                      color: "#333333",
                      fontSize: "12px",
                    }}
                  >
                    &ensp; べんきょうする
                  </span>
                </>
              }
              secondary={
                <p style={{ fontSize: "12px" }}>
                  <mark>Học tập, học hành</mark>
                </p>
              }
            />
          </ListItemButton>

          <ListItemIcon>
            <IconButton sx={{ mt: 0, mb: 0, pt: 0, pb: 0 }}>
              <DeleteForeverIcon color="error" />
            </IconButton>
          </ListItemIcon>
        </ListItem>
        <ListItem sx={{ mt: 0, mb: 0, pt: 0, pb: 0 }} divider>
          <ListItemButton
            sx={{
              mt: 0,
              mb: 0,
              pt: 0,
              pb: 0,
            }}
          >
            <ListItemText
              primary={
                <>
                  <span
                    style={{
                      color: "#F74545",
                      fontWeight: "bold",
                      fontSize: "14px",
                    }}
                  >
                    運転する
                  </span>
                  <span
                    style={{
                      fontStyle: "italic",
                      fontWeight: 200,
                      color: "#333333",
                      fontSize: "12px",
                    }}
                  >
                    &ensp; うんてんする
                  </span>
                </>
              }
              secondary={
                <p style={{ fontSize: "12px" }}>
                  <mark>Lái xe</mark>
                </p>
              }
            />
          </ListItemButton>

          <ListItemIcon>
            <IconButton sx={{ mt: 0, mb: 0, pt: 0, pb: 0 }}>
              <DeleteForeverIcon color="error" />
            </IconButton>
          </ListItemIcon>
        </ListItem>
      </List>
    </Box>
  );
}

export default RightBar;
