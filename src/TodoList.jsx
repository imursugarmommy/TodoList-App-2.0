import React from "react";
import TodoItem from "./TodoItem";

function TodoList({ todos, toggleTodo, deleteTodo }) {
  return (
    <div className="todo-list">
      <ul className="todos">
        {todos.map((todo) => {
          return (
            <TodoItem
              key={todo.key}
              todo={todo}
              toggleTodo={toggleTodo}
              deleteTodo={deleteTodo}
            />
          );
        })}
      </ul>
    </div>
  );
}

export default TodoList;
