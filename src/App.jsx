import { useState } from "react";
import { Nav } from "./Nav";
import { Header } from "./Header";
import { Main } from "./Main";

function App() {
  const [lastEdited, setLastEdited] = useState("");
  const [todos, setTodos] = useState([]);
  const [taskCount, setTaskCount] = useState(0);

  return (
    <>
      <div className="wrapper">
        <Nav taskCount={taskCount} />
        <div className="main">
          <Header lastEdited={lastEdited} />
          <Main
            setLastEdited={setLastEdited}
            todos={todos}
            setTodos={setTodos}
            setTaskCount={setTaskCount}
          />
        </div>
      </div>
    </>
  );
}
export default App;
