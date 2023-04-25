import { Typography } from "@mui/material";

export const TitleItalic = ({ text }) => {
  return (
    <Typography
      sx={{
        fontStyle: "italic",
        fontWeight: 200,
        textDecorationLine: "underline",
        color: "#333333",
        textShadow: "0px 4px 4px rgba(0,0,0,0.25)",
      }}
    >
      {text}
    </Typography>
  );
};
