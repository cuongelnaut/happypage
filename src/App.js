import { createContext,useRef,useState } from 'react';
import Rabbit from './Rabbit/Rabbit';
import './App.css';
import Skeleton from './Skeleton/Skeleton';
import Toggle from './toggleButton/ToggleDayNight';
// import { NightContext } from './toggleButton/ToggleDayNight';
import Light from './Light/Light';

export const NightContext = createContext();



function App() {

  const [state, setState] = useState("day");
    
  const changeButton = () => {  
      setState(
        state === "night" ? "day" : "night"
      );
  };
  console.log(state)
  return (
    <NightContext.Provider value={state}>
    <div className={`wrapper ${state}`}>
      
      <div className='charactor'>
        <div></div>
        <div className='skeleton'>
          { (state === "night") && <Skeleton /> }
        </div>
        <div className="rabbit">
          <Rabbit />
        </div> 
        <div className="light">
           <Light />
        </div>
        <div></div>
      </div>

      <div className='button' onClick= { changeButton }>
        <Toggle /> 
      </div>
    </div>
    </NightContext.Provider>
  );
}

export default App;
