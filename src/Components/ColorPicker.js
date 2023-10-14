// ColorPicker.js
import React, { useState } from 'react';
import './ColorPicker.css';

function ColorPicker({ colors }) {
  const [selectedColor, setSelectedColor] = useState(null);
  const [isColorListVisible, setColorListVisible] = useState(false);

  const handleColorClick = (color) => {
    setSelectedColor(color);
    setColorListVisible(false);
  };

  return (
    <div className="color-picker">
      <button onClick={() => setColorListVisible(!isColorListVisible)}>
        Pick a color
      </button>
      {isColorListVisible && (
        <div className="color-list">
          {colors.map((color, index) => (
            <div
              key={index}
              className="color-item"
              style={{ backgroundColor: color }}
              onClick={() => handleColorClick(color)}
            ></div>
          ))}
        </div>
      )}
      {selectedColor && (
        <div className="selected-color">
          Selected Color: <div className="color-box" style={{ backgroundColor: selectedColor }}></div>
        </div>
      )}
    </div>
  );
}

export default ColorPicker;
