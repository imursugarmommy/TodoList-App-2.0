import React, { useEffect } from "react";
import TodoItem from "./TodoItem";

function TodoList({ todos, toggleTodo, deleteTodo, setTaskCount }) {
  useEffect(() => {
    setTaskCount(todos.length);
  }, [todos]);

  return (
    <div className="todo-list">
      <ul className="todos">
        {/* {todos.lenght === 0 ? ( */}
        {
          todos.map((todo) => {
            return (
              <TodoItem
                key={todo.key}
                todo={todo}
                toggleTodo={toggleTodo}
                deleteTodo={deleteTodo}
              />
            );
          })
          // ) : (
          // <p className="no-todos">No todos here...</p>
          // )
        }
      </ul>
    </div>
  );
}

export default TodoList;
