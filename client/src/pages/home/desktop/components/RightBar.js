import { Box, Stack } from "@mui/system";
import React from "react";

// import component
import KanjiSearchBar from "../../../../components/search/kanijiSearch/KanjiSearchBar";

import Kanji from "../../../../components/search/kanijiSearch/Kanji";
import KanjiDraw from "../../../../components/search/kanijiSearch/KanjiDraw";
import Comment from "../../../.../../../components/search/wordSearch/Comment";

const RightBar = () => {
  return (
    <Box flex={1} pl="5px" pt="10px" pb="10px">
      <Stack direction="column" spacing={"10px"}>
        <KanjiSearchBar />
        <KanjiDraw />
        <Kanji />
        <Comment />
      </Stack>
    </Box>
  );
};

export default RightBar;
