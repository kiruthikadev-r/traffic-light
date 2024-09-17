import React, { useContext } from 'react';
import { TrafficLightContext } from '../TrafficLightContext';

import { FaWalking } from "react-icons/fa";
import './index.css';

const PedestrianButton = () => {
  const { dispatch } = useContext(TrafficLightContext);

  const handleRequest = () => {
    dispatch({ type: 'REQUEST_CROSSING' });
  };

  return (
    <button className="pedestrian-button" onClick={handleRequest}>
      Request Pedestrian Crossing <FaWalking />
    </button>
  );
};

export default PedestrianButton;
