import React, { useRef, useEffect } from 'react';
//const canvasSketch = require('canvas-sketch');


const Canvas = props => {
    const canvasRef = useRef(null);
    const wwidth = window.innerWidth * 0.5;
    const wheight = window.innerHeight * 0.5;

    const signInfo = {
        'aries': {'html':'&#9800;','element':'fire','major':'C','minor':'Am'},
        'taurus': {'html':'&#9800;','element':'fire','major':'G','minor':'Em'},
        'gemini': {'html':'&#9800;','element':'fire','major':'D','minor':'Bm'}, 
        'cancer': {'html':'&#9800;','element':'fire','major':'A','minor':'F#m'},
        'leo': {'html':'&#9800;','element':'fire','major':'E','minor':'C#m'},
        'virgo': {'html':'&#9800;','element':'fire','major':'B','minor':'G#m'},
        'libra': {'html':'&#9800;','element':'fire','major':'F#','minor':'D#m'}, // major Gb, minor Ebm
        'scorpio': {'html':'&#9800;','element':'fire','major':'C#','minor':''}, // major Db, minor Bbm
        'sagittarius': {'html':'&#9800;','element':'fire','major':'G#','minor':'Fm'}, // major Ab
        'capricorn': {'html':'&#9800;','element':'fire','major':'D#','minor':'Cm'}, // major Eb
        'aquarius': {'html':'&#9800;','element':'fire','major':'A#','minor':'Gm'}, // major Bb
        'pisces': {'html':'&#9800;','element':'fire','major':'F','minor':'Dm'}, 
      }
      const planetInfo = {
        'sun': '☉',
        'moon': 'cancer',
        'asc': 'virgo',
        'mercury': 'leo',
        'venus': 'leo',
        'mars': 'libra',
        'jupiter': 'leo',
        'saturn': 'aquarius',
        'uranus': 'capricorn',
        'neptune': 'capricorn',
        'pluto': 'scorpio',
        'northnode': 'capricorn',
        'chiron': 'leo',
        'mc': 'gemini',
      }
    const degToRad = (degrees) =>{
        return degrees / 180 * Math.PI
    }
    const draw = (context, canvas, frameCount) => {
        const signs = ['sun', 'moon', 'asc', 'mercury', 'venus', 'mars', 'jupiter', 'saturn', 'uranus', 'neptune', 'pluto', 'northnode', 'chiron', 'mc' ];

        console.log(canvas);
        const width = canvas.width;
        const height = canvas.height;
        const cx = canvas.width*0.5;
        const cy = canvas.height*0.5;
        const w = width * 0.007;
        const h = height * 0.4;

        const num = 12;
        const radius = width * 0;
        const slice = degToRad(360/num);
        let x,y;

        const fire = '#FFA8A2';
        const fireActive = '#FE5F55';
        const earth = '#ABD781';
        const earthActive = '#669D31';
        const water = '#6FC0CB';
        const waterActive = '#28666E';
        const air = '#FAF6F8';
        const airActive = '#F0E2E7';

        var lastend = 0; // angle start
        var lastend1 = 15; // angle start
        var sizeSlice = 10;
        var myTotal = sizeSlice*num;
        const slice1 = degToRad((360/num));
        var myColor = [airActive,earthActive,fireActive,waterActive,air,earth,fire,water,air,earth,fire,water,air,earth,fire,water];

        for (var i = 0; i < num; i++) {
        //if (i%random.rangeFloor(1,5)) {
        context.save();
        context.translate(width*0.17,height*0.17);
        context.beginPath();
        //context.moveTo(width/3,height/3);
        context.arc(width/3,height/3,height/3,lastend,lastend+(Math.PI*2*(sizeSlice/myTotal)),false);
        context.lineTo(width/3,height/3);
        context.fillStyle = myColor[i];
        context.fill();
        context.restore();

        //}


        let angle = (slice1 * i)-(slice1*3)*0.85;

        x = cx + (width*0.4) * Math.sin(-angle);
        y = cy + (height*0.4) * Math.cos(-angle);
        context.save();
        //context.translate(x,y);
        context.beginPath();
        //context.rotate(angle1);
        var text = signs[i];
        var font = "bold 12px serif";
        context.font = font;
        // Move it down by half the text height and left by half the text width
        var tw = context.measureText(text).width;
        var th = context.measureText("w").width; // this is a GUESS of height
        context.fillText(text, (x) + (tw/2),(y) + (th/2));

        context.restore();

        lastend += Math.PI*2*(sizeSlice/myTotal);
        }



    for (let i = 0; i < num; i++){
        let angle = (slice * i)-(slice*3);
  
        x = cx + radius * Math.sin(angle);
        y = cy + radius * Math.cos(angle);
        //console.log("points: "+x +" "+y);
  
        //console.log(angle);
        context.save();
        context.translate(x+w/2,y+w/2);
        context.rotate(angle);
    
        context.beginPath();
        context.rect(-w*0.5,1,w,h);
        context.fillStyle = '#2B3A67';
        context.fill();
        context.restore();
  
        /*context.save();
        context.translate(x,y);
        context.rotate(-angle);
    
        context.beginPath();
        context.lineTo(x,y)
        context.fill();
        context.fillStyle = gradient;
        context.restore();*/
  
      }
  
      for(let i = 0; i<num;i++){
  
        let angle = (slice1 * i)-(slice1*3)*0.8;
        console.log(angle);
  
        x = cx + (width*0.3) * Math.sin(-angle);
        y = cy + (height*0.3) * Math.cos(-angle);
        context.save();
        context.translate(x,y);
        //context.rotate(angle);
        context.beginPath();
        //context.moveTo(width/3,height/3);
        context.rect(0,0,20,20);
        //context.lineTo(width/3,height/3);
        
        context.fillStyle = myColor[i];
        context.fill();
        context.restore();
  
        context.save();
        //context.translate(x,y);
        context.beginPath();
        //context.rotate(angle1);
        var text = planetInfo['sun'];
        var font = "bold 30px serif";
        context.font = font;
        // Move it down by half the text height and left by half the text width
        var tw = context.measureText(text).width;
        var th = context.measureText("w").width; // this is a GUESS of height
        context.fillText(text, (x)-10,(y)+10);
  
        context.restore();
        lastend1 += Math.PI*2*(sizeSlice/myTotal);
      }
  
      for(let i = 0; i<num;i++){
  
        let angle = (slice1 * i)-(slice1*3)*0.82;
        console.log(angle);
  
        x = cx + (width*0.13) * Math.sin(-angle);
        y = cy + (height*0.13) * Math.cos(-angle);
        /*context.save();
        context.translate(x,y);
        //context.rotate(angle);
        context.beginPath();
        //context.moveTo(width/3,height/3);
        context.rect(0,0,20,20);
        //context.lineTo(width/3,height/3);
        
        context.fillStyle = 'black';
        context.fill();
        context.restore();*/
  
        context.beginPath();
        //context.rotate(angle1);
        var text = '♍';
        var font = "bold 12px serif";
        context.font = font;
        console.log(signInfo['aries'].html);
        // Move it down by half the text height and left by half the text width
        var tw = context.measureText(text).width;
        var th = context.measureText("w").width; // this is a GUESS of height
        context.fillText(text, (x),(y));
  
        context.restore();
  
      }

    }

    useEffect(() => {
        
        const canvas = canvasRef.current
        canvas.width = 500
        canvas.height = 500
        const context = canvas.getContext('2d')
        let frameCount = 0;
        let animationFrameId;

        context.fillStyle = 'white';
        context.fillRect(0, 0, canvas.width, canvas.height);
        draw(context, canvas, frameCount);

        //Our draw came here
        /*const render = () => {
        frameCount++
        draw(context, canvas, frameCount)
        //canvasSketch(draw, settings);
        animationFrameId = window.requestAnimationFrame(render)
        }
        render()
        
        return () => {
            window.cancelAnimationFrame(animationFrameId)
        }*/
    },[]);

    return(
      <canvas id='can' ref={canvasRef} {...props}></canvas>
    )

}

export default Canvas
