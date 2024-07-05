import React from 'react';
import TaskItem from './TaskItem';

const TaskList = ({ tasks, deleteTask, editTask, toggleComplete }) => {
  return (
    <div className="task-list">
      {tasks.map(task => (
        <TaskItem
          key={task.id}
          task={task}
          deleteTask={deleteTask}
          editTask={editTask}
          toggleComplete={toggleComplete}
        />
      ))}
    </div>
  );
};

export default TaskList;
