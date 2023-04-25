import React from "react";
import { useEffect } from "react";
import { Box, Stack } from "@mui/system";
import { Container } from "@mui/material";

// import component
import LeftBar from "../desktop/components/LeftBar";
import RightBar from "../desktop/components/RightBar";

const Desktop = () => {
  return (
    <Box>
      <Container maxWidth="lg">
        <Stack direction={{ xs: "column", sm: "column", md: "row" }}>
          <LeftBar />
          <RightBar />
        </Stack>
      </Container>
    </Box>
  );
};

export default Desktop;
