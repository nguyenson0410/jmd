import React from "react";
import { useState } from "react";

// import Apis
import { forgotPasswordApi } from "../../apis/auth";

// import MUI components
import {
  Box,
  Typography,
  Button,
  TextField,
  FormControl,
  Grid,
  Link,
  Stack,
} from "@mui/material";

function ForgotPassword({ close }) {
  const [input, setInput] = useState({
    username: "",
    email: "",
  });

  const [error, setError] = useState(false);
  const [message, setMessage] = useState("");

  const changeHandle = (e) => {
    setError(false);
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleForgotPassword = async () => {
    const response = await forgotPasswordApi(input);
    if (response.error) {
      setError(response.error);
      setMessage(response.message);
    } else {
      close();
    }
  };

  return (
    <Box
      sx={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",

        bgcolor: "background.paper",
        border: "1x solid #000",
        boxShadow: 24,
        p: 4,
      }}
    >
      <Typography variant="h5" component="h1" align="center">
        Reset Password
      </Typography>
      {error ? (
        <Typography variant="subtitle2" color="error">
          {message}
        </Typography>
      ) : null}

      <FormControl>
        <TextField
          margin="normal"
          required
          fullWidth
          id="username"
          label="Username"
          name="username"
          autoComplete="username"
          onChange={changeHandle}
          error={!input.username ? true : false}
          helperText={!input.username ? "Username Is Required!" : null}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          name="email"
          label="Email"
          type="email"
          id="email"
          autoComplete="email"
          onChange={changeHandle}
          error={!input.email ? true : false}
          helperText={!input.email ? "Email Is Required!" : null}
        />

        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
          onClick={handleForgotPassword}
        >
          SEND
        </Button>
      </FormControl>
      <Stack direction="row" justifyContent="flex-end">
        <Button color="error" onClick={close}>
          Close
        </Button>
      </Stack>
    </Box>
  );
}

export default ForgotPassword;
