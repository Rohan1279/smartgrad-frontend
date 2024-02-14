import React from "react";
import { Link } from "react-router-dom";

const NetworkCard = ({ img, name, designation, link }) => {
  return (
    <div>
      <img src={img} alt="" className="w-full h-full object-cover " />
      <div className="absolute bg-black/25 w-full bottom-0 left-0 pl-[31px] pt-[25px] h-[181px] ">
        <p className="text-[40px] font-bold text-white">{name}</p>
        <p className="text-[20px] font-bold text-white">{designation}</p>
        <button className="bg-[#1C244B] w-fit h-11 px-8 rounded-xl text-white mt-3">
          <Link to={link} className="" target="_blank">
            Connect Now
          </Link>
        </button>
      </div>
    </div>
  );
};

export default NetworkCard;
