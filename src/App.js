import React from 'react';
import './App.css';
import Bylines from './Bylines';
import Canvas from './Canvas';
import EmojiLinebreak from './EmojiLinebreak';


function App() {
  return (
    <div id="wrapper">
      <div id="title"><h1>Birth Sound</h1></div>
      <EmojiLinebreak />
      <p id='intro-p'>Create your personalized sound birth chart (natal chart) by filling in the form below. 
      You can listen to your birthsound as if the signs represented the music theory wheel as explained in this TikTok by corruptcatalyst.</p>
      <EmojiLinebreak />
      <Canvas />
      <EmojiLinebreak />
      <Bylines />
    </div>
  );
}

export default App;