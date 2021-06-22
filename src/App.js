import React from 'react';
import './App.css';
import TrafficSignal from './TrafficSignal';
import Cars from './Cars';

function App() {

  return (
    <div className="container">
      <Cars />
      <TrafficSignal />
  </div>  );
}

export default App;
