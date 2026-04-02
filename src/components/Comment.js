import React from "react";

const Comment = ({ data }) => {
  const { name, text, replies } = data;
  return (
    <div className="m-5 p-2 flex flex-wrap shadow-sm bg-gray-200 rounded-lg">
      <img
        className="h-10 w-auto"
        alt="userLogo"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtRs_rWILOMx5-v3aXwJu7LWUhnPceiKvvDg&s"
      />
      <div className="px-3">
        <p className=" font-bold">{name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Comment;
