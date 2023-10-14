import React from "react";
import { Nav } from "./Nav";
import { Header } from "./Header";
import { Main } from "./Main";

function App() {
  return (
    <>
      <div className="wrapper">
        <Nav />
        <div className="main">
          <Header />
          <Main />
        </div>
      </div>
    </>
  );
}

export default App;
