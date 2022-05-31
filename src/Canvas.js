import React, { useRef, useEffect,componentDidMount, useState } from 'react';
import Panel from './Panel';
import {planets,signOrder,currentBirthChart} from './data/settings';

const Canvas = props => {
    const canvasRef = useRef(null);

    
  const signInfo = require('./data/signInfo.json');
  const planetInfo = require('./data/planetInfo.json');
  const degToRad = (degrees) =>{
    return degrees / 180 * Math.PI
  }
  const randomRange = (min,max) =>{
    return Math.random()*(max-min)+min;
  }

  const getColor = (element) =>{
      switch (element){
        /*case 'fire':
          return '#FFA8A2';
        case 'earth':
          return '#ABD781';
        case 'water':
          return '#6FC0CB';
        case 'air':
          return '#FAF6F8';*/
        case 'fire':
          return '#FFE7E2';
        case 'earth':
          return '#E7F4DB';
        case 'water':
          return '#D6EDF0';
        case 'air':
          return '#FDFAFB';
        case 'fireActive':
          return '#FE5F55';
        case 'earthActive':
          return '#669D31';
        case 'waterActive':
          return '#28666E';
        case 'airActive':
          return '#DCBCC8';//'#EAD7DE';//'#F0E2E7';
        default:
          return 'white';
      }
    }
    class ArcLocation{
      constructor(lastends,lastende){
        this.lastends = lastends;
        this.lastende = lastende;
      }
    }
    class Birthchart {
      constructor(array,width,height,context){
        for (var i = 0; i < planets.length; i++){
          this[planets[i]] = array[planets[i]];
        }
        this.chartOrder = this.sortSignOrderToGenerateChart(); 
        this.planetSigns = this.sortPlanetLocations(); 
        this.houseLocations = this.sortHouseLocations();
        this.num = 12;
        this.cx = width * 0.5;
        this.cy = height * 0.5;
        this.radius = width * 0.4;
        this.w = width * 0.004;
        this.h = height * 0.4;
        this.width = width;
        this.height = height;
        this.slice = degToRad((360/this.num))
        this.arcLocations = [];
        this.context = context;
      }
      sortSignOrderToGenerateChart(){ // asc should be the sixth item in the list
        var sisterIndex = signOrder.indexOf(signInfo[this.getAscendent()]['sister']);
    
        if (sisterIndex == signOrder.length-1){
          return signOrder
        }
        else if (sisterIndex < signOrder.length-1){
          return (signOrder.slice(sisterIndex+1,signOrder.length) +','+ signOrder.slice(0,sisterIndex+1)).split(',');
        }
        else{
          console.log('else on sign order sort!!!');
          return signOrder;
        }
      }
      sortHouseLocations(){
        var arr = [];
        var sunIndex = signOrder.indexOf(this.sun);
        for (var i = sunIndex; i >= 0; i--){
          arr.push(signOrder[i]);
        }
        for (i = (signOrder.length-1); i >= sunIndex+1; i--){
          arr.push(signOrder[i]);
        }
        return arr;
      }
      sortPlanetLocations(){
        var arr = {};
        for (var i = 0; i < planets.length; i++){
          var currentPlanet = planets[i];
          var currentSign = this[currentPlanet];
          if (currentPlanet == planets[i]){
            if (arr[currentSign]){
              arr[currentSign] += ','+currentPlanet;
            }
            else {
              arr[currentSign] = currentPlanet;
            }
          }
          
        }
        return arr;
      }
      hello(){
        console.log('why hello there');
      }
      getAscendent(){
        return this.asc;
      }
      createBirthChart(){
        let x,y;

        const birthchartOrder = this.chartOrder;

        /*var canvas = document.getElementById("can");
        var context = canvas.getContext("2d");*/
        var lastend = 0; // angle start
        var sizeSlice = 10;
        var myTotal = sizeSlice*this.num;
        //const slice = degToRad((360/this.num));

        for (var i = 0; i < this.num; i++) {
          this.context.save();
          this.context.translate(this.width*0.17,this.height*0.17);
          this.context.beginPath();
          //context.moveTo(width/3,height/3);
          this.context.arc(this.width/3,this.height/3,this.height/3,lastend,lastend+(Math.PI*2*(sizeSlice/myTotal)),false);
          this.context.lineTo(this.width/3,this.height/3);
          this.context.fillStyle = getColor(signInfo[birthchartOrder[i]].element);
          this.context.fill();
          this.context.restore();


          let angle = (this.slice * i)-(this.slice*3)*0.85;

          x = this.cx + (this.width*0.35) * Math.sin(-angle);
          y = this.cy + (this.height*0.35) * Math.cos(-angle);
          this.context.save();
          this.context.translate(x,y);
          this.context.rotate(Math.PI/2 + angle);
          this.context.beginPath();
          //context.rotate(angle1);
          var text1 = birthchartOrder[i];
          var text2 = signInfo[birthchartOrder[i]].major;
          var font = "bold 18px Dosis";
          this.context.font = font;
          // Move it down by half the text height and left by half the text width
          var tw = this.context.measureText(text1).width;
          var th = this.context.measureText("w").width; // this is a GUESS of height
          this.context.fillText(text2, 0,0);
          this.context.fillText(text1, 0,15);
          this.context.restore();

          this.arcLocations.push(new ArcLocation(lastend, lastend+(Math.PI*2*(sizeSlice/myTotal))));
          lastend += Math.PI*2*(sizeSlice/myTotal);
          this.addPlanets(birthchartOrder[i]);
          this.addHouses(birthchartOrder[i]);
        }
        this.createLines();
      }
      createLines(){
        let x,y;
        for (let i = 0; i < this.num; i++){
          let angle = (this.slice * i)-(this.slice*3);
    
          x = this.cx + 0 * Math.sin(angle);
          y = this.cy + 0 * Math.cos(angle);
          //console.log(angle);
    
          this.context.save();
          this.context.translate(x+this.w/2,y+this.w/2);
          this.context.rotate(-angle);
      
          this.context.beginPath();
          this.context.rect(-this.w*0.5,1,this.w,this.h);
          this.context.fillStyle = 'white';//'#2B3A67';
          this.context.fill();
          this.context.restore();
        }
    
      }
      colorArc(sign,type){
        //console.log(sign);
        //console.log(this.arcLocations[this.chartOrder.indexOf(sign)-1]);
        var sizeSlice = 10;
    
        this.context.save();
        this.context.translate(this.width*0.17,this.height*0.17);
        this.context.beginPath();
        //context.moveTo(width/3,height/3);
        this.context.arc(this.width/3,this.height/3,this.height/3,this.arcLocations[this.chartOrder.indexOf(sign)].lastends,this.arcLocations[this.chartOrder.indexOf(sign)].lastende,false);
        this.context.lineTo(this.width/3,this.height/3);
        this.context.fillStyle = getColor((signInfo[this.chartOrder[(this.chartOrder).indexOf(sign)]].element)+type);
        this.context.fill();
        this.context.restore();
    
        this.createLines();
        this.addHouses(sign);
        this.addPlanets(sign);
      }
      getQuadrant(sign){
        switch(this.chartOrder.indexOf(sign)){
          case 0:
          case 1:
          case 2:
            return 4;
          case 3:
          case 4:
          case 5:
            return 3;
          case 6:
          case 7:
          case 8:
            return 2;
          case 9:
          case 10:
          case 11:
            return 1;
          default:
            return 0;
        }
      }
      getSignPosition(quadrant){
        switch(quadrant){
          // [run,rise,x,y]
          case 1:
            return [15,15,-5,10];
          case 2:
            return [15,15,-5,5];
          case 3:
            return [15,15,-5,5];
          case 4:
            return [15,15,-5,0];
          default:
            return [25,25,5,10];
        }
      }
      addHouses(sign){
        console.log(this.houseLocations.indexOf(sign));
        var angle = (this.slice * this.chartOrder.indexOf(sign))-(this.slice*3)*0.82;
        //console.log(angle);

        var x = this.cx + (this.width*0.1) * Math.sin(-angle);
        var y = this.cy + (this.height*0.1) * Math.cos(-angle);

        this.context.beginPath();
        //context.rotate(angle1);
        var text = this.houseLocations.indexOf(sign)+1;
        var font = "bold 12px Dosis";
        this.context.font = font;
        //console.log(signInfo['aries'].html);
        // Move it down by half the text height and left by half the text width
        var tw = this.context.measureText(text).width;
        var th = this.context.measureText("w").width; // this is a GUESS of height
        this.context.fillText(text, (x),(y+5));

        this.context.restore();
      }
      addPlanets(sign){
        if (this.planetSigns[sign]){
          let x,y;
    
          let angle = (this.slice * this.chartOrder.indexOf(sign))-(this.slice*3)*0.83;
      
          x = this.cx + (this.width*0.3) * Math.sin(-angle);
          y = this.cy + (this.height*0.3) * Math.cos(-angle);

          let planets = this.planetSigns[sign].split(',');
          let positions = this.getSignPosition(this.getQuadrant(sign));
          //console.log(positions)
          let xAdd = positions[0], yAdd = positions[1];
          //console.log(this.chartOrder);
          for (var i = 0; i < planets.length; i++){
            x = this.cx + (this.width*0.3-(i*xAdd)) * Math.sin(-angle);
            y = this.cy + (this.height*0.3-(i*yAdd)) * Math.cos(-angle);
            //console.log(planetInfo[planets[i]]);
            this.context.save();
            //context.translate(x,y);
            this.context.beginPath();
            //context.rotate(angle1);
            var text = planetInfo[planets[i]];
            var font = "bold 14px Dosis";
            this.context.font = font;
            // Move it down by half the text height and left by half the text width
            var tw = this.context.measureText(text).width;
            var th = this.context.measureText("w").width; // this is a GUESS of height
            this.context.fillText(text, (x+positions[2]),(y+positions[3]));
            this.context.restore();
          }

        }
      }
        
    
    /*const fire = '#ffa39d';
    const fireActive = '#de7972';
    const earth = '#a6d57a';
    const earthActive = '#658745';
    const water = '#67bdc8';
    const waterActive = '#345b60';
    const air = '#f6eef1';
    const airActive = '#ede3e7';*/

    }
    let birthchart;
    useEffect(() => {
      const canvas = canvasRef.current;
      console.log(canvas);
      canvas.width = 600;
      canvas.height = 600;
      const context = canvas.getContext('2d');

      let width = canvas.width;
      let height = canvas.height;

      context.fillStyle = 'white';
      context.fillRect(0, 0, width, height);

      context.fillStyle = '#2B3A67';
      birthchart = new Birthchart(currentBirthChart,width,height,context);
      const bc = birthchart.createBirthChart(width,height);
    },[]);

    const [liftedValue, setLiftedValue] = useState('')

    const handleAlternateClick = (liftedValue, time) => {
      //setLiftedValue(liftedValue);
      //console.log(time);
        setTimeout(() => {
          birthchart.colorArc(liftedValue,'Active');
          console.log('printing this one');
        }, 1000*time);
        setTimeout(() => {
          birthchart.colorArc(liftedValue,'');
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
      <div>
        <canvas id='can' ref={canvasRef} {...props}></canvas>
        <Panel alternateClick={handleAlternateClick} otherAlternateClick={handleOtherAlternateClick} rhythmAlternateClick={handleRhythmAlternateClick} />
      </div>
    )

}

export default Canvas
