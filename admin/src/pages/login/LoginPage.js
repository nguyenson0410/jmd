import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Box, Stack, Button, Grid } from "@mui/material";
import { UserFormDataText, UserFormDataPassword } from "../../styled/formInput";

import { loginRequest } from "../../redux/slices/authSlice";

function LoginPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLogined = useSelector((state) => state.auth.mode.isLoginng);
  const isAdmin = useSelector((state) => state.auth.data.role);
  const [input, setInput] = useState({
    username: "",
    password: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginRequest(input));
  };
  if (isLogined === true && isAdmin === "admin") {
    return navigate("/");
  }
  return (
    <Box minHeight="86.5vh">
      <Stack
        direction="column"
        justifyContent="center"
        alignItems="center"
        spacing="20px"
      >
        <Stack direction="column" spacing="20px" mt="56.5px">
          <UserFormDataText
            title="Username"
            name="username"
            data={input.username}
            callback={handleChange}
            isEditting={true}
          />
          <UserFormDataPassword
            title="Password"
            name="password"
            data={input.password}
            callback={handleChange}
            isEditting={true}
          />
        </Stack>
        <Stack width="445px" justifyContent="end" direction="row">
          <Button onClick={handleSubmit}>Submit</Button>
        </Stack>
      </Stack>
    </Box>
  );
}

export default LoginPage;
