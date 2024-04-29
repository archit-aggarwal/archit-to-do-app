import { useState } from "react";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { ToDoInserter } from "./components/ToDoInserter";
import { ToDoList } from "./components/ToDoList";
import { ToDoItem } from "./components/ToDoItem";

export function App() {
  const [toDoItems, setToDoItems] = useState<ToDoItem[]>([]);

  const addToDoItem = (newToDo: ToDoItem): void => {
    console.log(`New Item: ${newToDo.toDoItemString}, ${newToDo.toDoItemDate}`);
    const newToDoItems = [...toDoItems, newToDo];
    setToDoItems(newToDoItems);
  };

  const removeToDoItem = (removeToDo: ToDoItem): void => {
    console.log(
      `Remove Item: ${removeToDo.toDoItemString}, ${removeToDo.toDoItemDate}`
    );

    const newToDoItems = toDoItems.filter((item) => item !== removeToDo);
    setToDoItems(newToDoItems);
  };

  return (
    <div className="pt-6 pl-1 pr-1 md:pl-4 md:pr-4 lg:pl-32 lg:pr-32">
      <Header />
      <ToDoInserter handleToDoItem={addToDoItem} />
      <ToDoList toDoItems={toDoItems} handleToDoItem={removeToDoItem} />
      <Footer />
    </div>
  );
}
