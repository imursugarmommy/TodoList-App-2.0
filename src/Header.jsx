import React from "react";

export function Header() {
  return (
    <header>
      <div className="flex">
        <h2 className="list-name">Todo List</h2>
        <i className="fa-search"></i>
        <i className="fa-bell"></i>
      </div>
      <p className="bearbeitet">Zuletzt bearbeitet am 13. Sep 2023</p>
    </header>
  );
}
