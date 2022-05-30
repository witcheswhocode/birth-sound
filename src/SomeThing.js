import React, { useState } from 'react';
import SomeButton from './SomeButton';

export const SomeThing = () => {
    const [liftedValue, setLiftedValue] = useState('')
    
    class dummyClass{
        constructor(name){
            this.name = name;
        }
        printName(){
            console.log(this.name);
        }
    }
    var c = new dummyClass('Liz');

    const handleAlternateClick = (liftedValue) => {
        console.log("I've been clicked!!!");
        setLiftedValue(liftedValue);
        c.printName();
    }
    
    const handleOtherAlternateClick = (liftedValue) => {
        console.log("I've been other clicked!!!");
    }
        
    return (
      <>
        <SomeButton label="Click Me!" alternateClick={handleAlternateClick} otherAlternateClick={handleOtherAlternateClick}/>
        <p>{liftedValue}</p>
      </>
    )
  }

  export default SomeThing