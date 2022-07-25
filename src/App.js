import React from 'react';
import './App.css';
import Bylines from './Bylines';
import Canvas from './Canvas';


function App() {
  return (
    <div id="wrapper">
      <div id="title"><h1>Birth Sound</h1></div>
      <p id='intro-p'>Inspired by corruptcatalyst on TikTok and his tool to see how songs would look on a birthchart. There is now there is a way to hear your own birthchart.</p>

      <Canvas />
      <Bylines />
    </div>
  );
}

export default App;