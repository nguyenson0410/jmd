import React from "react";
import { Box } from "@mui/material";

//import component
import Sidebar from "../../../../components/sidebar/Sidebar";

const LeftBar = () => {
  return (
    <Box flex={1} pt="10px" pb="10px">
      <Sidebar />
    </Box>
  );
};

export default LeftBar;
