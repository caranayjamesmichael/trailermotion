import React from "react";

const Navbar = () => {
  return (
    <div className=" flex justify-between items-center px-5 bg-[#171717] h-20">
      <h2 className="text-[2rem] text-white">Trailermotion</h2>

      <form>
        <input
          className="bg-transparent w-64 p-1"
          type="text"
          placeholder="Search here..."
        ></input>
      </form>
    </div>
  );
};

export default Navbar;
