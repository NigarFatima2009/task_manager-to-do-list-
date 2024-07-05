import React, { useState } from 'react';
import './AddTask.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faTrashAlt } from '@fortawesome/free-solid-svg-icons';

const AddTask = ({ addTask }) => {
  const [taskName, setTaskName] = useState('');
  const [category, setCategory] = useState('');
  const [customCategory, setCustomCategory] = useState('');
  const [categories, setCategories] = useState(['home', 'school', 'shopping']);
  const [showAddCategory, setShowAddCategory] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const finalCategory = customCategory || category;
    addTask({ id: Date.now(), name: taskName, category: finalCategory, completed: false });
    setTaskName('');
    setCategory('');
    setCustomCategory('');
    setShowAddCategory(false); 
  };

  const handleCustomCategoryChange = (e) => {
    setCustomCategory(e.target.value);
  };

  const handleCategoryChange = (e) => {
    const selectedCategory = e.target.value;
    setCategory(selectedCategory);
    if (selectedCategory === 'add-new') {
      setShowAddCategory(true);
    } else {
      setShowAddCategory(false);
    }
  };

  const handleAddCategory = () => {
    if (customCategory) {
      setCategories([...categories, customCategory]);
      setCustomCategory('');
      setShowAddCategory(false);
    }
  };

  const handleDeleteCategory = (catToDelete) => {
    const updatedCategories = categories.filter(cat => cat !== catToDelete);
    setCategories(updatedCategories);
  };

  return (
    <form onSubmit={handleSubmit} className="add-task-form">
      <input 
        type="text" 
        placeholder="Task Name" 
        value={taskName} 
        onChange={(e) => setTaskName(e.target.value)} 
        className="task-input"
      />
      <select 
        value={category} 
        onChange={handleCategoryChange}
        className="task-select"
      >
        <option value="">Select Category</option>
        {categories.map(cat => (
          <option key={cat} value={cat}>{cat}</option>
        ))
        }
        <option value="add-new">Add New Category</option>
      </select>
      {showAddCategory && (
        <div className="add-new-category">
          <input 
            type="text" 
            placeholder="New Category Name" 
            value={customCategory} 
            onChange={handleCustomCategoryChange} 
            className="custom-category-input"
          />
          <FontAwesomeIcon icon={faPlus} className="add-category-icon" onClick={handleAddCategory} />
        </div>
      )}
      <button type="submit" className="taskbutton">Add Task</button>

    </form>
  );
};

export default AddTask;
