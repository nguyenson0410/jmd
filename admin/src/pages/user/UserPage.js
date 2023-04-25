import React from "react";
import { Box, Stack } from "@mui/material";
import Layout from "../../components/user/layout/Layout";

function UserPage() {
  return (
    <Box minHeight="86.5vh">
      <Stack direction="column" spacing="20px">
        <Layout />
      </Stack>
    </Box>
  );
}

export default UserPage;
