import React from "react";
import Navbar from "./Navbar";
import { useState, useRef, useEffect } from "react";

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
    <>
      {/* HEADER FOR SMALL SCREEN */}

      <header className="flex items-center justify-between bg-[#f7f0d6] sm:hidden  z-50 fixed w-full shadow-[0_4px_10px_rgba(0,0,0,0.1)]">
        <div className="flex items-center p-2 sm:hidden bg-[#f7f0d6]  w-[70vw]">
          <div className="flex items-center w-24 h-12 border-1 bg-[#f0f0e9] border-[#FFBE0B]  border-r-0 rounded-[10px] rounded-r-none">
            <img src={banner} className="w-24 h-14 " />
          </div>
          <div className="border-1 border-l-0 border-[#FFBE0B] bg-[#f0f0e9] hover:border-[#CC9500] p-[11px] rounded-[10px] rounded-l-none w-[46vw]">
            <input
              type="text"
              placeholder="Search..."
              className="border-0 outline-none"
            />
          </div>
        </div>
        <div className="flex items-center gap-2 w-[25vw]   ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="size-8"
          >
            <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
          </svg>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="size-8"
          >
            <path d="M2.25 2.25a.75.75 0 0 0 0 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 0 0-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 0 0 0-1.5H5.378A2.25 2.25 0 0 1 7.5 15h11.218a.75.75 0 0 0 .674-.421 60.358 60.358 0 0 0 2.96-7.228.75.75 0 0 0-.525-.965A60.864 60.864 0 0 0 5.68 4.509l-.232-.867A1.875 1.875 0 0 0 3.636 2.25H2.25ZM3.75 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM16.5 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z" />
          </svg>
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-8"
            >
              <path
                fillRule="evenodd"
                d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </header>

      {/* HEADER FOR LARGE SCREEN
       */}

      <div className="hidden sm:fixed sm:z-50 w-full sm:flex text-[20px] justify-between items-center bg-[#fff9ec] shadow-[0_4px_10px_rgba(0,0,0,0.1)] ">
        <img src={banner} alt="" className="w-24 md:w-32" />

        <ul className="lg:flex hidden justify-between md:gap-8 gap-2 md:text-[1.4rem] font-medium text-[1rem]">
          <li>Home</li>
          <li>Menu</li>
          <li>Restaurants</li>
          <li>Popular</li>
        </ul>

        <div className="relative flex items-center justify-between">
          <FaSearch className="absolute left-3 text-gray-500" />
          <input
            type="text"
            placeholder="search restaurants or dishes..."
            className="border-[#FFBE0B] border-[1px] hover:border-[#CC9500] rounded-2xl p-2.5 text-[1rem] w-[44vw] sm:w-[70vw] lg:w-[30vw] focus:outline-0 flex pl-10"
          />
        </div>

        <div className="flex justify-between gap-3.5 text-[1.5rem] m-1">
          <FaHeart className="wishlist-icon" />
          <FaShoppingCart className="cart-icon" />

          <button>
            <FaUser className="profile-icon" />
          </button>
        </div>
      </div>
    </>
  );
}
