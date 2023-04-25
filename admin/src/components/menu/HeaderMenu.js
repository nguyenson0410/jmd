import React, { useState, useEffect } from "react";

import { Link, useLocation } from "react-router-dom";

// import MUI componetns
import { styled, Box, Button } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";

// import Redux slice
import authSlice from "../../redux/slices/authSlice";

function HeaderMenu() {
  const dispatch = useDispatch();

  const role = useSelector((state) => state.auth.data.role);
  const MenuBox = styled(Box)({
    display: "flex",
  });
  const LoginBox = styled(Box)({
    display: "flex",
  });
  const LogoBox = styled(Box)({
    display: "flex",
    marginLeft: "8px",
  });

  const [path, setPath] = useState();

  // header menu handle
  const location = useLocation().pathname;
  useEffect(() => {
    setPath(location);
  }, [location]);

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      bgcolor="aqua"
      height="62px"
      sx={{
        background: "#eeeeee",
        position: "sticky",
        boxSizing: "border-box",
        boxShadow:
          "0px 2px 4px -1px rgba(0,0,0,0.2),0px 4px 5px 0px rgba(0,0,0,0.14),0px 1px 10px 0px rgba(0,0,0,0.12)",
      }}
    >
      <LogoBox>LOGO</LogoBox>
      <MenuBox>
        <Link to="/" style={{ textDecoration: "none" }}>
          <Button
            size="small"
            variant={path === "/" ? "contained" : "text"}
            color={path === "/" ? "primary" : "deactive"}
            sx={{ paddingLeft: "10px", paddingRight: "10px" }}
          >
            WORD
          </Button>
        </Link>
        <Link to="/user" style={{ textDecoration: "none" }}>
          <Button
            size="small"
            variant={path === "/user" ? "contained" : "text"}
            color={path === "/user" ? "primary" : "deactive"}
            sx={{ paddingLeft: "10px", paddingRight: "10px" }}
          >
            USER
          </Button>
        </Link>
        <Link to="/kanji" style={{ textDecoration: "none" }}>
          <Button
            size="small"
            variant={path === "/kanji" ? "contained" : "text"}
            color={path === "/kanji" ? "primary" : "deactive"}
            sx={{ paddingLeft: "10px", paddingRight: "10px" }}
          >
            KANJI
          </Button>
        </Link>
        <Link to="/sentence" style={{ textDecoration: "none" }}>
          <Button
            size="small"
            variant={path === "/sentence" ? "contained" : "text"}
            color={path === "/sentence" ? "primary" : "deactive"}
            sx={{ paddingLeft: "10px", paddingRight: "10px" }}
          >
            SENTENCE
          </Button>
        </Link>
        <Link to="inbox" style={{ textDecoration: "none" }}>
          <Button
            size="small"
            variant={path === "/inbox" ? "contained" : "text"}
            color={path === "/inbox" ? "primary" : "deactive"}
            sx={{ paddingLeft: "10px", paddingRight: "10px" }}
          >
            INBOX
          </Button>
        </Link>
      </MenuBox>
      {role === "admin" ? (
        <LoginBox>
          <Link to="login" style={{ textDecoration: "none" }}>
            <Button
              size="small"
              variant={path === "/login" ? "contained" : "text"}
              color={path === "/login" ? "primary" : "deactive"}
              sx={{ paddingLeft: "10px", paddingRight: "10px" }}
              onClick={() => {
                dispatch(authSlice.actions.logout());
              }}
            >
              LOGOUT
            </Button>
          </Link>
        </LoginBox>
      ) : (
        <LoginBox>
          <Link to="login" style={{ textDecoration: "none" }}>
            <Button
              size="small"
              variant={path === "/login" ? "contained" : "text"}
              color={path === "/login" ? "primary" : "deactive"}
              sx={{ paddingLeft: "10px", paddingRight: "10px" }}
            >
              LOGIN
            </Button>
          </Link>
        </LoginBox>
      )}
    </Box>
  );
}

export default HeaderMenu;
