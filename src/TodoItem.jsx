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
          {todo.dayOfWeek && todo.date && !todo.selectedTime ? (
            <span>
              Für {todo.dayOfWeek} der {todo.date}
            </span>
          ) : !todo.dayOfWeek && !todo.date && todo.selectedTime ? (
            <span>Für um {todo.selectedTime}</span>
          ) : !todo.dayOfWeek && !todo.date && !todo.selectedTime ? (
            <span></span>
          ) : (
            <span>
              Für {todo.dayOfWeek} der {todo.date} um {todo.selectedTime}
            </span>
          )}

          {/* <>
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
          </> */}
        </p>
        <button onClick={() => deleteTodo(todo.key)}>
          <i className="fa-solid fa-x xmark"></i>
        </button>
      </div>
    </li>
  );
}

export default TodoItem;
