import { ToDoItem, ToDoListItem } from "./ToDoItem";

interface ToDoListProps {
  toDoItems: ToDoItem[];
  handleToDoItem: (newToDo: ToDoItem) => void;
}

export const ToDoList: React.FC<ToDoListProps> = ({
  toDoItems,
  handleToDoItem,
}) => {
  return (
    <>
      <ul className="border-gray-800 border-4 rounded-lg mb-4 flex-col text-center">
        {toDoItems.map((toDoItem: ToDoItem, index: number) => (
          <ToDoListItem
            toDoItem={toDoItem}
            handleToDoItem={handleToDoItem}
            key={index}
          />
        ))}
      </ul>
    </>
  );
};
