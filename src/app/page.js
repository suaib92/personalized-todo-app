"use client";
import { useState, useEffect } from 'react';

export default function Home() {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState('');
  const [editIndex, setEditIndex] = useState(null);
  const [editText, setEditText] = useState('');

  // Load tasks from localStorage on component mount
  useEffect(() => {
    console.log('Loading tasks from localStorage');
    const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    setTasks(savedTasks);
  }, []);

  // Save tasks to localStorage whenever tasks array changes
  useEffect(() => {
    console.log('Saving tasks to localStorage', tasks);
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = () => {
    if (task) {
      setTasks([...tasks, { text: task, completed: false }]);
      setTask('');
    }
  };

  const toggleTask = (index) => {
    const newTasks = [...tasks];
    newTasks[index].completed = !newTasks[index].completed;
    setTasks(newTasks);
  };

  const handleEdit = (index) => {
    setEditIndex(index);
    setEditText(tasks[index].text);
  };

  const saveEdit = () => {
    const newTasks = [...tasks];
    newTasks[editIndex].text = editText;
    setTasks(newTasks);
    setEditIndex(null);
    setEditText('');
  };

  const deleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">To-Do List</h1>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        className="border p-2 mr-2 w-2/3"
        placeholder="Enter task"
      />
      <button onClick={addTask} className="bg-blue-600 text-white p-2">Add Task</button>
      <ul className="mt-4">
        {tasks.map((task, index) => (
          <li key={index} className={`flex justify-between items-center mb-2 ${task.completed ? 'line-through' : ''}`}>
            <span onClick={() => toggleTask(index)} className="cursor-pointer">{task.text}</span>
            <div>
              <button onClick={() => handleEdit(index)} className="bg-yellow-500 text-white p-1 mr-2 rounded">Edit</button>
              <button onClick={() => deleteTask(index)} className="bg-red-500 text-white p-1 rounded">Delete</button>
            </div>
          </li>
        ))}
      </ul>
      {editIndex !== null && (
        <div className="mt-4">
          <input
            type="text"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            className="border p-2 mr-2"
          />
          <button onClick={saveEdit} className="bg-green-500 text-white p-2">Save</button>
          <button onClick={() => setEditIndex(null)} className="bg-gray-500 text-white p-2 ml-2">Cancel</button>
        </div>
      )}
    </div>
  );
}
