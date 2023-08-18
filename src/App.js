import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid'; // Import uuidv4 properly
import DeleteTodo from './components/DeleteTodo';
import EditPage from './pages/EditPage';

function App() {
  const [todoList, setTodoList] = useState(["cooking", "cleaning", "shopping"]);
  const [input, setInput] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(null);

  function handleChange(e) {
    setInput(e.target.value);
  }

  function handleEdit(index, newText) {
    const updatedTodoList = [...todoList];
    updatedTodoList[index] = newText;
    setTodoList(updatedTodoList);
    setSelectedIndex(null); // Clear the selected index after editing
  }

  function handleDelete(index) {
    const updatedTodoList = todoList.filter((_, i) => i !== index);
    setTodoList(updatedTodoList);
  }

  function submit(e) {
    e.preventDefault();
    if (input.trim() !== "") {
      setTodoList([...todoList, input]);
      setInput("");
    }
  }

  return (
    <div className="App">
      <div>
        Create Todo
        <input type="text" name="writeTodo" onChange={handleChange} value={input} />
        <button onClick={submit}>Add</button>
      </div>
      <div>
        <h3>Show todo:</h3>
        <ol>
          {todoList.map((item, index) => (
            <li key={uuidv4()}>
              {item}
              <span>
                <button onClick={() => setSelectedIndex(index)}>Edit</button>
                <DeleteTodo
                  todoIndex={index}
                  onDelete={handleDelete}
                />
              </span>
            </li>
          ))}
        </ol>
        {selectedIndex !== null && (
          <EditPage
            todoIndex={selectedIndex}
            todoText={todoList[selectedIndex]}
            onEdit={handleEdit}
          />
        )}
      </div>
    </div>
  );
}

export default App;
