import React from 'react';
import TrafficLightProvider from './components/TrafficLightContext';
import TrafficLight from './components/TrafficLight';
import PedestrianButton from './components/PedestrianButton';
import EmergencyButton from './components/EmergencyButton';
import './App.css';

const App = () => {
  return (
    <TrafficLightProvider>
      <div className="app">
        <h1>Traffic Light Simulator</h1>
        <TrafficLight />
        <PedestrianButton />
        <EmergencyButton />
      </div>
    </TrafficLightProvider>
  );
};

export default App;
