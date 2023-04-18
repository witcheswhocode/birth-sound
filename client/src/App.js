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
      <p id='intro-p'>Create your personalized sound birth chart (natal chart) by filling in the form below with your birth details. 
      You can listen to your birth sound as if the signs represented the music theory wheel as explained in this <a href="https://www.tiktok.com/@corruptcatalyst/video/7041344969138785542">TikTok by corruptcatalyst</a>.</p>
      <br></br>
      <p id='disclaimer-p'>This is still a work in progress and a portfolio piece to present my creative abilities. This is best presented on desktop.</p>
      <EmojiLinebreak />
      <Canvas />
      <EmojiLinebreak />
      <Bylines />
    </div>
  );
}

export default App;