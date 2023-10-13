import React from "react";

function TodoItem({ todo, toggleTodo, deleteTodo }) {
  return (
    <li
      className="todo-item flex"
      key={todo.key}>
      <div className="flex">
        <input
          type="checkbox"
          className="checkbox ui-checkbox"
          onClick={(e) => toggleTodo(todo.key, e.target.checked)}
        />
        <p className="todo-text">{todo.value}</p>
      </div>
      <div className="flex">
        <p className="time">
          {/* {todo.remainingHours === 0 && todo.remainingMinutes === 0 ? ( */}
          <>
            <span>
              {todo.remainingMinutes < 0
                ? todo.remainingHours - 1
                : todo.remainingHours}
              h
            </span>
            <span>
              {todo.remainingMinutes < 0
                ? todo.remainingMinutes + 60
                : todo.remainingMinutes}
              min
            </span>
          </>
          {/* ) : (
            <span></span>
          )} */}
        </p>
        <button onClick={() => deleteTodo(todo.key)}>
          <i className="fa-solid fa-x xmark"></i>
        </button>
      </div>
    </li>
  );
}

export default TodoItem;
