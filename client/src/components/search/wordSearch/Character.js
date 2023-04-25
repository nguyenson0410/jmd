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

// import React components
import DefinationMeaningItemNote from "./DefinationMeaningItemNote";

function Character({ k_ele, r_ele, query }) {
  const [open, setOpen] = useState(false);
  const [checked, setChecked] = useState([0]);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };
  return (
    <Box>
      <Stack direction="column">
        {k_ele[0] ? (
          <Box>
            <Stack direction="row" spacing={2} alignItems="center">
              <Typography variant="caption" gutterBottom>
                <i>{r_ele[0].reb}</i>
              </Typography>
              <IconButton sx={{ padding: 0 }}>
                <VolumeUpIcon />
              </IconButton>
            </Stack>
          </Box>
        ) : null}

        <Box>
          <Stack direction="row" justifyContent="space-between">
            <Box>
              <Typography
                variant="h5"
                sx={{
                  color: "#F74545",
                }}
              >
                <b>{k_ele[0] ? k_ele[0].keb : query}</b>
              </Typography>
              <Typography variant="caption" display="block">
                Other Kana:{" "}
                {r_ele.length > 0
                  ? r_ele.map((item) => item.reb + ", ")
                  : " None"}
              </Typography>
              <Typography variant="caption" display="block">
                Other Kanji:
                {k_ele.length > 0
                  ? k_ele.map((item) => item.keb + ", ")
                  : " None"}
              </Typography>
            </Box>
            <Box>
              <IconButton>
                <FavoriteIcon fontSize="small" />
              </IconButton>
              <IconButton onClick={handleOpen}>
                <PlaylistAddIcon />
              </IconButton>
            </Box>
            <Modal open={open} onClose={handleClose}>
              <Box
                sx={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  width: 200,
                  bgcolor: "background.paper",
                  border: "1x solid #000",
                  boxShadow: 24,
                  p: 4,
                }}
              >
                <Typography variant="h6" component="h2" align="center">
                  Save in ...
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
                  {[0, 1, 2, 3, 4, 5, 6, 7].map((value) => {
                    const labelId = `checkbox-list-label-${value}`;

                    return (
                      <ListItem key={value} disablePadding>
                        <ListItemButton
                          role={undefined}
                          onClick={handleToggle(value)}
                          dense
                        >
                          <ListItemIcon>
                            <Checkbox
                              edge="start"
                              checked={checked.indexOf(value) !== -1}
                              tabIndex={-1}
                              disableRipple
                              inputProps={{ "aria-labelledby": labelId }}
                            />
                          </ListItemIcon>
                          <ListItemText
                            id={labelId}
                            primary={`List ${value + 1}`}
                          />
                        </ListItemButton>
                      </ListItem>
                    );
                  })}
                </List>
                <Stack direction="row" justifyContent="flex-end">
                  <Button>Save</Button>
                  <Button color="error">Cancel</Button>
                </Stack>
              </Box>
            </Modal>
          </Stack>
        </Box>
      </Stack>
    </Box>
  );
}

export default Character;
