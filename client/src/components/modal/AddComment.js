import React, { useState } from "react";

import axios from "axios";

// import MUI components
import { Box, TextField, Button } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";

// import Redux slices
import { addCommentRequest } from "../../redux/slices/commentSlice";

const AddComment = ({ wordId }) => {
  const dispatch = useDispatch();
  const [comment, setComment] = useState({ text: "" });
  const handleChange = (e) => {
    setComment({
      text: e.target.value,
    });
  };
  const addCommentHandle = () => {
    dispatch(addCommentRequest({ wordId: wordId, text: comment }));

    
  };
  return (
    <Box component="form">
      <TextField
        margin="normal"
        required
        fullWidth
        label="Your Comment"
        name="comment"
        onChange={handleChange}
      />

      <Button fullWidth variant="contained" onClick={addCommentHandle}>
        Add
      </Button>
    </Box>
  );
};

export default AddComment;
