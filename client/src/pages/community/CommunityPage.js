import React from "react";
import { useEffect } from "react";

// import components

const CommunityPage = () => {
  useEffect(() => {
    document.title = "Community";
  }, []);
  return <div>CommunityPage</div>;
};

export default CommunityPage;
