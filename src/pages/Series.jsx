import React, { useState, useEffect } from "react";
import axios from "axios";

import Navbar from "../components/Navbar";
import Shows from "../components/Shows";

const Series = () => {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    const getAllSeries = async () => {
      const response = await axios.get(
        "http://localhost:8000/api/shows/type/Series"
      );
      setShows(response.data);
    };

    getAllSeries();
  }, []);

  return (
    <div className="flex bg-[rgba(30,30,36,255)]">
      <Navbar />
      <div className="w-full px-10 py-10">
        <h2 className="font-bebas text-[2.5rem] text-white">TV Show Trailers</h2>
        <Shows shows={shows}></Shows>
      </div>
    </div>
  );
};

export default Series;
