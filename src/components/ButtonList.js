import React from "react";
import Buttons from "./Buttons";

const ButtonList = () => {
  const buttonList = [
    "All",
    " Music",
    "Reaction Videos",
    "Podcasts",
    "News",
    "Movies",
    "Songs",
    "Fighting Scenes",
    "Gaming",
    "Live",
    "Facts",
    "Memes",
  ];
  return (
    <div className="m-5 p-5 flex gap-5">
      {buttonList.map((name, index) => (
        <Buttons key={index} name={name} />
      ))}
    </div>
  );
};

export default ButtonList;
