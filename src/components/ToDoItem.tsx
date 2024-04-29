export interface ToDoItem {
  toDoItemString: string;
  toDoItemDate: Date;
}

export const ToDoListItem: React.FC<{
  toDoItem: ToDoItem;
  handleToDoItem: (removeToDo: ToDoItem) => void;
}> = ({ toDoItem, handleToDoItem }) => {
  return (
    <li className="flex flex-wrap text-center justify-evenly bg-slate-100 border-slate-800 border-b-2 hover:bg-slate-300 items-center">
      <div className="flex-1">{toDoItem.toDoItemString}</div>
      <div className="flex-0 m-2 md:m-4 lg:m-8">
        {toDoItem.toDoItemDate.toLocaleDateString()}
      </div>
      <button
        className="flex-0 m-2 md:m-4 lg:m-8 min-h-10 min-w-10 sm:min-w-24 border-2 rounded-full border-gray-700 hover:bg-red-700 hover:text-gray-200"
        type="button"
        onClick={() => handleToDoItem(toDoItem)}
      >
        Remove
      </button>
    </li>
  );
};
