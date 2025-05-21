import React from "react";
import fire from "../assets/pictures/fire.png";

const Navbar = () => {
  return (
    <div>
      <ul className="md:hidden flex w-full z-50 items-center justify-between bottom-0 bg-[#f7f0d6] fixed px-5 py-1">
        <div className="flex flex-col items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="size-9"
          >
            <path d="M11.47 3.841a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.06-1.061l-8.689-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 1 0 1.061 1.06l8.69-8.689Z" />
            <path d="m12 5.432 8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625a1.875 1.875 0 0 1-1.875-1.875v-6.198a2.29 2.29 0 0 0 .091-.086L12 5.432Z" />
          </svg>

          <li>Home</li>
        </div>
        <div className="flex flex-col items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColour"
            className="w-9 h-9"
          >
            <path d="M4 4a2 2 0 012-2h13a1 1 0 011 1v16a1 1 0 01-1 1H6a2 2 0 00-2 2v-18zm2 0v14a4 4 0 014-4h10V4H6z" />
          </svg>

          <li>Menu</li>
        </div>
        <div className=" flex flex-col items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
            className="w-9 h-9"
          >
            <path d="M10.75 2a.75.75 0 00-.75.75v6.75a.75.75 0 01-1.5 0V2.75a.75.75 0 00-1.5 0v6.75a.75.75 0 01-1.5 0V2.75a.75.75 0 00-1.5 0v9A2.25 2.25 0 006.25 14H7v7.25a.75.75 0 001.5 0V14h.75A2.25 2.25 0 0011.5 11.75v-9a.75.75 0 00-.75-.75zm5.41 0a.75.75 0 00-.66.43l-2.5 5.5a.75.75 0 001.35.66l.4-.88h2.73l.4.88a.75.75 0 001.35-.66l-2.5-5.5a.75.75 0 00-.67-.43zm-.66 4.25L16 4.58l.5 1.67h-1zM17.25 12a.75.75 0 00-.75.75v8.5a.75.75 0 001.5 0v-8.5a.75.75 0 00-.75-.75z" />
          </svg>

          <li>Restaurants</li>
        </div>
        <div className="flex flex-col items-center">
          <img src={fire} alt="" className="w-6 h-9" />
          <li>Popular</li>
        </div>
      </ul>
    </div>
  );
};

export default Navbar;
