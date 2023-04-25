import React from "react";

// import components

import LanguageFilter from "./components/LanguageFilter";
import Action from "./components/Action";
import Search from "./components/Search";
import Filter from "./components/Filter";

// import MUI components
import { Box, Stack } from "@mui/material";

function Submenu() {
  return (
    <Box>
      <Stack
        direction="row"
        spacing="10px"
        paddingLeft="5px"
        paddingRight="5px"
      >
        <LanguageFilter />
        <Action />
        <Search />
        <Filter />
      </Stack>
    </Box>
  );
}

export default Submenu;
