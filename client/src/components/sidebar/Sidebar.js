import React from "react";
import { Box, Stack } from "@mui/material";

// import components
import SideBarHeader from "./components/SideBarHeader";
import SideBarMenu from "./components/SideBarMenu";
import { Height } from "@mui/icons-material";
import Calendar from "../calendar/Calendar";

const Sidebar = () => {
  return (
    <Box
      sx={{
        border: "1px solid #D9D9D9",
        borderRadius: "5px",
        height: "723.5px",
      }}
    >
      <Stack direction="column">
        <SideBarHeader />
        <SideBarMenu />
        <Calendar />
      </Stack>
    </Box>
  );
};

export default Sidebar;
