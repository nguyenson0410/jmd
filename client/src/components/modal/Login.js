import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

// import Redux slice
import { loginRequest } from "../../redux/slices/loginSlice";

// import MUI components
import {
  Box,
  Typography,
  Button,
  TextField,
  Checkbox,
  FormControlLabel,
  Grid,
  Link,
  FormControl,
  Stack,
} from "@mui/material";

function Login({ close, forgotPass, signUp }) {
  const [input, setInput] = useState({
    username: "",
    password: "",
  });

  const login = useSelector((state) => state.login);

  const dispatch = useDispatch();

  const changeHandle = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleLogin = (event) => {
    event.preventDefault();
    dispatch(loginRequest(input));
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
      {login.user.username ? (
        <Typography variant="h5" component="h1" align="center">
          Wellcome back {login.user.username} !
        </Typography>
      ) : (
        <>
          <Typography variant="h5" component="h1" align="center">
            Login
          </Typography>

          {login.error ? (
            <Typography variant="subtitle2" color="error">
              {login.message}
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
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={changeHandle}
              error={!input.password ? true : false}
              helperText={
                !input.password
                  ? "Password Is Required!"
                  : "Do Not Share Your Password!"
              }
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={handleLogin}
            >
              LOGIN
            </Button>
            <Grid container spacing="30px">
              <Grid item xs>
                <Link href="#" variant="body2" onClick={forgotPass}>
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2" onClick={signUp}>
                  Don't have an account? Sign Up!
                </Link>
              </Grid>
            </Grid>
          </FormControl>
        </>
      )}
      <Stack direction="row" justifyContent="flex-end">
        <Button color="error" onClick={close}>
          Close
        </Button>
      </Stack>
    </Box>
  );
}

export default Login;
