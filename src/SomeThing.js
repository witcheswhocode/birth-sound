import React, { useState } from 'react';
import SomeButton from './SomeButton';

export const SomeThing = () => {
    const [liftedValue, setLiftedValue] = useState('')
  
    const handleAlternateClick = (liftedValue) => {
      console.log("I've been clicked!!!");
      setLiftedValue(liftedValue);
    }
    
    return (
      <>
        <SomeButton label="Click Me!" alternateClick={handleAlternateClick}/>
        <p>{liftedValue}</p>
      </>
    )
  }

  export default SomeThing