import React from "react";

import banner from "../assets/pictures/banner.png";
import {
  FaUser,
  FaShoppingCart,
  FaChevronDown,
  FaHeart,
  FaSearch,
} from "react-icons/fa";

export default function () {
  return (
    <div className="text-[20px] flex  justify-between items-center bg-[#fff9ec] shadow-[0_4px_10px_rgba(0,0,0,0.1)]">
      <img src={banner} alt="" className="w-24 md:w-32 " />

      <ul className=" lg:flex hidden  justify-between md:gap-8 gap-2 md:text-[1.4rem] font-medium text-[1rem]">
        <li>Home</li>
        <li>Menu</li>
        <li>Restaurants</li>
        <li>Popular</li>
      </ul>

      <div className="relative flex items-center justify-between ">
        <FaSearch className="absolute left-3 text-gray-500" />

        <input
          type="text"
          placeholder="search restaurants or dishes..."
          className="border-[#FFBE0B] border-[1px] hover:border-[#CC9500] rounded-2xl p-2.5 text-[1rem] w-[46vw] lg:w-[30vw] focus:outline-0 flex pl-10"
        />
      </div>
      <div className="flex justify-between gap-3.5 text-[1.5rem] m-1">
        <FaHeart className="wishlist-icon" />
        <FaShoppingCart className="cart-icon" />
        <FaUser className="profile-icon" />
      </div>
    </div>
  );
}
