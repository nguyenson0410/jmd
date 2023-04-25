import React from "react";
import { Box, Container, Stack } from "@mui/material";

// import components
import LeftBar from "./components/LeftBar";
import RightBar from "./components/RightBar";

const Desktop = () => {
  return (
    <Box>
      {" "}
      <Container maxWidth="lg">
        <Stack
          direction={{ xs: "column", sm: "column", md: "row" }}
          spacing="10px"
        >
          <LeftBar />
          <RightBar />
        </Stack>
      </Container>
    </Box>
  );
};

export default Desktop;
