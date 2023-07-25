import React, { useRef, useState } from "react";

const ShowItem = ({ show }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="rounded-t-3xl shadow-xl text-white relative">
      {hovered ? (
        <video
          className="w-80 h-80 object-cover rounded-t-3xl"
          autoPlay
          controls
          src={`../../server/models/${show.trailerURL}`}
        ></video>
      ) : (
        <img
          className="w-80 h-80 object-cover rounded-t-3xl"
          muted
          autoPlay
          src={show.imageURL}
        ></img>
      )}

      <div className={`flex p-5 bg-[rgba(37, 38, 45, 0.8)]`}>
        <div className=" w-3/4">
          <h4>
            <b>
              <strong>{show.title + " "}<span className={`text-[0.5rem] rounded ${show.newRelease ? "bg-green-600 p-1" : "bg-red-600"}`}>{show.newRelease ? "NEW" : ""}</span></strong>
            </b>
          </h4>

          <div className="flex ml-[-8px]">
            <p className="mt-3 text-[#676a7c] px-2 py-0.5 shadow-2xl rounded">
              <small>{"Release Date: " + show.releaseDate}</small>
            </p>
          </div>

          <div className="flex gap-2">
            <p className="mt-3  bg-[rgba(30,30,36,255)] px-2 py-0.5 shadow-black shadow rounded">
              <small>{show.genre}</small>
            </p>
            <p className="mt-3  bg-[rgba(30,30,36,255)] px-2 py-0.5 shadow-black shadow rounded">
              <small>{show.type}</small>
            </p>
            <p className="mt-3  bg-[rgba(30,30,36,255)] px-2 py-0.5 shadow-black shadow rounded">
              <small>{show.ratings + " ⭐"}</small>
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-end items-center w-1/4">
          <button
            className={
              hovered
                ? "bg-green-600 px-5 py-3 rounded-md font-bebas"
                : "bg-red-600 px-5 py-3 rounded-md font-bebas"
            }
            onMouseDown={() => setHovered((prev) => !prev)}
            href="#"
          >
            {hovered ? "Playing" : "Watch"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShowItem;
