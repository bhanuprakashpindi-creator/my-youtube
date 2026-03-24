import React from "react";
import { useEffect, useState } from "react";
import { YOUTUBE_ViDEO_URL } from "../utils/Constant";
import VideoCard from "../components/VideoCard";
import { Link } from "react-router-dom";
const VideoContainer = () => {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    getVideos();
  }, []);
  const getVideos = async () => {
    const data = await fetch(YOUTUBE_ViDEO_URL);
    const json = await data.json();
    setVideos(json.items);
    console.log(json.items);
  };
  return (
    <div className="flex flex-wrap">
      {videos.map((video) => (
        <Link to={"/watch?v=" + video?.id?.videoId}>
          <VideoCard key={video?.id?.videoId} info={video} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
