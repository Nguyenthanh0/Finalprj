import './RangeSlider.css'


import React, { useState } from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import './RangeSlider.css';

const RangeSlider = () => {
  const [range, setRange] = useState([0, 3000000]);

  const handleRangeChange = (newRange) => {
    setRange(newRange);
  };

  const handleReset = () => {
    setRange([0, 3000000]);
  };

  return (
    <div className="range-slider">
      <h3>Price Range</h3>
      <Slider 
        range 
        min={0} 
        max={3000000} 
        value={range} 
        onChange={handleRangeChange} 
        trackStyle={[{ backgroundColor: '#1e90ff' }]} 
        handleStyle={[{ backgroundColor: '#1e90ff' }, { backgroundColor: '#1e90ff' }]}
      />
      <div className="range-values">
        <span>${range[0].toLocaleString()}</span>
        <span>${range[1].toLocaleString()}</span>
      </div>
      <button className="reset-button" onClick={handleReset}>Reset Filter</button>
    </div>
  );
};

export default RangeSlider;
