import React from "react";
import SideBar from "./SideBar";
import MainContainer from "./MainContainer";

const Body = () => {
  return (
    <div className="flex grid-flow-col grid">
      <SideBar />
      <MainContainer />
    </div>
  );
};

export default Body;
