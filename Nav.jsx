import React, { useState } from "react";
import List from "./List";
import Profile from "./Profile";
import Footer from "./Footer";

export function Nav({ taskCount }) {
  const [listItem, setListItem] = useState("");
  const [lists, setLists] = useState([]);
  const [modal, setModal] = useState(false);

  function addList() {
    // if (!listItem) return;
    // const item = {
    //   key: Math.floor(Math.random() * 5000),
    //   value: todoItem,
    //   checked: false,
    //   dayOfWeek: deadline.dayOfWeek,
    //   date: deadline.date,
    //   selectedTime: deadline.selectedTime,
    // };
    // if (item.remainingHours <= 0 && item.remainingMinutes < 0) return;
    // setTodos((oldList) => [item, ...oldList]);
    // setTodoItem("");
  }

  function deleteList(key) {
    const newArray = lists.filter((list) => list.key !== key);
    setLists(newArray);
  }

  const toggleModal = () => {
    setModal(!modal);
  };

  function toggleCollapside(target) {
    if (!target.classList.contains("fa-solid")) return;
    const contentDiv = target.parentNode;

    if (!contentDiv.classList.contains("active")) {
      contentDiv.classList.add("active");
      target.style.rotate = "90deg";
    } else {
      contentDiv.classList.remove("active");
      target.style.rotate = " 0deg";
    }
  }

  return (
    <nav>
      <Profile />
      <div className="lists">
        {modal ? (
          <>
            <div
              className="overlay"
              onClick={toggleModal}></div>
            <div className="list-input">
              <h1>Add New List</h1>
              <input
                type="text"
                placeholder="e.g. Shopping List"
                className="list-name-input"
              />
              <div className="settings">
                <div
                  className="add-tags"
                  onClick={(e) => toggleCollapside(e.target)}>
                  Add Tags
                  <i className="fa-solid fa-chevron-right"></i>
                  <div className="settings-content">Content</div>
                </div>
                <div
                  className="color-picker"
                  onClick={(e) => toggleCollapside(e.target)}>
                  Custom Color
                  <i className="fa-solid fa-chevron-right"></i>
                  <div className="settings-content">Content</div>
                </div>
                <div
                  className="max-tasks"
                  onClick={(e) => toggleCollapside(e.target)}>
                  Max Tasks
                  <i className="fa-solid fa-chevron-right"></i>
                  <div className="settings-content">Content</div>
                </div>
                <div
                  className="preview"
                  onClick={(e) => toggleCollapside(e.target)}>
                  Preview
                  <i className="fa-solid fa-chevron-right"></i>
                  <div className="settings-content">Content</div>
                </div>
              </div>
              <button
                className="add-list-btn"
                onClick={(addList, toggleModal)}>
                Add List
              </button>
            </div>
          </>
        ) : (
          <span style={{ position: "absolute", pointerEvents: "none" }}></span>
        )}
        <ul>
          {lists.map((list) => (
            <List
              list={list}
              taskCount={taskCount}
              deleteList={deleteList}
            />
          ))}
          <button
            className="add-list list-item"
            onClick={toggleModal}>
            + Add Todo List
          </button>
        </ul>
      </div>
      <Footer />
    </nav>
  );
}
