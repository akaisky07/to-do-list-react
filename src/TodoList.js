import React, { useState } from "react";

// Import the background image
import backgroundImage from "./header.png"; // Replace with the actual image path

function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const addTask = () => {
    if (newTask.trim() !== "") {
      setTasks([...tasks, { text: newTask, completed: false }]);
      setNewTask("");
      setIsModalOpen(false); // Close the modal after adding a task
    }
  };

  const toggleCompletion = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  };

  const completedTasks = tasks.filter((task) => task.completed).length;
  const totalTasks = tasks.length;

  return (
    <div>
      <div
        style={{
          background: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          padding: "20px" // Add padding to create some space around the text
        }}
      >
        <h1>To-Do</h1>
      </div>

      <div>
        <h2>Task List</h2>

        <div style={{ border: "1px solid #ccc", padding: "10px" }}>
          <div style={{ float: "right", fontSize: "18px" }}>
            {completedTasks} / {totalTasks} tasks completed
          </div>

          <ul>
            {tasks.map((task, index) => (
              <li
                key={index}
                style={{
                  listStyle: "none",
                  textDecoration: task.completed ? "line-through" : "none"
                }}
              >
                <label>
                  <input
                    type="checkbox"
                    checked={task.completed}
                    onChange={() => toggleCompletion(index)}
                  />
                  {task.text}
                </label>
              </li>
            ))}
          </ul>

          <button onClick={() => setIsModalOpen(true)}>Add Task</button>
        </div>

        {isModalOpen && (
          <div className="modal">
            <div className="modal-content">
              <span className="close" onClick={() => setIsModalOpen(false)}>
                &times;
              </span>
              <h3>Add Task</h3>
              <input
                type="text"
                placeholder="Enter task"
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)}
              />
              <button onClick={addTask}>Add</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default TodoList;
