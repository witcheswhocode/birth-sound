import React, {useState} from 'react';
import './App.css';
import Canvas from './Canvas';
import Panel from './Panel';
import { SomeThing } from './SomeThing';


function App() {
  return (
    <div id="wrapper">
      <div id="title"><h1>Birth Sound</h1></div>
      <Canvas />
    </div>
  );
}

export default App;