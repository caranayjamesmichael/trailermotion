import React, { useEffect, useState } from "react";
import axios from "axios";

import Navbar from "./Navbar";
import Banner from "./Banner";
import Avatar from "./Avatar";

import searchIcon from "../assets/images/search.png";
import bellIcon from "../assets/images/bell.png";
import bellNotificationIcon from "../assets/images/notification.png";
import Shows from "./Shows.jsx";

const Dashboard = () => {
  const [users, setUsers] = useState([]);
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  const [hasNotifications, setHasNotifications] = useState(false);

  const [shows, setShows] = useState([]);
  const [filteredShows, setFilteredShows] = useState([]);

  const [isLoading, setIsLoading] = useState(false);
  const [isTrailerLoading, setIsTrailerLoading] = useState(false);

  useEffect(() => {
    const getAllShows = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get("http://localhost:8000/api/shows");
        setShows(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log("Error fetching shows", error);
      }
    };

    getAllShows();
  }, []);

  useEffect(() => {
    setFilteredShows(shows);
  }, [shows]);

  const filterSearchShows = (e) => {
    const value = e.target.value.trim().toLowerCase(); // Trim and convert to lowercase for case-insensitive search

    e.preventDefault();
    if (value === "") {
      setFilteredShows(shows);
    } else {
      setFilteredShows(
        shows.filter((show) => show.title.toLowerCase().includes(value))
      );
    }
  };

  const filterAllShows = (e) => {
    e.preventDefault();
    setFilteredShows(shows);
  };

  const filterNewReleaseShows = (e) => {
    e.preventDefault();
    setFilteredShows(shows.filter((show) => show.newRelease === true));
  };

  const filterHorrorShows = (e) => {
    e.preventDefault();
    setFilteredShows(shows.filter((show) => show.genre === "Horror"));
  };

  const filterSciFiShows = (e) => {
    e.preventDefault();
    setFilteredShows(shows.filter((show) => show.genre === "SciFi"));
  };

  const filterActionShows = (e) => {
    e.preventDefault();
    setFilteredShows(shows.filter((show) => show.genre === "Action"));
  };

  const filterComedyShows = (e) => {
    e.preventDefault();
    setFilteredShows(shows.filter((show) => show.genre === "Comedy"));
  };

  return (
    <div className="flex flex-col lg:flex-row">
      <Navbar
        isUserLoggedIn={isUserLoggedIn}
        setIsUserLoggedIn={setIsUserLoggedIn}
      />

      <div className="w-full min-h-screen bg-[rgba(30,30,36,255)] lg:px-10">
        <div className="h-[400px] lg:h-[700px] flex items-center justify-start lg:px-10 relative">
          {isLoading && isTrailerLoading ? (
            <p>Loading shows...</p>
          ) : shows.length > 0 ? (
            <Banner shows={shows} />
          ) : (
            <p>No shows available</p>
          )}
        </div>

        <div className="flex flex-col px-7 lg:px-10 min-h-56">
          <div className="flex flex-wrap justify-between">
            <button className="py-10 text-white" href="#">
              <div className="flex flex-col justify-center items-center w-[150px] h-36 lg:w-80 lg:h-56 bg-center bg-cover rounded-3xl shadow-2xl bg-[rgba(30,31,37,255)] hover:bg-[rgba(37,38,45,255)] hover:scale-105 duration-500">
                <p className="font-bebas lg:text-[2.5rem]">Horror</p>
                <p className="text-[#676a7c]">
                  <small>
                    {shows.filter((show) => show.genre === "Horror").length}
                  </small>
                </p>
              </div>
            </button>

            <button className="py-10 text-white" href="#">
              <div className="flex flex-col justify-center items-center w-[150px] h-36 lg:w-80 lg:h-56 bg-center bg-cover rounded-3xl shadow-2xl bg-[rgba(30,31,37,255)] hover:bg-[rgba(37,38,45,255)] hover:scale-105 duration-500">
                <p className="font-bebas lg:text-[2.5rem]">Science Fiction</p>
                <p className="text-[#676a7c]">
                  <small>
                    {shows.filter((show) => show.genre === "SciFi").length}
                  </small>
                </p>
              </div>
            </button>

            <button className="py-10 text-white" href="#">
              <div className="flex flex-col justify-center items-center w-[150px] h-36 lg:w-80 lg:h-56 bg-center bg-cover rounded-3xl shadow-2xl bg-[rgba(30,31,37,255)] hover:bg-[rgba(37,38,45,255)] hover:scale-105 duration-500">
                <p className="font-bebas lg:text-[2.5rem]">Action</p>
                <p className="text-[#676a7c]">
                  <small>
                    {shows.filter((show) => show.genre === "Action").length}
                  </small>
                </p>
              </div>
            </button>

            <button className="py-10 text-white" href="#">
              <div className="flex flex-col justify-center items-center w-[150px] h-36 lg:w-80 lg:h-56 bg-center bg-cover rounded-3xl shadow-2xl bg-[rgba(30,31,37,255)] hover:bg-[rgba(37,38,45,255)] hover:scale-105 duration-500">
                <p className="font-bebas lg:text-[2.5rem]">Comedy</p>
                <p className="text-[#676a7c]">
                  <small>
                    {shows.filter((show) => show.genre === "Comedy").length}
                  </small>
                </p>
              </div>
            </button>
          </div>
        </div>

        <div id="showContainer" className="px-10 py-10">
          <div className="flex flex-col-reverse lg:flex-row lg:justify-between">
            <div className="pt-14 lg:pt-0 ">
              <ul className="flex flex-wrap justify-around items-center lg:flex-row lg:gap-20 text-white">
                <li className="w-1/2 lg:w-14 text-center">
                  <button
                    className="font-bebas lg:text-[1.4rem] hover:text-red-600 px-5 py-1"
                    onClick={filterAllShows}
                  >
                    ALL
                  </button>
                </li>

                <li className="w-1/2 lg:w-36 text-center">
                  <button
                    className="font-bebas lg:text-[1.4rem] hover:text-red-600 px-5 py-1"
                    onClick={filterNewReleaseShows}
                  >
                    New Release
                  </button>
                </li>

                <li className="w-1/2 lg:w-24 text-center">
                  <button
                    className="font-bebas lg:text-[1.4rem] hover:text-red-600 px-5 py-1"
                    onClick={filterHorrorShows}
                  >
                    HORROR
                  </button>
                </li>
                <li className="w-1/2 lg:w-24 text-center">
                  <button
                    className="font-bebas lg:text-[1.4rem] hover:text-red-600 px-5 py-1"
                    onClick={filterSciFiShows}
                  >
                    SciFi
                  </button>
                </li>
                <li className="w-1/2 lg:w-24 text-center">
                  <button
                    className="font-bebas lg:text-[1.4rem] hover:text-red-600 px-5 py-1"
                    onClick={filterActionShows}
                  >
                    <p className="text-center">Action</p>
                  </button>
                </li>
                <li className="w-1/2 lg:w-24 text-center">
                  <button
                    className="font-bebas lg:text-[1.4rem] hover:text-red-600 px-5 py-1"
                    onClick={filterComedyShows}
                  >
                    <p>Comedy</p>
                  </button>
                </li>
              </ul>
            </div>

            <div className="pt-10 lg:pt-0">
              <form className="flex gap-5 px-3 py-2 bg-[#171717]">
                <img className="w-6" src={searchIcon}></img>
                <input
                  className="bg-transparent outline-none text-white"
                  type="text"
                  placeholder="Search here..."
                  onInput={filterSearchShows}
                ></input>
              </form>
            </div>
          </div>

          <div className="min-h-screen">
            <Shows shows={filteredShows}></Shows>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
