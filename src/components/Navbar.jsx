import React, { useState } from "react";

import logo from "../assets/images/trailermotion.png";
import homeIcon from "../assets/images/home.png";
import movieIcon from "../assets/images/movie-clapper-open.png";
import showIcon from "../assets/images/tv.png";
import starIcon from "../assets/images/star.png";
import logoutIcon from "../assets/images/logout.png";
import dropdown from "../assets/images/down.png";

const Navbar = ({ isUserLoggedIn, setIsUserLoggedIn }) => {
  const [dropdownStatus, setDropdownStatus] = useState(false);

  const handleDropdown = (e) => {
    setDropdownStatus((prevState) => !prevState);
  };

  const handleLogin = (e) => {
    e.preventDefault();

    isUserLoggedIn ? setIsUserLoggedIn(false) : setIsUserLoggedIn(true);
  };

  return (
    <div className="flex-col l:flex xl:flex justify-around items-center w-screen lg:h-screen lg:w-72 bg-[rgba(30,30,36,255)] shadow-lg sticky top-0 z-10">
      <div
        className={`${
          dropdownStatus ? "" : "hidden"
        } flex lg:flex py-10 lg:py-0 w-full justify-center`}
      >
        <img className="w-48" src={logo}></img>
      </div>

      <div className={`${dropdownStatus ? "" : "hidden"} lg:block w-full`}>
        <ul>
          <li className="flex flex-col gap-5 py-3">
            <h2 className="px-14 text-[#676a7c] font-semibold">
              <small>Menu</small>
            </h2>
            <a
              className="flex items-center text-[#676a7c] hover:border-l-4 hover:border-red-500 px-14 duration-200 font-bebas"
              href="/"
            >
              <img className="w-5" src={homeIcon}></img>
              <p className="px-3">Home</p>
            </a>
            <a
              className="flex items-center text-[#676a7c] hover:border-l-4 hover:border-red-500 px-14 duration-200 font-bebas"
              href="/movies"
            >
              <img className="w-5" src={movieIcon}></img>
              <p className="px-3">Movies</p>
            </a>
            <a
              className="flex items-center text-[#676a7c] hover:border-l-4 hover:border-red-500 px-14 duration-200 font-bebas"
              href="/series"
            >
              <img className="w-5" src={showIcon}></img>
              <p className="px-3">TV Shows</p>
            </a>
            <a
              className="flex items-center text-[#676a7c] hover:border-l-4 hover:border-red-500 px-14 duration-200 font-bebas"
              href="#"
            >
              <img className="w-5" src={showIcon}></img>
              <p className="px-3">Genre</p>
            </a>
            <a
              className="flex items-center text-[#676a7c] hover:border-l-4 hover:border-red-500 px-14 duration-200 font-bebas"
              href="/toprated"
            >
              <img className="w-5" src={starIcon}></img>
              <p className="px-3">Top Rated</p>
            </a>
          </li>

          <li className="flex flex-col gap-5 py-3 ">
            <h2 className="px-14 text-[#676a7c] font-semibold">
              <small>General</small>
            </h2>
            <a
              className="flex items-center text-[#676a7c] hover:border-l-4 hover:border-red-500 px-14 duration-200 font-bebas"
              href="#"
            >
              <img className="w-5" src={homeIcon}></img>
              <p className="px-3">Settings</p>
            </a>
            <a
              className="flex items-center text-[#676a7c] hover:border-l-4 hover:border-red-500 px-14 duration-200 font-bebas"
              href="#"
              onClick={handleLogin}
            >
              <img className="w-5" src={logoutIcon}></img>
              <p className="px-3">{isUserLoggedIn ? "Logout" : "Login"}</p>
            </a>
          </li>
        </ul>
      </div>

      <div className={`${dropdownStatus ? "" : "hidden"} lg:block w-full py-9 lg:py-0`}>
        <p className="text-[#676a7c] text-center">
          <small>© Trailermotion. 2023</small>
        </p>
        <p className="text-[#676a7c] text-center">
          <small>All Rights Reserved.</small>
        </p>
      </div>

      <div className="lg:hidden flex justify-center items-center">
        <button onClick={handleDropdown}>
          <img className="w-10" src={dropdown}></img>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
