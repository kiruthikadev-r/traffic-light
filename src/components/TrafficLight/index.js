import React, { useContext } from 'react';
import { TrafficLightContext } from '../TrafficLightContext';
import { FaWalking } from "react-icons/fa";
import { FaAmbulance } from "react-icons/fa";
import './index.css';

const TrafficLight = () => {
  const { state } = useContext(TrafficLightContext);
  // console.log(state)



  return (
    <div className="traffic-light-container-with-text">
    <div className="traffic-light">
    <div className='light-with-text'>
      <div className="traffic-light-container">
      <div className={`light ${state.currentLight === 'red' ? 'red' : ''}`}>
        <div className="light-timer">
          <span>Red</span>
        </div>
      </div>
        <div className='light-timer-text'>
          {state.currentLight === 'red' ?(<p>{state.timer}s</p>) : (<p>    </p>)}
        </div>
      </div>
      {/* <div className="light-side-text red-side">
        <div className="text">
          <span>YOUR TEXT</span>
        </div>
      </div> */}
      </div>

        <div className="traffic-light-container">
      <div className={`light ${state.currentLight === 'yellow' ? 'yellow' : ''}`}>
        <div className="light-timer">
          <span>Yellow</span>
        </div>
      </div>
        <div className='light-timer-text'>
          {state.currentLight === 'yellow' ? (<p>{state.timer}s</p>) : (<p>    </p>)}
          </div>
      </div>


      <div className="traffic-light-container">
      <div className={`light ${state.currentLight === 'green' ? 'green' : ''}`}>
        <div className="light-timer">
          <span>Green</span>
        </div>
      </div>
        <div className='light-timer-text'>
          {state.currentLight === 'green' ? (<p>{state.timer}s</p>): <p>    </p>}
        </div>
      </div>

      
      <div className="traffic-light-container">
      <div className={`light ${state.emergencyOverride && 'emergency'}`}>
        <div className="light-timer">
        <FaAmbulance size={30} />
        </div>
      </div>
        {/* <div className='light-timer-text'>
          {state.currentLight === 'green' ? (<p>{state.timer}s</p>): <p>    </p>}
        </div> */}
      </div>
    </div>
    

    <div className="traffic-light-side-text">
      <div className="light-side-text red">
        <div className="text">
          <span>Red signal{state.currentLight === 'yellow' ? <span> in {state.timer} seconds</span> : state.currentLight === "green" ? (<span>in {state.timer + 3} seconds</span> ): state.pedestrianRequest? <FaWalking /> :""} </span>
        </div>
      </div>
      <div className="light-side-text yellow">
        <div className="text">
          <span>Yellow signal{state.currentLight === 'green' ? <span> in {state.timer} seconds</span> : state.currentLight === "red" ? (<span>in {state.timer + 10} seconds</span>) : ""} </span>
        </div>
      </div>
      <div className="light-side-text green">
        <div className="text">
          <span>Green signal{state.currentLight === 'red' ? <span> in {state.timer} seconds</span> : state.currentLight === "yellow" ? state.pedestrianRequest ? (<span>in {state.timer + 12} seconds</span>) : (<span>in {state.timer + 7} seconds</span> ): ""} </span>
        </div>
      </div>
      {state.emergencyOverride  &&
      <div className="light-side-text emergency-text">
        <div className="text">
           <span>Cross emergency Vechical only</span> 
        </div>
      </div>}
    </div>
    </div>


  );
};

export default TrafficLight;
