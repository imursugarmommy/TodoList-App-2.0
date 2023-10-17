import { useState } from "react";
import { Nav } from "./Nav";
import { Header } from "./Header";
import { Main } from "./Main";

function App() {
  const [lastEdited, setLastEdited] = useState("");
  return (
    <>
      <div className="wrapper">
        <Nav />
        <div className="main">
          <Header lastEdited={lastEdited} />
          <Main setLastEdited={setLastEdited} />
        </div>
      </div>
    </>
  );
}
export default App;
