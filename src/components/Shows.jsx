import React, { useState } from "react";
import ShowItem from "./ShowItem";

const Shows = ({ shows }) => {

  // const getSpacing = () => {
  //   if(shows.length >= 4) {
  //     return "justify-between";
  //   } else if(shows.length === 3 || shows.length === 2) {
  //     return "";
  //   }
  // }

  return (
    <div className={`flex flex-wrap gap-[76px] py-10`}>
      {shows.map((show) => (
        <ShowItem key={show.id} show={show} />
      ))}
    </div>
  );
};

export default Shows;
