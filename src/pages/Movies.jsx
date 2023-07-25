import React, { useState, useEffect } from "react";
import axios from "axios";

import Navbar from "../components/Navbar";
import Shows from "../components/Shows";
import Footer from "../components/Footer"

const Movies = () => {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    const getAllMovies = async () => {
      const response = await axios.get(
        "http://localhost:8000/api/shows/type/Movie"
      );
      setShows(response.data);
    };

    getAllMovies();
  }, []);

  return (
    <div className="flex flex-col lg:flex-row bg-[rgba(30,30,36,255)]">
      <Navbar />

      <div className="flex flex-col w-full">
        <div className="w-full min-h-screen px-10 py-10">
          <h2 className="font-bebas text-[2.5rem] text-white">
            Movie Trailers
          </h2>
          <Shows shows={shows}></Shows>
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default Movies;
