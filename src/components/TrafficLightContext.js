import React, { createContext, useReducer, useEffect } from 'react';

const TrafficLightContext = createContext();

const initialState = {
  currentLight: 'green',
  pedestrianRequest: false,
  emergencyOverride: false, 
  timer: 10, 
};

const trafficLightReducer = (state, action) => {
  switch (action.type) {
    case 'CHANGE_LIGHT':
      return {
        ...state,
        currentLight: action.payload.light,
        timer: action.payload.timer,
      };
    case 'TICK_TIMER':
      return {
        ...state,
        timer: state.timer > 0 ? state.timer - 1 : 0,
      };
    case 'REQUEST_CROSSING':
      return {
        ...state,
        pedestrianRequest: true,
      };
    case 'RESET_PEDESTRIAN':
      return {
        ...state,
        pedestrianRequest: false,
      };
    case 'EMERGENCY_OVERRIDE_ON':
      return {
        ...state,
        emergencyOverride: true,
      };
    case 'EMERGENCY_OVERRIDE_OFF':
      return {
        ...state,
        emergencyOverride: false,
      };
    default:
      return state;
  }
};

const TrafficLightProvider = ({ children }) => {
  const [state, dispatch] = useReducer(trafficLightReducer, initialState);

  useEffect(() => {
    const handleLightChange = () => {
      
      if (state.timer <= 0) {
        let nextLight, nextTimer;

        switch (state.currentLight) {
          case 'green':
            nextLight = 'yellow';
            nextTimer = 3;
            break;
          case 'yellow':
            nextLight = 'red';
            nextTimer = state.pedestrianRequest ? 12 : 7;
            break;
          case 'red':
            nextLight = 'green';
            nextTimer = 10;
            break;
          default:
            nextLight = 'green';
            nextTimer = 10;
            break;
        }

        dispatch({
          type: 'CHANGE_LIGHT',
          payload: { light: nextLight, timer: nextTimer },
        });

        if (state.pedestrianRequest && state.currentLight === 'red') {
          dispatch({ type: 'RESET_PEDESTRIAN' });
        }
      }
    };

    const countdownInterval = setInterval(() => {
      dispatch({ type: 'TICK_TIMER' });
    }, 1000);

    const timerId = setTimeout(handleLightChange, state.timer * 1000);

    return () => {
      clearTimeout(timerId);
      clearInterval(countdownInterval);
    };
  }, [state.currentLight, state.timer, state.pedestrianRequest, state.emergencyOverride]);

  return (
    <TrafficLightContext.Provider value={{ state, dispatch }}>
      {children}
    </TrafficLightContext.Provider>
  );
};

export { TrafficLightContext };
export default TrafficLightProvider;
