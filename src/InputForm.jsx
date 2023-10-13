import React from "react";

function InputForm({ todoItem, setTodoItem, setTime, setDay, addTodo }) {
  return (
    <div className="input-form flex">
      <div className="input-box">
        <input
          className="add"
          type="text"
          placeholder="Create new todo"
          value={todoItem}
          onChange={(e) => setTodoItem(() => e.target.value)}
        />
        <input
          type="date"
          onChange={(e) => setDay(e.target.valueAsDate)}
        />
        <input
          type="time"
          className="fa-calender"
          onChange={(e) => setTime(e.target.value)}
        />
      </div>
      <button
        className="add"
        onClick={() => addTodo()}>
        Add todo
      </button>
    </div>
  );
}

export default InputForm;
