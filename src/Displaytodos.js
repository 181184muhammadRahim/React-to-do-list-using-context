import { useContext } from "react";
import { TodolistContext } from "./contexts/TodolistContext";

let Displaytodos = () => {
  const value = useContext(TodolistContext);
  return (
    <ol>
      {value.todolist.map((element) => {
        return (
          <li key={element.id}>
            <div>
              <h2>{element.content}</h2>
              <button
                onClick={() => {
                  value.taskdelete(element.id);
                }}
              >
                Delete Task
              </button>
            </div>
          </li>
        );
      })}
    </ol>
  );
};

export default Displaytodos;
