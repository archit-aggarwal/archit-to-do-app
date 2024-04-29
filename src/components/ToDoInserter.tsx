import { ChangeEvent, useState } from "react";
import Datepicker from "tailwind-datepicker-react";
import { ToDoItem } from "./ToDoItem";

export const ToDoInserter: React.FC<{
  handleToDoItem: (newToDo: ToDoItem) => void;
}> = ({ handleToDoItem }) => {
  const [show, setShow] = useState(false);

  const handleClose = (state: boolean): void => {
    setShow(state);
  };

  const [toDoItem, setToDoItem] = useState<ToDoItem>({
    toDoItemString: "",
    toDoItemDate: new Date(),
  });

  const handleAddToDoString = (event: ChangeEvent<HTMLInputElement>) => {
    const newToDoItem = { ...toDoItem };
    newToDoItem.toDoItemString = event.target.value;
    setToDoItem(newToDoItem);
  };

  const handleAddToDoDate = (selectedDate: Date): void => {
    const newToDoItem = { ...toDoItem };
    newToDoItem.toDoItemDate = selectedDate;
    setToDoItem(newToDoItem);
  };

  const handleAddToDoClick = () => {
    handleToDoItem(toDoItem);
    setToDoItem({ toDoItemString: "", toDoItemDate: new Date() });
  };

  return (
    <div className="flex flex-wrap m-2 p-4 justify-around">
      <input
        type="text"
        placeholder="Enter Todo Here!"
        id="todo_item_string"
        className="min-w-10 max-w-40 h-10 m-2 border-2 hover:border-b-4 text-center cursor-pointer rounded-lg border-gray-700"
        value={toDoItem.toDoItemString}
        onChange={handleAddToDoString}
      />
      <Datepicker
        onChange={handleAddToDoDate}
        show={show}
        setShow={handleClose}
        classNames="max-w-40 pt-2"
        value={toDoItem.toDoItemDate}
      />
      <button
        type="button"
        className="bg-gray-200 h-10 m-2 border-2 border-gray-700
         hover:bg-green-700 hover:text-gray-200 rounded-full min-w-10 sm:min-w-20"
        onClick={handleAddToDoClick}
      >
        Add
      </button>
    </div>
  );
};
