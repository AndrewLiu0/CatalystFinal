import React, { useState } from 'react';
import './App.css';

function App() {
  
  let [tasks, setTasks] = useState([]);
  let [newTask, setNewTask] = useState("");
  let [newDueDate, setNewDueDate] = useState("");

  function addTask() {
    if (newTask.trim() !== "") {
      let newList = [...tasks];
      newList.push({ task: newTask, completed: false, dueDate: newDueDate });
      setTasks(newList);
      setNewTask("");
      setNewDueDate("");
    }
  }

  function removeTask(index) {
    let updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  }

  function toggleCompletion(index) {
    let updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  }

  return (
    <div className="App">
      <h1>Simple To-Do List</h1>
      <div className="instructions">
        <h2>How to Use</h2>
        <ul>
          <li>Enter a new task in the input field.</li>
          <li>Click "Add Task" to add the task to the list.</li>
          <li>Click on a task to mark it as completed (it will be crossed out).</li>
          <li>Click "Remove" to delete a task.</li>
        </ul>
      </div>
      <input 
        type="text" 
        value={newTask} 
        onChange={(e) => setNewTask(e.target.value)} 
        placeholder="Add a new task"
      />

      <input 
        type="date" 
        value={newDueDate} 
        onChange={(e) => setNewDueDate(e.target.value)} 
        placeholder="Select due date"
      />
      <button onClick={addTask}>Add Task</button>
      
      <ul>
        {tasks.map((task, index) => (
          <li key={index} className={task.completed ? 'completed' : ''}>
            <span onClick={() => toggleCompletion(index)} style={{ cursor: 'pointer' }}>
              {task.task}
            </span>
            <span className="due-date">
              {task.dueDate && ` Due: ${task.dueDate}`}
            </span>
            <button onClick={() => removeTask(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
