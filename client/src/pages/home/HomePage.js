import React, { useLayoutEffect } from "react";
import { useEffect } from "react";
import { Box, Stack } from "@mui/system";
import { Container } from "@mui/material";

// import component
import Desktop from "./desktop/Desktop";

const HomePage = () => {
  useEffect(() => {
    document.title = "Homepage";
  }, []);

  return <Desktop />;
};

export default HomePage;
