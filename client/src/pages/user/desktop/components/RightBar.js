import React from "react";
import { Box, Stack } from "@mui/material";

// import components
import Banner from "../../../../components/banner/Banner";
import WordList from "../../../../components/wordList/WordList";
import QuickSearch from "./quickSearch/QuickSearch";

const RightBar = () => {
  return (
    <Box flex={3} pr="5px" pt="10px" pb="10px">
      <Stack direction="column" spacing={"10px"}>
        <Banner />
        <Box>
          <Stack direction="row" spacing={"10px"}>
            <WordList />
            {/* <QuickSearch /> */}
          </Stack>
        </Box>
      </Stack>
    </Box>
  );
};

export default RightBar;
