import React from "react";
import {
  Box,
  Button,
  FormGroup,
  FormControlLabel,
  Switch,
  styled,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { Stack } from "@mui/system";

const ConditionBar = () => {
  const MySwitch = styled(Switch)(({ theme }) => ({
    padding: 8,
    "& .MuiSwitch-track": {
      borderRadius: 22 / 2,
      "&:before, &:after": {
        content: '""',
        position: "absolute",
        top: "50%",
        transform: "translateY(-50%)",
        width: 16,
        height: 16,
      },
      "&:before": {
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 24 24"><path fill="${encodeURIComponent(
          theme.palette.getContrastText(theme.palette.primary.main)
        )}" d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"/></svg>')`,
        left: 12,
      },
      "&:after": {
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 24 24"><path fill="${encodeURIComponent(
          theme.palette.getContrastText(theme.palette.primary.main)
        )}" d="M19,13H5V11H19V13Z" /></svg>')`,
        right: 12,
      },
    },
    "& .MuiSwitch-thumb": {
      boxShadow: "none",
      width: 16,
      height: 16,
      margin: 2,
    },
  }));
  const theme = useTheme();

  return (
    <Box>
      <Stack
        display="flex"
        direction={{ xs: "column", sm: "row", md: "column", lg: "row" }}
        spacing={1}
        justifyContent="space-around"
      >
        <Box>
          <Stack direction={"row"} pt={0.5} justifyContent="space-between">
            <Button size="small" variant="contained">
              Words
            </Button>
            <Button disabled size="small" variant="text">
              Kanji
            </Button>
            <Button disabled size="small" variant="text">
              Sentences
            </Button>
          </Stack>
        </Box>
        <Box>
          <FormGroup row sx={{ justifyContent: "space-between" }}>
            <FormControlLabel
              control={<MySwitch defaultChecked />}
              label="Noun"
              sx={{ m: 0, p: 0 }}
            />
            <FormControlLabel
              control={<MySwitch defaultChecked />}
              label="Verb"
              sx={{ m: 0, p: 0 }}
            />
            <FormControlLabel
              control={<MySwitch defaultChecked />}
              label="Adj"
              sx={{ m: 0, p: 0 }}
            />
          </FormGroup>
        </Box>
      </Stack>
    </Box>
  );
};

export default ConditionBar;
