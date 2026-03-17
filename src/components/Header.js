import React from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/AppSlice";

const Header = () => {
  const dispatch = useDispatch();
  const toggleMenuHanddler = () => {
    dispatch(toggleMenu());
  };
  return (
    <div className="m-2 p-2 text-bold text-lg flex justify-between grid-flow-col">
      <div className="flex gap-10 w-auto h-10 mx-4 col-span-1 ">
        <img
          onClick={() => toggleMenuHanddler()}
          className=" w-auto h-10 cursor-pointer"
          alt="menu"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAYFBMVEX///8AAADPz89LS0uWlpb4+PiCgoIQEBCnp6fFxcXz8/OwsLB0dHTu7u76+vrd3d27u7uQkJB6enozMzPj4+NlZWUdHR2hoaHKyspeXl5vb28XFxc8PDxYWFiBgYHX19eStxeWAAACX0lEQVR4nO3dj04CMQzH8QmcggKK/BFF5f3fUi9okJi0O7akaff9PEF/uXGw0awpAQAAAAAAAAAAAAAAAEADZqvt2I/tajYs3uL5xp/nRX7AlXWxV1pl5uvW1pVebd1lBTxY11ngkBPR7xPsrfWAn9Y1FrrVAm6sKyy2URJurQsstpUD3lvXV8G9mPDBurwKHsSEc+vyKpiLCd+ty6vgXUxoXV0VjSfcWVdXwU5M+GFdXgUfYkKv+6a/5D3UyLq8CkZiwnRnXV+xOzlgmloXWGyqJEye97+9gxYwHa1LLHRUEzpfp+oa7b1YV1ngJSdgSjPrOq+WfSzc+dxEzbPOEn8sJt6O3NaTAUfeJ8vHkR+Py6HxAAAAAAAAAACAH91+OvFjuh/yv1PvaWz9X9Jg46cB+fY+m792SifN2a11qVdT29hPXq3rLPCaE/DNusoib3pA753ecpf3t866wmLa14bft8wv7W1jXV8FckC/zUJnctuQ/0WqLVN/P9b+G4sJ/bcIa03C1tVV0fgzjP85jP8ujf99GOFVIwcMsEy136Xx9xbx94cN7PEbOKfx/LbJPGtLaRT9vDTFP/PuRf/fAgAAAAAAAAAAOBL8nqjod32Fv6/Nb9tQ5p174e9NDH/3Zfz7S713mGrXCDtfoz1tnXp/hOpDjH+fd/w72ePfq++z3euSPBvBuroqGk8Yf86Mz23TJXlWkPcu757c6R1/Zlf8uWsNzM5z3MZ+ktHM7u2Q7VLGDMsG5pCmpd+v/bxZssnvHip3HnBqYKZzL/hcbgAAAAAAAAAAAAAAAADw6QtJMFO0DHiZNgAAAABJRU5ErkJggg=="
        />

        <img
          className="cursor-pointer"
          alt="logo"
          src="https://www.intellect-worldwide.com/wp-content/uploads/sites/123/2025/02/YouTube_Logo_2017.svg_.png"
        />
      </div>
      <div className="col-span-10 text-center ">
        <input
          type="text"
          className="border border-black w-96   rounded-l-full h-10"
        />
        <button className="border border-black w-10 rounded-r-full h-10">
          🔍
        </button>
      </div>
      <div className="col-span-1">
        <img
          className="h-10 w-auto "
          alt="user"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtRs_rWILOMx5-v3aXwJu7LWUhnPceiKvvDg&s"
        />
      </div>
    </div>
  );
};

export default Header;
