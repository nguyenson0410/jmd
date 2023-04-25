import React from "react";
import { Box } from "@mui/material";
import banner2 from "../../img/banner/banner2.jpg";

const Banner = () => {
  return (
    <Box
      sx={{
        height: "200px",
        borderRadius: "5px",
      }}
    >
      <img
        src={banner2}
        height="200px"
        width="850px"
        style={{ objectFit: "contain " }}
      />
    </Box>
  );
};

export default Banner;
