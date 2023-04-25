import axios from "axios";

import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { Stack, Box } from "@mui/material";
import { useState } from "react";

// import components

import HomePage from "./pages/home/HomePage";
import UserPage from "./pages/user/UserPage";
import CommunityPage from "./pages/community/CommunityPage";
import AboutPage from "./pages/about/AboutPage";
import LicensePage from "./pages/license/LicensePage";
import NotFound from "./pages/notFound/NotFound";
import Footer from "../src/components/footer/Footer";
import TopMenu from "./components/menu/TopMenu";

const Layout = () => {
  const [show, setShow] = useState(true);
  const handleClick = () => {
    setShow(!show);
  };
  return (
    <Box>
      <Stack direction="column">
        <Box>
          <Box p="0">
            <TopMenu />
          </Box>
          <Box p="0" minHeight="89.5vh">
            <Outlet />
          </Box>
        </Box>
        <Box
          p="0"
          bgcolor="#f0f0f0"
          sx={{
            margin: 0,
            padding: 0,
          }}
        >
          <Footer />
        </Box>
      </Stack>
    </Box>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <HomePage />,
      },
      {
        path: "user",
        element: <UserPage />,
      },
      {
        path: "community",
        element: <CommunityPage />,
      },
      {
        path: "about",
        element: <AboutPage />,
      },
      {
        path: "license",
        element: <LicensePage />,
      },
    ],
  },
]);

function App() {
  axios.defaults.withCredentials = true;
  axios.defaults.baseURL = "http://localhost:5000/api";
  return (
    <div className="App">
      <RouterProvider router={router} />
      <Outlet />
    </div>
  );
}

export default App;
