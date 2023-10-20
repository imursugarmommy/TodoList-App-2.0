import React, { useEffect } from "react";

export default function List({
  taskCount,
  deleteList,
  lists,
  setInputValue,
  toggleActive,
}) {
  useEffect(() => {
    setInputValue((prev) => {
      return { ...prev, value: lists.value };
    });
  }, []);

  return (
    <li
      onClick={(e) => toggleActive(e.target)}
      key={lists.key}
      className="list-item no-active"
      style={{ background: lists.backgroundClr }}>
      <div className="box flex">
        <p
          className="tasks"
          style={{ color: lists.accentClr }}>
          {!lists.maxTodos || lists.maxTodos === 0
            ? taskCount
            : taskCount + "/" + lists.maxTodos}{" "}
          Tasks
        </p>
        <i
          className="fa-solid fa-trash"
          style={{ color: lists.accentClr }}
          onClick={() => deleteList(lists.key)}></i>
      </div>
      <h3
        className="list-name"
        style={{ color: lists.textClr }}>
        {!lists.value ? "New List" : lists.value}
      </h3>
      <div
        className="line"
        style={{ background: lists.accentClr }}>
        <div
          className="progress"
          style={{
            background: lists.accentClr,
            boxShadow:
              "0 0 15px " + lists.accent !== ""
                ? lists.accent
                : "var(--accent-clr700)",
          }}></div>
      </div>
    </li>
  );
}
