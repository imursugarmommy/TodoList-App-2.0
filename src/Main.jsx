import { useState, useEffect } from "react";
import InputForm from "./InputForm";
import TodoList from "./TodoList";

export function Main() {
  const [todoItem, setTodoItem] = useState("");
  const [todos, setTodos] = useState([]);
  const [deadline, setDeadline] = useState("");

  useEffect(() => {
    const storedTodos = localStorage.getItem("todos");
    if (storedTodos) {
      setTodos(JSON.parse(storedTodos));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  function setTime(target) {
    const selectedTime = target;
    const hour = selectedTime.split(":")[0];
    const minutes = selectedTime.split(":")[1];

    setDeadline(() => ({
      ...deadline,
      selectedTime,
      hour,
      minutes,
    }));
  }

  function setDay(target) {
    const selectedDay = target;
    const dayOfWeek = selectedDay.getDay();
    const dayOfMonth = selectedDay.getDate();
    const month = selectedDay.getMonth();
    const year = selectedDay.getFullYear();
    const days = [
      "Sonntag",
      "Montag",
      "Dienstag",
      "Mittwoch",
      "Donnerstag",
      "Freitag",
      "Samstag",
    ];

    setDeadline(() => ({
      ...deadline,
      dayOfWeek: days[dayOfWeek],
      date: dayOfMonth + "." + month + "." + year,
    }));
  }

  function addTodo() {
    if (!todoItem) return;

    // if (!deadline) return;

    // const date = new Date();
    // const currentHour = date.getHours();
    // const currentMinutes = date.getMinutes();

    const item = {
      key: Math.floor(Math.random() * 5000),
      value: todoItem,
      checked: false,
      time: deadline.selectedTime,
      dayOfWeek: deadline.dayOfWeek,
      date: deadline.date,
      selectedTime: deadline.selectedTime,
      // remainingHours: parseInt(deadline.hour) - currentHour,
      // remainingMinutes: parseInt(deadline.minutes) - currentMinutes,
    };

    if (item.remainingHours <= 0 && item.remainingMinutes < 0) return;

    setTodos((oldList) => [...oldList, item]);
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
        setTime={setTime}
        setDay={setDay}
        addTodo={addTodo}
      />
      <TodoList
        todos={todos}
        toggleTodo={toggleTodo}
        deleteTodo={deleteTodo}
      />
    </main>
  );
}
