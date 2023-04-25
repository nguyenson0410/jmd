import React from "react";
import { useState, useEffect } from "react";

// import Redux
import { useDispatch, useSelector } from "react-redux";
import { searchCommentRequest } from "../../../redux/slices/commentSlice";

// import MUI components
import {
  Box,
  Typography,
  Stack,
  IconButton,
  Fab,
  Pagination,
  Modal,
  Button,
} from "@mui/material";
import {
  OpenWith as OpenWithIcon,
  ZoomOutMap as ZoomOutMapIcon,
  AddCircleOutline as AddCircleOutlineIcon,
  Close as CloseIcon,
  Send as SendIcon,
} from "@mui/icons-material";

import axios from "axios";

// import React component
import CommentItem from "./CommentItem";
import AddComment from "../../modal/AddComment";
import { TitleItalic } from "../../../styled/text";

const Comment = () => {
  const comment = useSelector((state) => state.comment.data);
  const user = useSelector((state) => state.login.user);
  const wordId = useSelector((state) => state.word.data._id);
  const dispatch = useDispatch();

  // model handler
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    dispatch(searchCommentRequest(wordId));
  }, [wordId]);

  return (
    <Box
      sx={{ height: "296px", border: "1px solid #D9D9D9", borderRadius: "5px" }}
    >
      <Stack direction="column">
        <Box>
          <Stack direction="row" justifyContent="space-between" p="10px">
            <TitleItalic text="Comment" />
            <IconButton sx={{ p: "8px 8px 8px 8px" }}>
              <ZoomOutMapIcon fontSize="small" />
            </IconButton>
          </Stack>
        </Box>
        {comment.length !== 0 ? (
          <>
            <CommentItem comment={comment} />
            <Box>
              <Stack direction="row" justifyContent="space-evenly">
                <Pagination count={3} color="primary" />
                
              </Stack>
            </Box>
          </>
        ) : null}
        <IconButton size="small" color="primary" onClick={handleOpen}>
          {user.username ? (
            wordId ? (
              <AddCircleOutlineIcon />
            ) : null
          ) : (
            "Login To Comment !"
          )}
        </IconButton>
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
            <AddComment wordId={wordId} />
            <Stack direction="row" justifyContent="flex-end">
              <IconButton onClick={handleClose}>
                <CloseIcon color="error" />
              </IconButton>
            </Stack>
          </Box>
        </Modal>
      </Stack>
    </Box>
  );
};

export default Comment;
