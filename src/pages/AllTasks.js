import React from 'react';
import TaskList from '../components/TaskList';

const AllTasks = ({ tasks, deleteTask, editTask, toggleComplete }) => {
  return <TaskList tasks={tasks} deleteTask={deleteTask} editTask={editTask} toggleComplete={toggleComplete} />;
};

export default AllTasks;
