import React, { useState } from "react";
import { MdDelete } from "react-icons/md";

function Todo() {
  const [input, setInput] = useState("");
  const [todo, setTodo] = useState([]);
  const MAX_TODO = 5;

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleAddTodo = (e) => {
    e.preventDefault();
    if (todo.length >= MAX_TODO) {
      alert("Cannot add more than 4 todos.");
      return;
    }
    if (input.trim() !== "") {
      setTodo([...todo, input]);
      setInput("");
    }
  };

  const handleDelete = (index) => {
    setTodo(todo.filter((_, m) => m !== index));
  };

  return (
    <div>
      <main className="bg-white m-8 p-8">
        <form onSubmit={handleAddTodo}>
          <h3 className="font-bold text-blue-500">Fun TODO</h3>
          <div className="todo flex gap-4 mb-4">
            <input
              value={input}
              onChange={handleInputChange}
              type="text"
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Add a new todo"
            />
            <button
              type="submit"
              className="bg-blue-700 p-4 text-white rounded"
            >
              ADD
            </button>
          </div>
        </form>
        <ul>
          {todo.map((item, index) => (
            <li
              className="bg-red-500 mb-4 text-white p-4 flex justify-between items-center rounded"
              key={index}
            >
              {item}
              <button
                className="bg-red-700 p-2 rounded hover:bg-red-800"
                onClick={() => handleDelete(index)}
              >
                <MdDelete />
              </button>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}

export default Todo;
