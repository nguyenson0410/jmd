import React from "react";
import { Box, Stack } from "@mui/material";

// import React components
import Layout from "../../components/word/layouts/Layout";

function WordPage() {
  return (
    <Box minHeight="86.5vh">
      <Stack direction="column" spacing={2}>
        <Layout />
      </Stack>
    </Box>
  );
}

export default WordPage;
