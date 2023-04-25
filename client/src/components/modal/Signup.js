import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

// import Redux slice
import { loginRequest } from "../../redux/slices/loginSlice";

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

function Signup({ close, haveAccount }) {
  const [input, setInput] = useState({
    username: "",
    email: "",
    primaryLanguage: "",
  });
  const [isSuccess, setIsSuccess] = useState(false);
  const dispatch = useDispatch();

  const changeHandle = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const registerHandle = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:5000/api/auth/register",
        input
      );

      console.log(res.data);
    } catch (error) {
      console.log(error);
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
      {isSuccess ? (
        <Typography variant="h5" component="h1" align="center">
          Register success ! Please check your email!
        </Typography>
      ) : (
        <>
          <Typography variant="h5" component="h1" align="center">
            Register
          </Typography>
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
              id="email"
              label="Email"
              name="email"
              autoComplete="email"
              onChange={changeHandle}
              error={!input.email ? true : false}
              helperText={!input.email ? "Email Is Required!" : null}
            />

            <TextField
              margin="normal"
              required
              fullWidth
              name="primaryLanguage"
              label="Primary Language"
              id="primaryLanguage"
              onChange={changeHandle}
              error={!input.primaryLanguage ? true : false}
              helperText={
                !input.primaryLanguage ? "Primary Language Is Required!" : null
              }
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={registerHandle}
            >
              Register
            </Button>
            <Grid container spacing="30px">
              <Grid item xs>
                <Link href="#" variant="body2" onClick={haveAccount}>
                  Have an account? Login !
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

export default Signup;
