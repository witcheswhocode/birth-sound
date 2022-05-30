import React, { useState } from 'react';

export const SomeButton = (props) => {
    const { alternateClick, label } = props;
  
    const [userInput, setUserInput] = useState('');
  
    const handleOnChange = (event) => {
      const value = event.target.value;
      setUserInput(value);    
    }  
  
    const handleClick = () => {
      alternateClick(userInput);
    }
  
    return (
      <>
        <input onChange={handleOnChange} />
        <button onClick={handleClick}>{label}</button>
      </>
    )
  }

  export default SomeButton