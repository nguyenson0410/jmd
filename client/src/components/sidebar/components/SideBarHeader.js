import React from "react";
import { Box, Stack, Typography, Avatar, Badge, Icon } from "@mui/material";
import defaultAvatar from "../../../img/defaultAvartar.jpg";

function SideBarHeader() {
  return (
    <Box height="150px" padding="20px">
      <Stack direction="column" spacing="10px" justifyContent="center">
        <Box>
          <Stack direction="row" spacing={3}>
            <Box>
              <Avatar src={defaultAvatar} sx={{ width: 56, height: 56 }} />
            </Box>
            <Box>
              <Typography
                variant="h6"
                sx={{ fontWeight: 400, color: "#666666" }}
              >
                Nguyễn Văn A
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: "#F74545",
                  textShadow: "0px 4px 4px rgba(0,0,0,0.25)",
                }}
              >
                <i>"Make A Miracle"</i>
              </Typography>
            </Box>
          </Stack>
        </Box>
        <Box sx={{ pt: "15px" }}>
          <Typography variant="body2" sx={{ color: "#666666" }}>
            Achievement:
          </Typography>

          <Typography variant="body2" sx={{ color: "#666666" }}>
            Award:
          </Typography>

          <Typography variant="body2" sx={{ color: "#666666" }}>
            Role:
          </Typography>
        </Box>
      </Stack>
    </Box>
  );
}

export default SideBarHeader;
