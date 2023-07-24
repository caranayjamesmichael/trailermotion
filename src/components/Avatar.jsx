import React, { useState } from "react";

import profileIcon from "../assets/images/profile.png";
import starIcon from "../assets/images/star.png";

const Avatar = ({ isUserLoggedIn }) => {
  const [avatar, setAvatar] = useState(profileIcon);
  const [avatarName, setAvatarName] = useState("Anonymous");
  const [avatarLevel, setAvatarLevel] = useState(0);

  return (
    <div className="flex gap-3">
      <img
        className="rounded-full w-12 border-2 border-red-600 p-[3px]"
        src={isUserLoggedIn === true ? starIcon : avatar}
      ></img>
      <div className="flex flex-col">
        <p className="text-white">{avatarName}</p>
        <p className="text-[#676a7c]">{avatarLevel}</p>
      </div>
    </div>
  );
};

export default Avatar;
