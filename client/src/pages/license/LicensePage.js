import React from "react";
import { useEffect } from "react";
const LicensePage = () => {
  useEffect(() => {
    document.title = "License";
  }, []);
  return <div>LicensePage</div>;
};

export default LicensePage;
