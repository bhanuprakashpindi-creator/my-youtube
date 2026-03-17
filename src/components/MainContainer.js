import React from "react";
import ButtonList from "./ButtonList";
import VideoCard from "./VideoCard";
const MainContainer = () => {
  return (
    <div className="col-span-11">
      <ButtonList />
      <VideoCard />
    </div>
  );
};

export default MainContainer;
