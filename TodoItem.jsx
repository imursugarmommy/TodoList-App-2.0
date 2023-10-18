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
          {/* {todo.dayOfWeek && todo.date && !todo.selectedTime ? (
            <span>
              Für {todo.dayOfWeek} der {todo.date}
            </span>
          ) : !todo.dayOfWeek && !todo.date && todo.selectedTime ? (
            <span>Für um {todo.selectedTime} Uhr</span>
          ) : !todo.dayOfWeek && !todo.date && !todo.selectedTime ? (
            <span></span>
          ) : (
            <span>
              Für {todo.dayOfWeek} der {todo.date} um {todo.selectedTime} Uhr
            </span>
          )} */}
          {!todo.dayOfWeek ? (
            <span>
              <i className="fa-regular fa-calendar-xmark"></i>
            </span>
          ) : (
            <span>
              Für {todo.dayOfWeek} der {todo.date} um {todo.selectedTime} Uhr
            </span>
          )}
        </p>
        <button onClick={() => deleteTodo(todo.key)}>
          <i className="fa-solid fa-x xmark"></i>
        </button>
      </div>
    </li>
  );
}

export default TodoItem;
