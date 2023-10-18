import React from "react";
import List from "./List";
import Profile from "./Profile";
import Footer from "./Footer";

export function Nav({ taskCount }) {
  return (
    <nav>
      <Profile />
      <div className="lists">
        <ul>
          <List taskCount={taskCount} />
          <List />
          <List />
          <button className="add-list list-item">+ Add Todo List</button>
        </ul>
      </div>
      <Footer />
    </nav>
  );
}
