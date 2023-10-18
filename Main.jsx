import { useState, useEffect } from "react";
import InputForm from "./InputForm";
import TodoList from "./TodoList";

export function Main({ setLastEdited, todos, setTodos, setTaskCount }) {
  const [todoItem, setTodoItem] = useState("");
  const [deadline, setDeadline] = useState("");

  useEffect(() => {
    const storedTodos = localStorage.getItem("todos");
    if (storedTodos) {
      setTodos(JSON.parse(storedTodos));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));

    setLastEdited(() => ({
      minutes: new Date().getMinutes(),
      hour: new Date().getHours(),
      day: new Date().getDate(),
      month: new Date().getMonth(),
      year: new Date().getFullYear(),
    }));
  }, [todos]);

  function setDateTime(target) {
    if (target === null) {
      setDeadline(() => ({
        ...deadline,
        date: undefined,
        dayOfWeek: undefined,
        selectedTime: undefined,
      }));
      return;
    }

    const dateTimeValue = new Date(target);
    const hour = dateTimeValue.getHours();
    const minutes = dateTimeValue.getMinutes();
    const dayOfWeekInt = dateTimeValue.getDay();
    const dayOfMonth = dateTimeValue.getDate();
    const month = dateTimeValue.getMonth() + 1;
    const year = dateTimeValue.getFullYear();

    const days = [
      "Sonntag",
      "Montag",
      "Dienstag",
      "Mittwoch",
      "Donnerstag",
      "Freitag",
      "Samstag",
    ];
    const date = dayOfMonth + "." + month + "." + year;
    const dayOfWeek = days[dayOfWeekInt];
    const selectedTime =
      (hour < 10 ? "0" + hour : hour) +
      ":" +
      (minutes < 10 ? "0" + minutes : minutes);

    setDeadline(() => ({
      ...deadline,
      date,
      dayOfWeek,
      selectedTime,
    }));
  }

  function addTodo() {
    if (!todoItem) return;

    const item = {
      key: Math.floor(Math.random() * 5000),
      value: todoItem,
      checked: false,
      dayOfWeek: deadline.dayOfWeek,
      date: deadline.date,
      selectedTime: deadline.selectedTime,
    };

    if (item.remainingHours <= 0 && item.remainingMinutes < 0) return;

    setTodos((oldList) => [item, ...oldList]);
    setTodoItem("");
  }

  function toggleTodo(key, completed) {
    setTodos((currentTodos) => {
      return currentTodos.map((todo) => {
        if (todo.key === key) {
          return { ...todo, completed };
        }

        return todo;
      });
    });
  }

  function deleteTodo(key) {
    const newArray = todos.filter((todo) => todo.key !== key);
    setTodos(newArray);
  }

  return (
    <main>
      <InputForm
        todoItem={todoItem}
        setTodoItem={setTodoItem}
        setDateTime={setDateTime}
        addTodo={addTodo}
      />
      <TodoList
        todos={todos}
        toggleTodo={toggleTodo}
        deleteTodo={deleteTodo}
        setTaskCount={setTaskCount}
      />
    </main>
  );
}
