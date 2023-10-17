import React from "react";
import List from "./List";
import image from "./images/image.png";

export function Nav() {
  return (
    <nav>
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
          <i class="fa-regular fa-user profile-placeholder"></i>
          <i class="fa-solid fa-camera add-picture"></i>
        </div>
        <h2 className="name">Profile name</h2>
      </div>
      <div className="lists">
        <ul>
          <List />
          <button className="add-list list-item">+ Add Todo List</button>
        </ul>
      </div>
      <div className="footer flex">
        <div className="setting">
          <i class="fa-solid fa-gear"></i>Settings
        </div>
        <div className="templates">
          <i class="fa-regular fa-bookmark"></i>Templates
        </div>
        <div className="search-lists">
          <i class="fa-solid fa-magnifying-glass"></i>Search lists
        </div>
      </div>
    </nav>
  );
}
