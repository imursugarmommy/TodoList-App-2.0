import { useState } from "react";
import { Header } from "./Header";
import { Main } from "./Main";

export default function MainContent({ inputValue, setTaskCount, list }) {
  const [todos, setTodos] = useState([]);
  const [lastEdited, setLastEdited] = useState("");

  // ! list
  // accentClr: "";
  // backgroundClr: "";
  // key: 59692;
  // maxTodos: 0;
  // textClr: "";
  // value: "asdw";

  // ! todos
  // checked: false;
  // date: "31.10.2023";
  // dayOfWeek: "Dienstag";
  // key: 2913;
  // selectedTime: "15:40";
  // value: "asdw";

  // ! lastEdited
  // day: 20;
  // hour: 15;
  // minutes: 36;
  // month: 9;
  // year: 2023;

  return (
    <div className="main">
      <Header
        lastEdited={lastEdited}
        inputValue={inputValue}
      />
      <Main
        setLastEdited={setLastEdited}
        todos={todos}
        setTodos={setTodos}
        setTaskCount={setTaskCount}
      />
    </div>
  );
}
