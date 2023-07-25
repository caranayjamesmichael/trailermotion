import React from "react";
import trailermotion from "../assets/images/trailermotion.png";
import googleplay from "../assets/images/google.png";

const Footer = () => {
  return (
    <div
      className="flex flex-col lg:flex-row items-center p-5 justify-around bg-[rgba(30,30,36,255)] w-full min-h-[250px]"
      style={{ boxShadow: "0px 5px 15px black" }}
    >
      <div className="flex flex-col items-center">
        <img className="w-60" src={trailermotion}></img>
        <div className=" max-w-sm text-justify pt-5">
          <p className="text-[#676a7c]">
            <small>
              Explore the world of trailers with Trailermotion - your go-to
              destination for the latest and upcoming movie and TV show
              previews. Stay connected and informed with our Trailer Alerts,
              join our vibrant community forums, and unlock premium perks as a
              VIP member.
            </small>
          </p>
        </div>
      </div>
      <div className="flex gap-20 lg:gap-0 justify-around w-1/4 p-10">
        <ul className=" flex flex-col pt-10">
          <h2 className="text-[#676a7c] font-semibold pb-3">
            <small>Links</small>
          </h2>

          <li className="text-white hover:border-l-4 hover:border-red-500 duration-200 font-bebas">
            <a className="underline" href="/home">
              Home
            </a>
          </li>
          <li className="text-white hover:border-l-4 hover:border-red-500 duration-200 font-bebas">
            <a className="underline" href="/movies">
              Movies
            </a>
          </li>
          <li className="text-white hover:border-l-4 hover:border-red-500 duration-200 font-bebas">
            <a className="underline" href="/series">
              Tv Shows
            </a>
          </li>
          <li className="text-white hover:border-l-4 hover:border-red-500 duration-200 font-bebas">
            <a className="underline" href="/genres">
              Genre
            </a>
          </li>
          <li className="text-white hover:border-l-4 hover:border-red-500 duration-200 font-bebas">
            <a className="underline" href="/toprated">
              Top Rated
            </a>
          </li>
        </ul>

        <ul className=" flex flex-col pt-10">
          <h2 className="text-[#676a7c] font-semibold pb-3">
            <small>Genres</small>
          </h2>

          <li className="text-white hover:border-l-4 hover:border-red-500 duration-200 font-bebas">
            <a className="underline" href="/genres">
              Horror
            </a>
          </li>
          <li className="text-white hover:border-l-4 hover:border-red-500 duration-200 font-bebas">
            <a className="underline" href="/genres">
              Action
            </a>
          </li>
          <li className="text-white hover:border-l-4 hover:border-red-500 duration-200 font-bebas">
            <a className="underline" href="/genres">
              Science Fiction
            </a>
          </li>
          <li className="text-white hover:border-l-4 hover:border-red-500 duration-200 font-bebas">
            <a className="underline" href="/genres">
              Comedy
            </a>
          </li>
        </ul>
      </div>
      <div className="flex items-center justify-center">
        <img className="w-40" src={googleplay}></img>
      </div>
    </div>
  );
};

export default Footer;
