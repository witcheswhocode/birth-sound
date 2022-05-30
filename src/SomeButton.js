import React, { useState } from 'react';

export const SomeButton = (props) => {
    const { alternateClick, otherAlternateClick, label } = props;
  
    const [userInput, setUserInput] = useState('');
    function testFunction(){
        console.log('test function');
    }
    const handleClick = () => {
      testFunction();
      alternateClick(userInput);
    }
    const handleOtherClick = () => {
      testFunction();
      otherAlternateClick(userInput);
    }
  
    return (
      <>
        <button onClick={handleClick}>First</button>
        <button onClick={handleOtherClick}>Other</button>
      </>
    )
  }

  export default SomeButton