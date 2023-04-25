import React from "react";
import { useState } from "react";

// import MUI components
import { Box, InputAdornment, IconButton, OutlinedInput } from "@mui/material";

import { Search as SearchIcon } from "@mui/icons-material";

// import Redux components
import { useDispatch } from "react-redux";

function Search({ callback }) {
  const dispatch = useDispatch();
  const [query, setQuery] = useState("");
  const inputChangeHandle = (e) => {
    setQuery(e.target.value);
  };

  return (
    <Box pr="10px">
      <OutlinedInput
        
        placeholder="検索......"
        sx={{ ml: 2, height: "30px" }}
        size="small"
        variant="outlined"
        onChange={inputChangeHandle}
        value={query}
        name="search"
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              onClick={() => {
                callback(query);
              }}
              sx={{ paddingTop: "0px", paddingBottom: "0px" }}
            >
              <SearchIcon color="error" />
            </IconButton>
          </InputAdornment>
        }
      />
    </Box>
  );
}

export default Search;
