import React from "react";

// import MUI components
import { Box, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box bgcolor="#777777" height="30px" marginTop="10px">
      <Typography
        variant="body2"
        color="white"
        align="center"
        gutterBottom
        paddingTop="4px"
      >
        Copyright 2023 All Rights Reserved example.com
      </Typography>
    </Box>
  );
};

export default Footer;
