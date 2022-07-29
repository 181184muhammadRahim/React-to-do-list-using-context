import { createContext, useState } from "react";

export const TodolistContext = createContext();
const TodolistContextProvider = (props) => {
  const [todolist, settodolist] = useState([
    { id: 0, content: "Task 1", done: true },
    { id: 1, content: "Task 2", done: true },
    { id: 2, content: "Task 3", done: true }
  ]);
  const deleteTask = (id) => {
    settodolist(todolist.filter((element) => id !== element.id));
  };

  return (
    <TodolistContext.Provider value={{ todolist, taskdelete: deleteTask }}>
      {props.children}
    </TodolistContext.Provider>
  );
};

export default TodolistContextProvider;
