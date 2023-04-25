import React from "react";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Divider,
  IconButton,
  Stack,
  SpeedDial,
  InputBase,
  Typography,
} from "@mui/material";
import {
  Delete as DeleteIcon,
  BorderColor as BorderColorIcon,
  DeleteForever as DeleteForeverIcon,
  Add as AddIcon,
} from "@mui/icons-material";

function LeftBar() {
  const [selectedIndex, setSelectedIndex] = React.useState(1);

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };
  return (
    <Box flex={1} sx={{ height: "460px" }}>
      <Box
        display="flex"
        bgcolor="white"
        borderRadius="5px"
        border="solid 1px #D9D9D9"
        justifyContent="space-between"
      >
        <InputBase placeholder="search..." sx={{ ml: 2, mt: 0, mb: 0 }} />
      </Box>
      <nav aria-label="main mailbox folders">
        <List
          sx={{
            width: { xs: "95%", sm: "95%", md: "95%", lg: "95%" },
            maxHeight: "412px",
            overflow: "auto",
            marginLeft: "10px",
            marginRight: "10px",
          }}
        >
          <ListItem disablePadding>
            <ListItemButton
              sx={{ p: 0 }}
              selected={selectedIndex === 0}
              onClick={(event) => handleListItemClick(event, 0)}
            >
              <ListItemText
                primary={
                  <Typography sx={{ fontSize: "14px" }}>Favorite</Typography>
                }
              />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton
              sx={{ p: 0 }}
              selected={selectedIndex === 1}
              onClick={(event) => handleListItemClick(event, 1)}
            >
              <ListItemText
                primary={
                  <Typography sx={{ fontSize: "14px" }}>List 1</Typography>
                }
                secondary={
                  <Typography
                    sx={{
                      fontSize: "12px",
                      fontStyle: "italic",
                      color: "#666666",
                    }}
                  >
                    01/01/2023
                  </Typography>
                }
              />
              <IconButton sx={{ p: 0 }}>
                <BorderColorIcon fontSize="small" />|
                <DeleteForeverIcon fontSize="small" color="error" />
              </IconButton>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton
              sx={{ p: 0 }}
              selected={selectedIndex === 2}
              onClick={(event) => handleListItemClick(event, 2)}
            >
              <ListItemText
                primary={
                  <Typography sx={{ fontSize: "14px" }}>List 2</Typography>
                }
                secondary={
                  <Typography
                    sx={{
                      fontSize: "12px",
                      fontStyle: "italic",
                      color: "#666666",
                    }}
                  >
                    01/01/2023
                  </Typography>
                }
              />
              <IconButton sx={{ p: 0 }}>
                <BorderColorIcon fontSize="small" />|
                <DeleteForeverIcon fontSize="small" color="error" />
              </IconButton>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton
              sx={{ p: 0 }}
              selected={selectedIndex === 3}
              onClick={(event) => handleListItemClick(event, 3)}
            >
              <ListItemText
                primary={
                  <Typography sx={{ fontSize: "14px" }}>List 3</Typography>
                }
                secondary={
                  <Typography
                    sx={{
                      fontSize: "12px",
                      fontStyle: "italic",
                      color: "#666666",
                    }}
                  >
                    01/01/2023
                  </Typography>
                }
              />
              <IconButton sx={{ p: 0 }}>
                <BorderColorIcon fontSize="small" />|{" "}
                <DeleteForeverIcon fontSize="small" color="error" />
              </IconButton>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton
              sx={{ p: 0 }}
              selected={selectedIndex === 4}
              onClick={(event) => handleListItemClick(event, 4)}
            >
              <ListItemText
                primary={
                  <Typography sx={{ fontSize: "14px" }}>List 4</Typography>
                }
                secondary={
                  <Typography
                    sx={{
                      fontSize: "12px",
                      fontStyle: "italic",
                      color: "#666666",
                    }}
                  >
                    01/01/2023
                  </Typography>
                }
              />
              <IconButton sx={{ p: 0 }}>
                <BorderColorIcon fontSize="small" />|
                <DeleteForeverIcon fontSize="small" color="error" />
              </IconButton>
            </ListItemButton>
          </ListItem>
        </List>
      </nav>
    </Box>
  );
}

export default LeftBar;
