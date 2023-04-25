import React from "react";
import { Box, Typography, Stack, IconButton } from "@mui/material";
import {
  Replay as ReplayIcon,
  Cancel as CancelIcon,
} from "@mui/icons-material";

const KanjiDraw = () => {
  return (
    <Box
      sx={{
        height: { xs: "191px", sm: "191px", md: "235px", lg: "191px" },
        display: "flex",
        borderRadius: "5px",
        alignItems: "center",
      }}
    >
      <Box flex={12}>
        <Stack direction="row" justifyContent="center">
          <Typography variant="h1" color="#C4C4C4">
            日本語
          </Typography>
        </Stack>
      </Box>
      <Box flex={2}>
        <Stack direction="column" spacing={3}>
          <IconButton>
            <ReplayIcon fontSize="large" />
          </IconButton>
          <IconButton>
            <CancelIcon fontSize="large" color="error" />
          </IconButton>
        </Stack>
      </Box>
    </Box>
  );
};

export default KanjiDraw;
