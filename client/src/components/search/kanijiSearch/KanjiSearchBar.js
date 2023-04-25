import { Button, Box, InputBase } from "@mui/material";
import React from "react";

const KanjiSearchBar = () => {
  return (
    <Box
      display="flex"
      bgcolor="white"
      borderRadius="5px"
      border="solid 1px"
      justifyContent="space-between"
    >
      <Box>
        <InputBase placeholder="漢字" sx={{ ml: 2, mt: "6px" }} />
      </Box>

      <Box>
        <Button>Select</Button>
      </Box>
    </Box>
  );
};

export default KanjiSearchBar;
