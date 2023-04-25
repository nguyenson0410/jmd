import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

// import Redux slice
import wordSlice, { searchWordRequest } from "../../../redux/slices/wordSlice";
import { suggestionRequest } from "../../../redux/slices/suggestionSlice";

// import mui components
import {
  Box,
  IconButton,
  InputBase,
  Modal,
  OutlinedInput,
} from "@mui/material";
import { History, Search, Close as CloseIcon } from "@mui/icons-material";

// import components
import SearchHistoryModal from "../../modal/SearchHistoryModal";
import { Stack } from "@mui/system";

function WordSearchBar() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const dispatch = useDispatch();

  const inputChangeHandle = (e) => {
    setQuery(e.target.value);
  };
  const handleSearch = () => {
    
    dispatch(searchWordRequest(query));
    dispatch(suggestionRequest(query));
  };

  return (
    <Box
      display="flex"
      bgcolor="white"
      borderRadius="5px"
      border="solid 1px"
      justifyContent="space-between"
    >
      <Box flex={5}>
        <InputBase
          placeholder="検索......"
          sx={{ ml: 2, mt: "6px" }}
          onChange={inputChangeHandle}
          fullWidth
        />
      </Box>

      <Box flex={1}>
        <IconButton onClick={handleOpen}>
          <History />
        </IconButton>
        |
        <IconButton onClick={handleSearch}>
          <Search />
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
          <SearchHistoryModal />
          <Stack direction="row" justifyContent="flex-end">
            <IconButton onClick={handleClose}>
              <CloseIcon color="error" />
            </IconButton>
          </Stack>
        </Box>
      </Modal>
    </Box>
  );
}

export default WordSearchBar;
