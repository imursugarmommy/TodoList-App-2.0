import React from "react";

export default function Footer() {
  return (
    <div className="footer flex">
      <div className="setting">
        <i className="fa-solid fa-gear"></i>Settings
      </div>
      <div className="templates">
        <i className="fa-regular fa-bookmark"></i>Templates
      </div>
      <div className="search-lists">
        <i className="fa-solid fa-magnifying-glass"></i>Search lists
      </div>
    </div>
  );
}
