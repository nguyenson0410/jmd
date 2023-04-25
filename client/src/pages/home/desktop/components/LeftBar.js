import { Box } from "@mui/system";
import React from "react";

// import components

import WordSearchBar from "../../../../components/search/wordSearch/WordSearchBar";
import ConditionBar from "../../../../components/search/wordSearch/ConditionBar";
import Suggestion from "../../../../components/search/wordSearch/Suggestion";
import Defination from "../../../../components/search/wordSearch/Defination";
import { Stack } from "@mui/material";

const LeftBar = () => {
  return (
    <Box flex={1} pr="5px" pt="10px" pb="10px">
      <Stack direction="column" spacing={"10px"}>
        <WordSearchBar />
        <ConditionBar />
        <Suggestion />
        <Defination />
      </Stack>
    </Box>
  );
};

export default LeftBar;
