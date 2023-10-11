import React from "react";

export function Nav() {
  return (
    <nav>
      <div className="profile">
        <img
          src=""
          alt=""
        />
        <svg></svg>
        <h2 className="name">Profile name</h2>
      </div>
      <div className="lists">
        <ul>Todo List</ul>
      </div>
      <div className="footer flex">
        <div className="setting">Settings</div>
        <div className="templates">Templates</div>
        <div className="search-lists">Search lists</div>
      </div>
    </nav>
  );
}
