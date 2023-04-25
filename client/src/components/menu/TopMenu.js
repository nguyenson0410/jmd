// export default TopMenu;
import React, { useEffect } from "react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

// import MUI componetns
import {
  Toolbar,
  styled,
  AppBar,
  Box,
  Container,
  Button,
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Modal,
} from "@mui/material";

import { Menu as MenuIcon, Close as CloseIcon } from "@mui/icons-material";

// import React components

import Login from "../modal/Login";
import Signup from "../modal/Signup";
import ForgotPassword from "../modal/ForgotPassword";
import ChangePassword from "../modal/ChangePassword";

// import Redux
import { useSelector, useDispatch } from "react-redux";
import { loginSlice } from "../../redux/slices/loginSlice";

const TopMenu = () => {
  const dispatch = useDispatch();
  const logoutHandle = () => {
    dispatch(loginSlice.actions.logout());
  };

  const StyledToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between",
  });
  const MenuBox = styled(Box)({
    display: "flex",
  });
  const LoginBox = styled(Box)({
    display: "flex",
  });

  const [path, setPath] = useState();
  const [openSideMenu, setOpenSideMenu] = useState(false);
  const [open, setOpen] = useState(false);
  const pages = [
    { title: "HOME", path: "/" },
    { title: "USER", path: "/user" },
    { title: "COMMUNITY", path: "/community" },
    { title: "ABOUT", path: "/about" },
  ];

  // login
  const login = useSelector((state) => state.login);
  const [openLogin, setOpenLogin] = useState(false);
  const [openSignup, setOpenSignup] = useState(false);
  const [openForgotPassword, setOpenForgotPassword] = useState(false);
  const [openChangePassword, setOpenChangePassword] = useState(false);

  const handleOpenLogin = () => setOpenLogin(true);
  const handleOpenSignup = () => setOpenSignup(true);
  const handleOpenForgotPassword = () => setOpenForgotPassword(true);
  const handleOpenChangePassword = () => setOpenChangePassword(true);

  const loginClose = () => {
    setOpenLogin(false);
  };
  const signupClose = () => {
    setOpenSignup(false);
  };
  const forgotPasswordClose = () => {
    setOpenForgotPassword(false);
  };
  const changePasswordClose = () => {
    setOpenChangePassword(false);
  };

  const forgotPass = () => {
    setOpenLogin(false);
    setOpenForgotPassword(true);
  };
  const haveAccount = () => {
    setOpenSignup(false);
    setOpenLogin(true);
  };
  const signUp = () => {
    setOpenLogin(false);
    setOpenSignup(true);
  };
  // header menu handle
  const location = useLocation().pathname;
  useEffect(() => {
    setPath(location);
  }, [location]);

  return (
    <Box>
      <AppBar sx={{ background: "#eeeeee", height: "62px" }} position="sticky">
        <Container maxWidth="lg" display="flex">
          <StyledToolbar>
            <Box color="black">LOGO</Box>

            <MenuBox sx={{ display: { xs: "none", sm: "flex", md: "flex" } }}>
              {pages.map((item, index) => {
                return (
                  <Link
                    to={item.path}
                    style={{ textDecoration: "none" }}
                    key={index}
                  >
                    <Button
                      size="small"
                      variant={path === item.path ? "contained" : "text"}
                      color={path === item.path ? "primary" : "deactive"}
                      sx={{ paddingLeft: "10px", paddingRight: "10px" }}
                    >
                      {item.title}
                    </Button>
                  </Link>
                );
              })}
            </MenuBox>

            <LoginBox sx={{ display: { xs: "none", sm: "flex", md: "flex" } }}>
              {login.user.username ? (
                <>
                  <Button
                    size="small"
                    variant="text"
                    color="error"
                    sx={{ paddingLeft: "10px", paddingRight: "10px" }}
                  >
                    {login.user.username}
                  </Button>
                  <Button onClick={handleOpenChangePassword}>
                    Change Password
                  </Button>
                </>
              ) : (
                <Button size="small" onClick={handleOpenLogin}>
                  LOGIN
                </Button>
              )}

              {login.user.username ? (
                <Button
                  size="small"
                  sx={{ paddingLeft: "10px", paddingRight: "10px" }}
                  onClick={logoutHandle}
                >
                  LOGOUT
                </Button>
              ) : (
                <Button size="small" onClick={handleOpenSignup}>
                  REGISTER
                </Button>
              )}
            </LoginBox>

            <MenuIcon
              sx={{
                color: "black",
                display: { xs: "block", sm: "none", md: "none" },
              }}
              onClick={() => setOpenSideMenu(!openSideMenu)}
            />
          </StyledToolbar>
        </Container>
      </AppBar>

      <Drawer open={openSideMenu} onClose={() => setOpenSideMenu(false)}>
        <List>
          {pages.map((item, index) => {
            return (
              <ListItemButton key={index}>
                <ListItemIcon>
                  <ListItemText>
                    <Link to={item.path} style={{ textDecoration: "none" }}>
                      {item.title}
                    </Link>
                  </ListItemText>
                </ListItemIcon>
              </ListItemButton>
            );
          })}
        </List>
      </Drawer>
      <Modal open={openLogin} onClose={loginClose}>
        <Box>
          <Login close={loginClose} forgotPass={forgotPass} signUp={signUp} />
        </Box>
      </Modal>
      <Modal open={openSignup} onClose={signupClose}>
        <Box>
          <Signup close={signupClose} haveAccount={haveAccount} />
        </Box>
      </Modal>
      <Modal open={openForgotPassword} onClose={forgotPasswordClose}>
        <Box>
          <ForgotPassword close={forgotPasswordClose} />
        </Box>
      </Modal>
      <Modal open={openChangePassword} onClose={changePasswordClose}>
        <Box>
          <ChangePassword close={changePasswordClose} />
        </Box>
      </Modal>
    </Box>
  );
};

export default TopMenu;
