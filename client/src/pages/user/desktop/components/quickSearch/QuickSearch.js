import React from "react";
import { Box } from "@mui/material";
import { Stack } from "@mui/system";
import WordSearchBar from "../../../../../components/search/wordSearch/WordSearchBar";
import Suggestion from "../../../../../components/search/wordSearch/Suggestion";
import DefinationNarrow from "../../../../../components/search/wordSearch/DefinationNarrow";

const QuickSearch = () => {
  return (
    <Box flex={2}>
      <Stack direction="column" spacing="10px">
        <WordSearchBar />
        <Suggestion />
        <DefinationNarrow />
      </Stack>
    </Box>
  );
};

export default QuickSearch;
