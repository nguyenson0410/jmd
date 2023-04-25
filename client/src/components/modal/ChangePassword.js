import Reac, { useState, useEffect } from "react";

// import Apis
import { changePasswordApi } from "../../apis/auth";

// import Redux
import { useSelector } from "react-redux";

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
import { useResolvedPath } from "react-router-dom";

function ChangePassword({ close }) {
  const username = useSelector((state) => state.login.user.username);

  const [input, setInput] = useState({
    username: username,
    oldPassword: "",
    newPassword: "",
    repeatPassword: "",
  });
  const [error, setError] = useState(false);
  const [message, setMessage] = useState("");

  const changeHandle = (e) => {
    setError(false);
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  //   useEffect(() => {
  //     setInput({ ...input, username: username });
  //   }, []);

  const handleChangePassword = async () => {
    if (input.newPassword !== input.repeatPassword) {
      setError(true);
      setMessage("Repeat Password Not Match!");
      return;
    }
    const response = await changePasswordApi({
      username: input.username,
      oldPassword: input.oldPassword,
      newPassword: input.newPassword,
    });

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
        Change Password
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
          value={input.username}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          name="oldPassword"
          label="Old Password"
          type="password"
          id="oldPassword"
          autoComplete="password"
          onChange={changeHandle}
          error={!input.oldPassword ? true : false}
          helperText={!input.oldPassword ? "Old Password Is Required!" : null}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          name="newPassword"
          label="New Password"
          type="password"
          id="newPassword"
          autoComplete="password"
          onChange={changeHandle}
          error={!input.newPassword ? true : false}
          helperText={!input.newPassword ? "New Password Is Required!" : null}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          name="repeatPassword"
          label="Repeat Password"
          type="password"
          id="repeatPassword"
          autoComplete="password"
          onChange={changeHandle}
          error={!input.repeatPassword ? true : false}
          helperText={
            !input.repeatPassword ? "Repeat Password Is Required!" : null
          }
        />

        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
          onClick={handleChangePassword}
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

export default ChangePassword;
