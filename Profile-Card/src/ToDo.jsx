import React, { useState } from "react";

function ToDo() {
  const [tasl, setTask] = useState(
    "i am  react developer",
    " I am an unemployed person"
  );
  const [newTask, setNewTask] = useState("");

  function handleInputChange() {
    
  }

  function addTask() {}

  function deleteTask() {}

  function moveTaskUp() {}

  function moveTaskDown() {}

  return (
    <div className="to-do-list">
      <h1>ToDo List</h1>
      <div>
        <input
          type="text"
          placeholder="Enter the todo task "
          value={newTask}
          onChange={handleInputChange}
        />
        <button className="add-button" onClick={addTask}>
          SET
        </button>
      </div>
      <ol>
        {addTask.map((addTask, index) => (
          <li key={index}>
            <span>{task}</span>

          </li>
        ))}
      </ol>
    </div>
  );
}

export default ToDo;
