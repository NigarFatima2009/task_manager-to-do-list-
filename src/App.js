import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AddTask from './components/AddTask';
import Filter from './components/Filter';
import AllTasks from './pages/AllTasks';
import CompletedTasks from './pages/CompletedTasks';
import IncompleteTasks from './pages/IncompleteTasks';
import './App.css';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState('all');

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const editTask = (id, updatedTask) => {
    setTasks(tasks.map(task => (task.id === id ? updatedTask : task)));
  };

  const toggleComplete = (id) => {
    setTasks(tasks.map(task => (task.id === id ? { ...task, completed: !task.completed } : task)));
  };

  return (
    <Router>
      <div className="App">
      <div className="content-overlay">
        <Filter setFilter={setFilter} />
        <AddTask addTask={addTask} />
        <Routes>
          <Route path="/" element={<AllTasks tasks={tasks} deleteTask={deleteTask} editTask={editTask} toggleComplete={toggleComplete} />} />
          <Route path="/completed" element={<CompletedTasks tasks={tasks} deleteTask={deleteTask} editTask={editTask} toggleComplete={toggleComplete} />} />
          <Route path="/incomplete" element={<IncompleteTasks tasks={tasks} deleteTask={deleteTask} editTask={editTask} toggleComplete={toggleComplete} />} />
        </Routes>
        <div className="background-video">
      <video autoPlay loop muted className="video-actions">
        <source src="/images/a.mp4" type="video/mp4" />
      </video>
    </div>
      </div>
      </div>
    </Router>
  );
};

export default App;
