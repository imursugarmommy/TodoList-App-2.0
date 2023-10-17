import React from "react";

export default function List() {
  return (
    <li className="list-item active">
      <p className="tasks">13 Tasks</p>
      <h3 className="list-name">Todo List</h3>
      <div className="line">
        <div className="progress"></div>
      </div>
    </li>
  );
}
