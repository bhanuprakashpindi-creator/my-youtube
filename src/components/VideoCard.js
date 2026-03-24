import React from "react";
const VideoCard = ({ info }) => {
  const { snippet } = info;
  const { channelTitle, thumbnails } = snippet;

  return (
    <div className=" w-[350px]  m-2 flex flex-wrap rounded-xl hover:border hover:bg-gray-300 ">
      <div className="bg-gray-500 border w-[350px] cursor-pointer rounded-xl m-2">
        <img
          className="rounded-xl w-full aspect-video object-cover"
          alt="thumbnails"
          src={thumbnails?.high?.url}
        />
      </div>
      <div className="my-1 mx-2 font-bold">
        <ul>
          <li></li>
          <li>{channelTitle}</li>
        </ul>
      </div>
    </div>
  );
};

export default VideoCard;
