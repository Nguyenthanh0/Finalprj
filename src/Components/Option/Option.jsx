

import React, { useState } from 'react';
import './Option.css';

const Options = () => {
  const [activeOption, setActiveOption] = useState('list');

  return (
    <div className="options">
      <button 
        className={`options-button ${activeOption === 'list' ? 'active' : ''}`} 
        onClick={() => setActiveOption('list')}
      >
        <i className="fas fa-list"></i> {/* Biểu tượng danh sách */}
      </button>
      <button 
        className={`options-button ${activeOption === 'grid' ? 'active' : ''}`} 
        onClick={() => setActiveOption('grid')}
      >
        <i className="fas fa-th"></i> {/* Biểu tượng lưới */}
      </button>
    </div>
  );
};

export default Options;
