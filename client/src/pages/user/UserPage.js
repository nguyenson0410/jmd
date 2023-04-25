import React from "react";
import { useEffect } from "react";

// import component
import Desktop from "../user/desktop/Desktop";

const UserPage = () => {
  useEffect(() => {
    document.title = "User";
  }, []);
  return <Desktop />;
};

export default UserPage;
