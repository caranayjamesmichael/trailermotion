import React, { useState, useEffect } from "react";
import axios from "axios";

import Navbar from "../components/Navbar";
import Shows from "../components/Shows";
import Footer from "../components/Footer";

const TopRated = () => {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    const getAllTopRated = async () => {
      const response = await axios.get(
        "http://localhost:8000/api/shows/ratings/toprated"
      );
      setShows(response.data);
    };

    getAllTopRated();
  }, []);

  return (
    <div className="flex flex-col lg:flex-row bg-[rgba(30,30,36,255)]">
      <Navbar />

      <div className="flex flex-col w-full">
        <div className="w-full px-10 py-10">
          <h2 className="font-bebas text-[2.5rem] text-white">
            Top Rated Trailers
          </h2>
          <Shows shows={shows}></Shows>
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default TopRated;
