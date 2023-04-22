import React, { useRef, useEffect,componentDidMount, useState } from 'react';
import Panel from './Panel';
import SignList from './SignList';
import BirthForm from './BirthForm';
import { nowToBirthchart } from './utils/dateToBirthchart';
import { rihannaChart } from './data/settings';
import { Birthchart } from './BirthchartClass';
import EmojiLinebreak from './EmojiLinebreak';
import Moment from 'moment';
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './redux/birthchart/birthchartSlice'


const Canvas = (props) => {
  const { updateBirthchartList,birthchartprop } = props;
  const canvasRef = useRef(null);
  let birthchart;
  const [liftedValue, setLiftedValue] = useState('');
  //const [currentBirthchart, setBirthchart] = useState(birthchart);
  const dispatch = useDispatch();
  let cBirthChart = useSelector((state) => state.counter.value);
  
    
    //let birthchart;
    let width;
    let height;
    let context;
    useEffect(() => {
      console.log("useEffect");
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
        //birthchart = new Birthchart(chart,width,height,context);
        //setBirthchart(birthchart);
        dispatch(increment({chart:chart,width:width,height:height,context:context}));
        console.log(cBirthChart);
        setTimeout(function(){
          const bc = cBirthChart.createBirthChart(width,height);
        }, 250);
        setLiftedValue(chart);
      })
      /*var timer = setInterval(getBirthchartDetails, 1000);

      function getBirthchartDetails() {
        nowToBirthchart().then((chart)=>{
          console.log(chart);
          birthchart = new Birthchart(chart,width,height,context);      
          setBirthchart(birthchart);
          console.log(chart);
          setTimeout(function(){
            const bc = birthchart.createBirthChart(width,height);
          }, 250);
          setLiftedValue(chart);

          if(chart){
            clearInterval(timer);
            return;
          }
        })
      }*/
    },[]);

    const handleBirthchartChange = (chart) => {
      const canvas = canvasRef.current;
      canvas.width = 600;
      canvas.height = 600;
      context = canvas.getContext('2d');
      width = canvas.width;
      height = canvas.height;
      context.clearRect(0, 0, width, height);
      dispatch(increment({chart:chart,width:width,height:height,context:context}));
     //birthchart = new Birthchart(chart,width,height,context);
      console.log(cBirthChart)
      setLiftedValue(chart);
      //setBirthchart(birthchart);
      setTimeout(function(){
        const bc = cBirthChart.createBirthChart(width,height);
      }, 250);
      console.log(cBirthChart)
    }

    const handleAlternateClick = (liftedValue, planet, time) => {
      //setLiftedValue(liftedValue);
        setTimeout(() => {
          cBirthChart.colorArc(liftedValue,'Active');

          // highlight birthchart list
          const elem = document.getElementById(planet);
          elem.classList.toggle('active');
        }, 1000*time);
        setTimeout(() => {
          cBirthChart.colorArc(liftedValue,'');

          // highlight birthchart list
          const elem = document.getElementById(planet);
          elem.classList.toggle('active');
        }, (1000*time)+500);
    }
    
    const handleOtherAlternateClick = (liftedValue, time) => {
      setTimeout(() => {
        birthchart.colorArc(liftedValue,'Active');
      }, 1000*time);
      setTimeout(() => {
        birthchart.colorArc(liftedValue,'');
      }, (1000*time)+500);
    }
    const handleRhythmAlternateClick = (liftedValue, time) => {
        setTimeout(() => {
          birthchart.colorArc(liftedValue,'Active');
        }, 1000*time);
        setTimeout(() => {
          birthchart.colorArc(liftedValue,'');
        }, (1000*time)+500);
    }
    const handleAscChange = (newAsc) => {
        cBirthChart['asc'] = newAsc;      
        //dispatch(decrement(newAsc));
        //setBirthchart(currentBirthchart);
        handleBirthchartChange(cBirthChart);
    }
    const handleUpdateChartTitle = (birthday,time,location) => {
      document.getElementById('chart-title').textContent = birthday + ' ' + time;
      document.getElementById('chart-coords').textContent = 'Coords: '+location["lat"]+', '+location["lng"];
    }
    
    if (liftedValue){
      return(
        <React.Fragment>
          <div id="container1">
            <BirthForm updateBirthchart={handleBirthchartChange} updateChartTitle={handleUpdateChartTitle} currentBirthChart={liftedValue} />
            <EmojiLinebreak />
            <div id='canvas'>
              <h4>Birthchart for:</h4>
              <h2 id='chart-title'>{Moment(new Date()).format('MMMM D, YYYY hh:mm A')}</h2>
              <h3 id='chart-coords'>Coords: -118.2437, 34.0522</h3>
              <canvas id='can' ref={canvasRef} {...props}></canvas>
            </div>
            <Panel updateBirthchart={handleBirthchartChange} updateChartTitle={handleUpdateChartTitle} cBirthChart={cBirthChart} alternateClick={handleAlternateClick} />
            <SignList birthchartprop={liftedValue} ascChange={handleAscChange} />
            <p className="disclaimer-p">If your ascendant is wrong, click the dropdown and change it. The API can be off sometimes.</p>
          </div>
        </React.Fragment>
      )
    }
    else {
      return(
        <React.Fragment>
          <div id="container1">
            <BirthForm updateBirthchart={handleBirthchartChange} updateChartTitle={handleUpdateChartTitle} />
            <EmojiLinebreak />
            <div id='canvas'>
              <h4>Birthchart for:</h4>
              <h2 id='chart-title'>{Moment(new Date()).format('MMMM D, YYYY hh:mm A')}</h2>
              <h3 id='chart-coords'>Coords: -118.2437, 34.0522</h3>
              <canvas id='can' ref={canvasRef} {...props}></canvas>
              <p>Loading...</p>
            </div>
          </div>
        </React.Fragment>
      )
      
    }

}

export default Canvas
