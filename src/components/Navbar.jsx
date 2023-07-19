import React from "react";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center px-5 h-20 absolute top-0 left-0 right-0 bottom-0">
      <h2 className="text-[2rem] text-white">Trailermotion</h2>

      <ul className="flex justify-around gap-6">
        <li>
          <a className="text-white" href="#">Home</a>
        </li>
        <li>
          <a className="text-white" href="#">Movies</a>
        </li>
        <li>
          <a className="text-white" href="#">TV Shows</a>
        </li>
        <li>
          <a className="text-white" href="#">Categories</a>
        </li>
        <li>
          <a className="text-white" href="#">Pricing</a>
        </li>
        <li>
          <a className="text-white" href="#">About</a>
        </li>
      </ul>

      <form>
        <input
          className=" bg-gray-900 w-64 px-2 py-2 text-white outline-none"
          type="text"
          placeholder="Search here..."
        ></input>
      </form>
    </div>
  );
};

export default Navbar;
