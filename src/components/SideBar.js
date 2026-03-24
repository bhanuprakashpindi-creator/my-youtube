import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const SideBar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  if (!isMenuOpen) return "";
  return (
    <div className="col-span-1 border-r my-10">
      <div>
        <ul className="mx-10 p-2 border-b-2">
          <li className="font-bold text-lg">
            <Link to="/">Home</Link>
          </li>
          <li className="font-bold text-lg">Shorts</li>
          <li className="font-bold text-lg">Live</li>
        </ul>
        <ul className="mt-2 mx-5 border-b-2 ">
          <li className="font-bold text-lg">Subscriptions</li>
          <li className=" text-lg mx-4">Namaste React</li>
          <li className="text-lg mx-4">Munna Bhai Gaming</li>
        </ul>
        <ul className="mt-2 mx-5 border-b-2">
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
