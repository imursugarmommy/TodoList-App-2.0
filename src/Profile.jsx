import React from "react";
import image from "./images/image.png";

export default function Profile() {
  return (
    <div className="profile">
      <div className="profile-pic">
        <svg className="progress-bar">
          <circle
            cx="50%"
            cy="50%"
            r="75"
            strokeLinecap="round"
          />
        </svg>
        <img
          src={image}
          alt="image"
          className="pic"
        />
        <i className="fa-regular fa-user profile-placeholder"></i>
        <i className="fa-solid fa-camera add-picture"></i>
      </div>
      <h2 className="name">Profile name</h2>
    </div>
  );
}
