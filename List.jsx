import React from "react";

export default function List({ taskCount, deleteList, list }) {
  return (
    <li className="list-item no-active">
      <div className="box flex">
        <p className="tasks">{taskCount ? taskCount : 0} Tasks</p>
        <i className="fa-solid fa-trash"></i>
      </div>
      <h3 className="list-name">Todo List</h3>
      <div className="line">
        <div className="progress"></div>
      </div>
    </li>
  );
}
