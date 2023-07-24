import React, { useState, useEffect } from "react";
import axios from "axios";

import Navbar from "../components/Navbar";
import Shows from "../components/Shows";

const Movies = () => {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    const getAllMovies = async () => {
      const response = await axios.get("http://localhost:8000/api/shows");
      setShows(response.data);
    };

    getAllMovies();
  }, []);

  return (
    <div className="flex bg-[rgba(30,30,36,255)]">
      <Navbar />
      <div className="w-full min-h-screen px-10 py-10">
        <div>
          <h2 className="font-bebas text-[2.5rem] text-white">
            Horror trailers
          </h2>
          <div className="h-full overflow-y-scroll">
            <Shows
              shows={shows.filter((show) => show.genre === "Horror")}
            ></Shows>
          </div>
        </div>

        <div>
          <h2 className="font-bebas text-[2.5rem] text-white">
            Science Fiction Trailers
          </h2>
          <div className="h-full overflow-y-scroll">
            <Shows
              shows={shows.filter((show) => show.genre === "SciFi")}
            ></Shows>
          </div>
        </div>

        <div>
          <h2 className="font-bebas text-[2.5rem] text-white">
            Action Trailers
          </h2>
          <div className="h-full overflow-y-scroll">
            <Shows
              shows={shows.filter((show) => show.genre === "Action")}
            ></Shows>
          </div>
        </div>

        <div>
          <h2 className="font-bebas text-[2.5rem] text-white">Comedy</h2>
          <div className="h-full overflow-y-scroll">
            <Shows
              shows={shows.filter((show) => show.genre === "Comedy")}
            ></Shows>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Movies;
