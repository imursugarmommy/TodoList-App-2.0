import { useEffect, useState } from "react";
import { Nav } from "./Nav";
import MainContent from "./MainContent";

function App() {
  const [lists, setLists] = useState([]);
  console.log(lists);
  const [taskCount, setTaskCount] = useState(0);
  const [inputValue, setInputValue] = useState([]);
  const [neccessaryVars, setNeccessaryVars] = useState([
    // for each todo List one Object
    {
      key: 0,
      name: "",
      tasksQuantity: 0,
      checkedTasks: "",
      maxTasks: "",
      time: "",
      date: "",
      tags: [],
      lastEdited: "",
      todos: [{}],
    },
  ]);

  // useEffect(() => {
  //   setNeccessaryVars((prev) => {
  //     return {
  //       ...prev,
  //       [inputValue.value]: {
  //         key: Math.random(),
  //         todos,
  //         tasksQuantity: taskCount,
  //         name: inputValue.value,
  //         lastEdited,
  //       },
  //     };
  //   });

  //   console.log(neccessaryVars);
  // }, []);

  return (
    <>
      <div className="wrapper">
        <Nav
          taskCount={taskCount}
          setInputValue={setInputValue}
          lists={lists}
          setLists={setLists}
        />
        <div className="list-mains">
          {lists.map((list) => {
            return (
              <MainContent
                list={list}
                inputValue={inputValue}
                setTaskCount={setTaskCount}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}
export default App;
