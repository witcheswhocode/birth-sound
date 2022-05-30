import React, {useState} from 'react';
import './App.css';
import Canvas from './Canvas';
import Panel from './Panel';
import { SomeThing } from './SomeThing';


function App() {
  return (
    <div id="wrapper">
      <Canvas />
      <SomeThing />
    </div>
  );
}

export default App;