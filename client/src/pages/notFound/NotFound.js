import React from "react";
import { useEffect } from "react";

const NotFound = () => {
  useEffect(() => {
    document.title = "404 Not Found";
  }, []);
  return <div>NotFound</div>;
};

export default NotFound;
