import React, { useState, useEffect } from "react";

const Banner = ({ shows }) => {
  const [currentShowIndex, setCurrentShowIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentShowIndex((prevIndex) => (prevIndex + 1) % shows.length);
    }, 5000);

    // Clean up the interval when the component unmounts
    return () => clearInterval(interval);
  }, [shows.length]); // Add shows.length as a dependency to the useEffect to recompute the interval when shows change

  return (
    <div
      className="w-full h-full lg:h-5/6 max-h-full lg:rounded-3xl relative shadow-lg bg-cover bg-center banner-transition"
      style={{
        backgroundImage: `url(${shows[currentShowIndex].imageURL})`,
      }}
    >
      <div className="absolute bottom-0 lg:top-0 bg-[rgba(37, 38, 45)] w-full lg:h-full rounded-3xl flex items-center">
        <p className="absolute bottom-44 left-10 text-[2.5rem] text-white font-bebas" style={{textShadow: "0px 2px 5px black"}}>
          {shows[currentShowIndex].title}
        </p>
        <p className="absolute bottom-36 left-10  text-white font-bebas" style={{textShadow: "0px 2px 5px black"}}>
          Genre:{" "}
          <span className="bg-[rgba(30,30,36,255)] px-2 py-0.5 rounded ml-1">
            {shows[currentShowIndex].genre}
          </span>
        </p>
        <p className="absolute bottom-28 left-10 text-white font-bebas" style={{textShadow: "0px 2px 5px black"}}>
          IMDB: <span>{shows[currentShowIndex].ratings + " ⭐"}</span>
        </p>
        <a href="#showContainer">
          <p className="absolute bottom-10 left-10 bg-red-600 text-white px-7 py-3 rounded-lg shadow-2xl shadow-red-600 font-bebas">
            Watch
          </p>
        </a>
      </div>
    </div>
  );
};

export default Banner;
