import React from "react";

const Buttons = ({ name }) => {
  return (
    <div>
      <button className="border border-gray-500 bg-black text-white m-2 p-2 rounded-lg">
        {name}
      </button>
    </div>
  );
};

export default Buttons;
