import React, { useContext } from 'react';
import { TrafficLightContext } from '../TrafficLightContext';
import { PiSirenFill } from "react-icons/pi";
import './index.css';

const EmergencyButton = () => {
  const { dispatch } = useContext(TrafficLightContext);

  const handleEmergencyOverride = () => {
    dispatch({ type: 'EMERGENCY_OVERRIDE_ON' });

    setTimeout(() => {
      dispatch({ type: 'EMERGENCY_OVERRIDE_OFF' });
    }, 10000); 
  };

  return (
    <button className="emergency-button" onClick={handleEmergencyOverride}>
      Emergency Vehicle Override <PiSirenFill />
    </button>
  );
};

export default EmergencyButton;
