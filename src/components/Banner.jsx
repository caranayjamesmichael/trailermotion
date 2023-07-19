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
        <div
          className="flex justify-around items-center h-screen w-full"
          style={{
            backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 1) 10%, rgba(0, 0, 0, 0.8),  rgba(0, 0, 0, 0)), url(${show.imageURL})`,
            backgroundSize: "cover",
          }}
          key={show.id}
        >
          <div className="w-100">
            <h2 className="text-white text-[2.5rem]">
              Watch the latest trailers
            </h2>
            <p className="text-white">
              <small>
                With thousands of movie trailers across all genres which is
                trusted by big companies
              </small>
            </p>
            <div className="flex justify-between">
              <a
                className="bg-violet-700 text-white px-16 py-2 mt-10 rounded"
                href="#"
              >
                BROWSE
              </a>
              <a
                className="bg-violet-700 text-white px-16 py-2 mt-10 rounded"
                href="#"
              >
                REVIEW
              </a>
            </div>
          </div>
          <div>
            <video
              className=" w-100 rounded mt-96"
              src={show.trailerURL}
              muted
              autoPlay
              loop
            ></video>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Banner;
