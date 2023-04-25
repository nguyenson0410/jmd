import { Button, InputBase, TextField, Typography } from "@mui/material";
import { Box, Stack } from "@mui/system";
import React from "react";

const ContactUs = () => {
  return (
    <Box color="white" width="300px">
      <Stack direction="column" spacing={1}>
        <Typography color="black" variant="h6">Contact Us</Typography>

        <Typography variant="body1" color="whitesmoke">
          Send us a message
        </Typography>

        <Box bgcolor="white">
          <TextField fullWidth placeholder="Your Name" size="small" />
        </Box>
        <Box bgcolor="white">
          <TextField fullWidth placeholder="Your Email" size="small" />
        </Box>
        <Box bgcolor="white">
          <TextField
            multiline
            fullWidth
            rows={4}
            placeholder="Your Message"
            size="small"
          />
        </Box>
        <Button variant="contained" color="primary">
          Send
        </Button>
      </Stack>
    </Box>
  );
};

export default ContactUs;
