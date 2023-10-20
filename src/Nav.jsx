import React, { useState } from "react";
import List from "./List";
import Profile from "./Profile";
import Footer from "./Footer";

export function Nav({ taskCount, setInputValue, lists, setLists }) {
  const [modal, setModal] = useState(false);
  const [rangeValue, setRangeValue] = useState(0);
  const [values, setValues] = useState({
    tags: "",
    background: "",
    text: "",
    accent: "",
    name: "",
  });

  function addList() {
    if (!values.name) return;

    toggleModal();

    const item = {
      key: Math.floor(Math.random() * 100000),
      value: values.name,
      backgroundClr: values.background,
      textClr: values.text,
      accentClr: values.accent,
      maxTodos: rangeValue,
    };

    setLists((oldList) => [item, ...oldList]);
    setValues((prev) => {
      return { ...prev, name: "" };
    });
  }

  function deleteList(key) {
    const newArray = lists.filter((list) => list.key !== key);
    setLists(newArray);
  }

  const toggleModal = () => {
    setModal(!modal);
    setValues(() => {
      return {
        background: "",
        text: "",
        accent: "",
      };
    });
    setRangeValue(0);
  };

  function toggleCollapside(target) {
    if (!target.classList.contains("fa-chevron-right")) return;
    const contentDiv = target.parentNode;

    if (!contentDiv.classList.contains("active")) {
      contentDiv.classList.add("active");
      target.style.rotate = "90deg";
    } else {
      contentDiv.classList.remove("active");
      target.style.rotate = " 0deg";
    }
  }

  function handleRangeChange(target) {
    const checkBox = target.parentNode.parentNode.querySelector(".check");

    if (!checkBox.checked) return;

    setRangeValue(target.value);
  }

  function handleValueChange(target) {
    setValues((prev) => {
      return { ...prev, [target.name]: target.value };
    });
  }

  function handleReset() {
    setValues(() => {
      return {
        background: "",
        text: "",
        accent: "",
      };
    });
    setRangeValue(0);
  }

  function toggleActive(target) {
    const listItem = target.closest(".list-item");

    if (listItem.classList.contains("active")) {
      listItem.classList.remove("active");
      listItem.classList.add("no-active");
    } else {
      listItem.classList.add("active");
      listItem.classList.remove("no-active");
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
              <div className="modal-header flex">
                <h1>Add New List</h1>
                <div className="icons flex">
                  <svg
                    onClick={handleReset}
                    xmlns="http://www.w3.org/2000/svg"
                    width="35"
                    height="35"
                    fill="currentColor"
                    className="bi bi-arrow-counterclockwise"
                    viewBox="0 0 16 16">
                    <path
                      fillRule="evenodd"
                      d="M8 3a5 5 0 1 1-4.546 2.914.5.5 0 0 0-.908-.417A6 6 0 1 0 8 2v1z"
                    />
                    <path d="M8 4.466V.534a.25.25 0 0 0-.41-.192L5.23 2.308a.25.25 0 0 0 0 .384l2.36 1.966A.25.25 0 0 0 8 4.466z" />
                  </svg>
                  <svg
                    onClick={toggleModal}
                    xmlns="http://www.w3.org/2000/svg"
                    width="50"
                    height="50"
                    fill="currentColor"
                    className="bi bi-x"
                    viewBox="0 0 16 16">
                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                  </svg>
                </div>
              </div>
              <input
                type="text"
                placeholder="e.g. Shopping List"
                className="list-name-input"
                name="name"
                value={values.name ? values.name : ""}
                onChange={(e) => handleValueChange(e.target)}
              />
              <div className="overflow">
                <div className="settings">
                  <div
                    className="add-tags"
                    onClick={(e) => toggleCollapside(e.target)}>
                    Add Tags
                    <i className="fa-solid fa-chevron-right"></i>
                    <div className="settings-content">
                      <textarea
                        name="tags"
                        className="text-field"
                        cols="30"
                        rows="1"
                        value={values.tags}
                        onChange={(e) => handleValueChange(e.target)}>
                        {values.tags}
                      </textarea>
                      <p>Add tags, seperate with comma e.g tag1, tag2, tag3</p>
                    </div>
                  </div>
                  <div
                    className="max-tasks"
                    onClick={(e) => toggleCollapside(e.target)}>
                    Max Tasks
                    <i className="fa-solid fa-chevron-right"></i>
                    <div className="settings-content">
                      <label className="switch">
                        <input
                          type="checkbox"
                          className="check"
                          onClick={() => setRangeValue(0)}
                        />
                        <span className="slider"></span>
                      </label>
                      <div className="range-input">
                        <input
                          style={{ display: "block" }}
                          type="range"
                          id="vol"
                          className="max-todos"
                          name="vol"
                          min="1"
                          max="25"
                          value={rangeValue}
                          onChange={(e) => handleRangeChange(e.target)}
                        />
                        <p>{rangeValue === 0 ? "No Limit" : rangeValue}</p>
                      </div>
                    </div>
                  </div>
                  <div
                    className="color-picker"
                    onClick={(e) => toggleCollapside(e.target)}>
                    Custom Color
                    <i className="fa-solid fa-chevron-right"></i>
                    <div className="settings-content">
                      <div className="color-inputs flex">
                        <div className="style1 ">
                          <div className="input-wrapper">
                            <p>
                              Color:{" "}
                              {!values.background
                                ? "#000000"
                                : values.background}
                            </p>
                            <input
                              type="color"
                              name="background"
                              className="background-clr-input"
                              value={
                                !values.background
                                  ? "#000000"
                                  : values.background
                              }
                              onChange={(e) => handleValueChange(e.target)}
                            />
                            <p className="describtion">Background Color</p>
                          </div>
                        </div>
                        <div className="style2 ">
                          <div className="input-wrapper">
                            <p>
                              Color: {!values.text ? "#000000" : values.text}
                            </p>
                            <input
                              type="color"
                              name="text"
                              className="text-clr-input"
                              value={!values.text ? "#000000" : values.text}
                              onChange={(e) => handleValueChange(e.target)}
                            />
                            <p className="describtion">Text Color</p>
                          </div>
                        </div>
                        <div className="style3 ">
                          <div className="input-wrapper">
                            <p>
                              Color:{" "}
                              {!values.accent ? "#000000" : values.accent}
                            </p>
                            <input
                              type="color"
                              name="accent"
                              className="accent-clr-input"
                              value={!values.accent ? "#000000" : values.accent}
                              onChange={(e) => handleValueChange(e.target)}
                            />
                            <p className="describtion">Accent Color</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="preview"
                    onClick={(e) => toggleCollapside(e.target)}>
                    Preview
                    <i className="fa-solid fa-chevron-right"></i>
                    <div className="settings-content">
                      <div
                        className="list-item no-active"
                        style={{ background: values.background }}>
                        <div className="box flex">
                          <p
                            className="tasks"
                            style={{ color: values.accent }}>
                            {!rangeValue || rangeValue === 0
                              ? "0"
                              : "0/" + rangeValue}{" "}
                            Tasks
                          </p>
                          <i
                            className="fa-solid fa-trash"
                            style={{ color: values.accent }}></i>
                        </div>
                        <h3
                          className="list-name"
                          style={{ color: values.text }}>
                          {!values.name ? "New List" : values.name}
                        </h3>
                        <div className="line">
                          <div className="progress"></div>
                        </div>
                      </div>
                      <div
                        className="list-item active"
                        style={{ background: values.background }}>
                        <div className="box flex">
                          <p
                            className="tasks"
                            style={{ color: values.accent }}>
                            {!rangeValue || rangeValue === 0
                              ? "0"
                              : "0/" + rangeValue}{" "}
                            Tasks
                          </p>
                          <i
                            className="fa-solid fa-trash"
                            style={{ color: values.accent }}></i>
                        </div>
                        <h3
                          className="list-name"
                          style={{ color: values.text }}>
                          {!values.name ? "New List" : values.name}
                        </h3>
                        <div
                          className="line"
                          style={{ background: values.text }}>
                          <div
                            className="progress"
                            style={{
                              background: values.accent,
                              boxShadow:
                                "0 0 15px " + values.accent !== ""
                                  ? values.accent
                                  : "var(--accent-clr700)",
                            }}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <button
                className="add-list-btn"
                onClick={addList}>
                Add List
              </button>
            </div>
          </>
        ) : (
          <span style={{ position: "absolute", pointerEvents: "none" }}></span>
        )}

        <ul>
          <button
            key="add-btn"
            className="add-list list-item"
            onClick={toggleModal}>
            + Add Todo List
          </button>
          {lists.map((list) => (
            <List
              lists={list}
              taskCount={taskCount}
              deleteList={deleteList}
              setInputValue={setInputValue}
              toggleActive={toggleActive}
            />
          ))}
        </ul>
      </div>
      <Footer />
    </nav>
  );
}
