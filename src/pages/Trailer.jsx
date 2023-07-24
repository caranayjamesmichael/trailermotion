import React from "react";

import Navbar from "../components/Navbar";
import trailer from "../../server/models/21.mp4";

const Trailer = () => {
  return (
    <div className="flex min-h-screen">
      <Navbar />
      <div className="flex flex-col bg-red-600 w-2/3">
        <div className="w-full h-2/3 bg-black">
          <video className="h-full" src={trailer} controls autoPlay></video>
        </div>
        <div className="h-full px-5 py-5 text-[2.5rem] bg-[rgba(30,30,36,255)]">
          <h2>Title</h2>
        </div>
      </div>

      <div className="bg-blue-500 w-1/3">
        <h2>Title</h2>
      </div>
    </div>
  );
};

export default Trailer;
