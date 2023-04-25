import React from "react";

// import MUI components
import {
  Box,
  Divider,
  IconButton,
  Stack,
  Typography,
  Modal,
  InputBase,
  Button,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Checkbox,
  TextField,
} from "@mui/material";
import {
  AddCircle as AddCircleIcon,
  Add as AddIcon,
} from "@mui/icons-material";
import { useState } from "react";

//import components
import LeftBar from "./components/LeftBar";
import RightBar from "./components/RightBar";
import AddWordlist from "../modal/AddWordlist";
import axios from "axios";

const WordList = () => {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleChange = (e) => {
    console.log(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:5000/api/wordlist/create/", {
      listName: input,
    });
  };

  return (
    <Box flex={3}>
      <Stack direction="column" spacing="19px">
        <Box>
          <Box pt="9px">
            <Stack direction="row" justifyContent="space-between">
              <Typography
                sx={{
                  display: "inline",
                  fontStyle: "italic",
                  fontWeight: 200,
                  textDecorationLine: "underline",
                  color: "#333333",
                  textShadow: "0px 4px 4px rgba(0,0,0,0.25)",
                  ml: "45px",
                }}
              >
                Wordlist
              </Typography>
              <Button
                startIcon={<AddIcon fontSize="small" />}
                variant="outlined"
                size="small"
                onClick={handleOpen}
                sx={{ pb: 0, pt: 0, mr: "45px" }}
              >
                {" "}
                Add New
              </Button>
            </Stack>
          </Box>
          <Modal open={open} onClose={handleClose}>
            <Box
              sx={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                width: 400,
                bgcolor: "background.paper",
                border: "1x solid #000",
                boxShadow: 24,
                p: 4,
              }}
            >
              <Typography variant="h6" component="h2" align="center">
                Create New WordList
              </Typography>
              <TextField
                margin="normal"
                required
                fullWidth
                label="Wordlist Name"
                name="worlist"
                onChange={handleChange}
              />
              <Stack direction="row" justifyContent="flex-end">
                <Button onClick={handleSubmit}>Create</Button>
                <Button color="error" onClick={handleClose}>
                  Cancel
                </Button>
              </Stack>
            </Box>
          </Modal>
        </Box>

        <Box>
          <Stack direction="row" spacing={1}>
            <LeftBar />

            <RightBar />
          </Stack>
        </Box>
      </Stack>
    </Box>
  );
};

export default WordList;
