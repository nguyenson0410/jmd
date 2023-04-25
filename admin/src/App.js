import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import axios from "axios";

// import components
import HeaderMenu from "./components/menu/HeaderMenu";
import Submenu from "./components/submenu/Submenu";
import Footer from "./components/footer/Footer";
import UserPage from "./pages/user/UserPage";
import WordPage from "./pages/word/WordPage";
import KanjiPage from "./pages/kanji/KanjiPage";
import SentencePage from "./pages/sentence/SentencePage";
import InboxPage from "./pages/inbox/InboxPage";
import LoginPage from "./pages/login/LoginPage";

// import MUI components
import { Box, Stack } from "@mui/material";

const Layout = () => {
  return (
    <Box>
      <Stack direction="column" spacing="10px">
        <HeaderMenu />
        {/* <Submenu /> */}
        <Outlet />
        <Footer />
      </Stack>
    </Box>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "", element: <WordPage /> },
      {
        path: "user",
        element: <UserPage />,
      },
      {
        path: "kanji",
        element: <KanjiPage />,
      },
      {
        path: "sentence",
        element: <SentencePage />,
      },
      {
        path: "inbox",
        element: <InboxPage />,
      },
      {
        path: "login",
        element: <LoginPage />,
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
