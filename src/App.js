import React from 'react';
import './App.css';
import ColorPicker from './Components/ColorPicker';

function App() {
  const colors = ['#ff5733', '#33ff57', '#5733ff', '#ff33ab', '#33abff'];

  return (
    <div className="App">
      <h1>Color Picker App</h1>
      <ColorPicker colors={colors} />
    </div>
  );
}

export default App;