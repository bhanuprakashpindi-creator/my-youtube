import React from "react";
import { YOUTUBE_BIG_URL } from "../utils/Constant";
const WatchCard = ({ idinfo }) => {
  return (
    <div className="col-span-11">
      <div className="w-[1200px] h-[600px] bg-gray-200  rounded-xl m-7">
        <iframe
          className=" rounded-xl"
          width="1200"
          height="600"
          src={
            "https://www.youtube.com/embed/" + idinfo + "?si=oMKapiGOicct-WVl"
          }
          title="YouTube video player"
          frameorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowFullScreen></iframe>
      </div>
    </div>
  );
};

export default WatchCard;
