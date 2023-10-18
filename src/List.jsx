import React from "react";

export default function List({ taskCount }) {
  return (
    <li className="list-item no-active">
      <p className="tasks">{taskCount ? taskCount : 0} Tasks</p>
      <h3 className="list-name">Todo List</h3>
      <div className="line">
        <div className="progress"></div>
      </div>
    </li>
  );
}
