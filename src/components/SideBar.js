import React from "react";

const SideBar = () => {
  return (
    <div className="col-span-1 border-r">
      <div>
        <ul className="mx-3">
          <li className="font-bold text-lg">Home</li>
          <li className="font-bold text-lg">Shorts</li>
          <li className="font-bold text-lg">Live</li>
        </ul>
        <ul className="mt-2">
          <li className="font-bold text-lg">Subscriptions</li>
          <li className=" text-lg mx-4">Namaste React</li>
          <li className="text-lg mx-4">Munna Bhai Gaming</li>
        </ul>
        <ul className="mt-2">
          <li className="font-bold text-lg">Explore</li>
          <li className=" text-lg mx-4">Watch History</li>
          <li className="text-lg mx-4">Watch Later</li>
          <li className=" text-lg mx-4">Downloads</li>
          <li className="text-lg mx-4">Liked Videos</li>
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
