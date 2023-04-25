import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";

// import Redux slice

// import MUI component
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

// import image

const DefinationItem = ({ sense }) => {
 
  return (
    <Box>
      <Stack direction="column">
        <Box>
          <Stack direction="row" spacing={2}>
            <Typography variant="caption" gutterBottom>
              <i>{defination[0] ? defination[0].r_ele[0].reb : null}</i>
            </Typography>
            <IconButton sx={{ padding: 0 }}>
              <VolumeUpIcon />
            </IconButton>
          </Stack>
        </Box>
        <Box>
          <Stack direction="row" justifyContent="space-between">
            <Typography
              variant="h5"
              sx={{
                color: "#F74545",
              }}
            >
              <b>{defination[0] ? defination[0].k_ele[0].keb : null}</b>
            </Typography>
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

        <Box>
          {defination[0]
            ? defination[0].sense[0].pos.map((item, index) => (
                <Typography variant="body2" color="green" key={index}>
                  - {item}
                </Typography>
              ))
            : null}

          <Box>
            <DefinationMeaningItemNote />
          </Box>
        </Box>

        {defination[0]
          ? defination[0].sense.map((item, id) =>
              languages.includes(item.gloss[0].lang) ? (
                <Box>
                  <ListItem sx={{ p: 0, m: 0 }} key={id}>
                    <img
                      src={`/images/flagIcons/${item.gloss[0].lang}.svg`}
                      width="15px"
                      height="15px"
                    />
                    &ensp;
                    <ListItemText
                      secondary={
                        item.gloss[0].meaning ? (
                          item.gloss[0].meaning
                        ) : (
                          <p>No data</p>
                        )
                      }
                    />
                    <IconButton sx={{ p: 0 }}>
                      <ReportGmailerrorredIcon />
                    </IconButton>
                  </ListItem>
                </Box>
              ) : null
            )
          : null}
      </Stack>
    </Box>
  );
};

export default DefinationItem;
