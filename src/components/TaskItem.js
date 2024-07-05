import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import Modal from './Modal';
import './TaskItem.css';

const TaskItem = ({ task, toggleComplete, editTask, deleteTask }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newTaskName, setNewTaskName] = useState(task.name);

  const handleEdit = () => {
    setIsModalOpen(true);
  };

  const handleSave = () => {
    editTask(task.id, { ...task, name: newTaskName });
    setIsModalOpen(false);
  };

  return (
    <>
      <motion.li
        className="task-item"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.3 }}
      >
        <div className="task-name-container">
          <span className="task-name" style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
            {task.name}
          </span>
        </div>
        <div className="task-actions">
          <button onClick={() => toggleComplete(task.id)} className="task-button">
            <FontAwesomeIcon icon={faCheck} />
          </button>
          <button onClick={handleEdit} className="task-button">
            <FontAwesomeIcon icon={faEdit} />
          </button>
          <button onClick={() => deleteTask(task.id)} className="task-button">
            <FontAwesomeIcon icon={faTrash} />
          </button>
        </div>
      </motion.li>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <h2>Edit Name</h2>
        <input
          type="text"
          value={newTaskName}
          onChange={(e) => setNewTaskName(e.target.value)}
          className="modal-input"
        />
        <button onClick={handleSave} className="modal-save-button">Save</button>
      </Modal>
    </>
  );
};

export default TaskItem;
