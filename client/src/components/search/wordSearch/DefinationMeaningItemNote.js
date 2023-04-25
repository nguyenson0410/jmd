import React, { useState, useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";

// import MUI components
import { InputBase, IconButton } from "@mui/material";
import { Create as CreateIcon } from "@mui/icons-material";

const DefinationMeaningItemNote = () => {
  const [input, setInput] = useState("Add a new note for this word...");

  // read Redux state
  const defination = useSelector((state) => state.searchWord.defination);
  let wordId = defination[0] ? defination[0]._id : null;

  useEffect(() => {
    const fetchData = async (wordId) => {
      const res = await axios.get(
        `http://localhost:5000/api/note/noteByWord/${wordId}`,
        {
          withCredentials: true,
        }
      );
      setInput(res.data.text);
      console.log(res.data.text);
    };
    // fetch data
    fetchData(wordId);
  }, [wordId]);
  return (
    <>
      <IconButton>
        <CreateIcon />
      </IconButton>
      <InputBase
        sx={{ width: "80%", color: "#666666", fontSize: "12px" }}
        value={input}
      />
    </>
  );
};

export default DefinationMeaningItemNote;
