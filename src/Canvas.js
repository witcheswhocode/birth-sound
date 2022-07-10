import React, { useRef, useEffect,componentDidMount, useState } from 'react';
import Panel from './Panel';
import SignList from './SignList';
import BirthForm from './BirthForm';
import {planets,signOrder} from './data/settings';
import { nowToBirthchart } from './utils/dateToBirthchart';
import { Birthchart } from './BirthchartClass';

const Canvas = (props) => {
  const { updateBirthchartList,birthchartprop } = props;
  const canvasRef = useRef(null);
  let birthchart;
  
    
    //let birthchart;
    let width;
    let height;
    let context;
    useEffect(() => {
      const canvas = canvasRef.current;
      canvas.width = 600;
      canvas.height = 600;
      context = canvas.getContext('2d');

      width = canvas.width;
      height = canvas.height;

      context.fillStyle = '#0d0c1d';//'#070E0A';
      context.fillRect(0, 0, width, height);

      context.fillStyle = 'white';
      nowToBirthchart().then((chart)=>{
        birthchart = new Birthchart(chart,width,height,context);      
        setBirthchart(birthchart);

        setTimeout(function(){
          const bc = birthchart.createBirthChart(width,height);
        }, 250);
        setLiftedValue(chart);
      })
    },[]);

    const handleBirthchartChange = (chart) => {
      const canvas = canvasRef.current;
      canvas.width = 600;
      canvas.height = 600;
      console.log('handleBirthchartChange');
      context = canvas.getContext('2d');
      width = canvas.width;
      height = canvas.height;
      context.clearRect(0, 0, width, height);
      birthchart = new Birthchart(chart,width,height,context);
      setBirthchart(birthchart);
      setTimeout(function(){
        const bc = birthchart.createBirthChart(width,height);
      }, 250);
      setLiftedValue(chart);
    }

    const [liftedValue, setLiftedValue] = useState('');
    const [currentBirthchart, setBirthchart] = useState(birthchart);

    const handleAlternateClick = (liftedValue, planet, time) => {
      //setLiftedValue(liftedValue);
      console.log(currentBirthchart);
        setTimeout(() => {
          currentBirthchart.colorArc(liftedValue,'Active');

          // highlight birthchart list
          const elem = document.getElementById(planet);
          elem.classList.toggle('active');

          console.log('printing this one');
        }, 1000*time);
        setTimeout(() => {
          currentBirthchart.colorArc(liftedValue,'');

          // highlight birthchart list
          const elem = document.getElementById(planet);
          elem.classList.toggle('active');
        }, (1000*time)+500);
      console.log(liftedValue)
    }
    
    const handleOtherAlternateClick = (liftedValue, time) => {
      console.log("I've been other clicked!!!");
      setTimeout(() => {
        birthchart.colorArc(liftedValue,'Active');
      }, 1000*time);
      setTimeout(() => {
        birthchart.colorArc(liftedValue,'');
      }, (1000*time)+500);
    }
    const handleRhythmAlternateClick = (liftedValue, time) => {
        console.log("I've been other clicked!!!");
        setTimeout(() => {
          birthchart.colorArc(liftedValue,'Active');
        }, 1000*time);
        setTimeout(() => {
          birthchart.colorArc(liftedValue,'');
        }, (1000*time)+500);
    }
      
    return(
      <div id="container">
        <BirthForm updateBirthchart={handleBirthchartChange} />
        <div id='canvas'><canvas id='can' ref={canvasRef} {...props}></canvas></div>
        <Panel currentBirthChart={liftedValue} alternateClick={handleAlternateClick} otherAlternateClick={handleOtherAlternateClick} rhythmAlternateClick={handleRhythmAlternateClick} />
        <SignList birthchartprop={liftedValue} />
      </div>
    )

}

export default Canvas
