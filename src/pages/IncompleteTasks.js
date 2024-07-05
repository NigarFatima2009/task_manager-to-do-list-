import React from 'react';
import { AnimatePresence } from 'framer-motion';
import TaskItem from '../components/TaskItem';

const IncompleteTasks = ({ tasks, toggleComplete, editTask, deleteTask }) => (
  <div className="task-list">
    <AnimatePresence>
      {tasks.filter(task => !task.completed).map(task => (
        <TaskItem
          key={task.id}
          task={task}
          toggleComplete={toggleComplete}
          editTask={editTask}
          deleteTask={deleteTask}
        />
      ))}
    </AnimatePresence>
  </div>
);

export default IncompleteTasks;
