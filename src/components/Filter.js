import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Filter.css';

const Filter = ({ setFilter }) => {
  const navigate = useNavigate();

  return (
    <div className="filter-container">
      <nav>
        <ul className='nav-buttons'>
          <button className="nav-button" onClick={() => navigate('/')}>All Tasks</button>
          <button className="nav-button" onClick={() => navigate('/completed')}>Completed Tasks</button>
          <button className="nav-button" onClick={() => navigate('/incomplete')}>Incomplete Tasks</button>
        </ul>
      </nav>
    </div>
  );
};

export default Filter;
