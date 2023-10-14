import React from "react";

function InputForm({
  todoItem,
  setTodoItem,
  // setTime,
  // setDay,
  setDateTime,
  addTodo,
}) {
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
          type="datetime-local"
          onChange={(e) => setDateTime(e.target.value)}
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
