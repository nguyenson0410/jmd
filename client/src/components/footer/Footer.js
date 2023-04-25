import { Box, Stack, Container, Typography, IconButton } from "@mui/material";
import React from "react";
import { useState } from "react";
import {
  ExpandMore as ExpandMoreIcon,
  ExpandLess as ExpandLessIcon,
} from "@mui/icons-material";

// import components
import ContactUs from "../form/ContactUs";

const Footer = () => {
  const [show, setShow] = useState(true);
  const handleClick = () => {
    setShow(!show);
  };
  return (
    <Box sx={{ bgcolor: "#f0f0f0" }}>
      <Box p="0" bgcolor="#f0f0f0" sx={{ height: "24px" }}>
        <Container>
          <Stack direction="row" justifyContent="center">
            <IconButton
              size="small"
              sx={{ p: 0, color: "white" }}
              onClick={handleClick}
            >
              {show ? (
                <ExpandMoreIcon color="primary" />
              ) : (
                <ExpandLessIcon color="primary" />
              )}
            </IconButton>
          </Stack>
        </Container>
      </Box>
      <Box hidden={show}>
        <Container maxWidth="lg">
          <Stack
            direction={{ xs: "column", sm: "column", md: "row", lg: "row" }}
            justifyContent="space-between"
          >
            <ContactUs />

            <Box color="white" width="300px">
              <Stack direction="column" spacing={1}>
                <Typography variant="h6" textAlign="center" color="black">
                  Sitemap{" "}
                </Typography>
                <Typography variant="body1" color="grey" textAlign="center">
                  All our pages
                </Typography>
                <Typography variant="body2" color="grey" textAlign="center">
                  Home
                </Typography>
                <Typography variant="body2" color="grey" textAlign="center">
                  User
                </Typography>
                <Typography variant="body2" color="grey" textAlign="center">
                  Community
                </Typography>
                <Typography variant="body2" color="grey" textAlign="center">
                  License
                </Typography>
              </Stack>
            </Box>
            <Box color="black" width="300px">
              <Typography variant="h6" textAlign="end">
                LOGO
              </Typography>
            </Box>
          </Stack>
        </Container>
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
      </Box>
    </Box>
  );
};

export default Footer;
