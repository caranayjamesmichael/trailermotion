import React, { useEffect, useState } from "react";
import axios from "axios";

const Banner = () => {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    const getAllShows = async () => {
      const response = await axios.get("http://localhost:8000/api/shows");
      setShows(response.data);
    };

    getAllShows();
  }, []);

  return (
    <div>
      {shows.map((show) => (
        <div key={show.id}>
            <p>{show.title}</p>
        </div>
      ))}
    </div>
  );
};

export default Banner;
