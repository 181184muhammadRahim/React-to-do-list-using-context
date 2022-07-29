import React from "react";
import "./styles.css";
import TodolistContextProvider from "./contexts/TodolistContext";
import Displaytodos from "./Displaytodos";
export default function App() {
  return (
    <div className="App">
      <TodolistContextProvider>
        <Displaytodos />
      </TodolistContextProvider>
    </div>
  );
}
