import React, { useRef, useEffect } from 'react';
//const canvasSketch = require('canvas-sketch');


const Canvas = props => {
    const canvasRef = useRef(null);
    const width = window.innerWidth * 0.5;
    const height = window.innerHeight * 0.5;


    const draw = (ctx, frameCount) => {
        ctx.fillStyle = 'white';
        ctx.fillRect(0, 0, width, height);
        var lastend = 0;
        var data = [10,10,10,10,10,10,10,10,10,10,10,10];
        var myTotal = 0;
        var myColor = ['red','green','blue','purple','red','green','blue','purple','red','green','blue','purple'];
        var text = "test"

        for(var e = 0; e < data.length; e++)
        {
        myTotal += data[e];
        }

        for (var i = 0; i < data.length; i++) {
            ctx.fillStyle = myColor[i];
            ctx.beginPath();
            ctx.moveTo(width/2,height/2);
            ctx.arc(width/2,height/2,height/2,lastend,lastend+(Math.PI*2*(data[i]/myTotal)),false);
            ctx.lineTo(width/2,height/2);
            ctx.fill();
            lastend += Math.PI*2*(data[i]/myTotal);
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
        context.fillRect(0, 0, width, height);
        
        //Our draw came here
        const render = () => {
        frameCount++
        draw(context, frameCount)
        //canvasSketch(draw, settings);
        animationFrameId = window.requestAnimationFrame(render)
        }
        render()
        
        return () => {
        window.cancelAnimationFrame(animationFrameId)
        }
    })

    return(
      <canvas id='can' ref={canvasRef} {...props}></canvas>
    )

}

export default Canvas
