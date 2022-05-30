import React, { useState } from 'react';
import * as Tone from "tone";
import {planets,type,scale,currentBirthChart} from './data/settings';

const sampler = new Tone.Sampler({
  urls: {
    "A0": "A1.mp3",
    "A#0": "As1.mp3",
    "B0": "B1.mp3",
    "C0": "C1.mp3",
    "C#0": "Cs1.mp3",
    "D0": "D1.mp3",
    "D#0": "Ds1.mp3",
    "E0": "E1.mp3",
    "F0": "F1.mp3",
    "F#0": "Fs1.mp3", 
    "G0": "G1.mp3", 
    "G#0": "Gs1.mp3",
    
    "A1": "A2.mp3",
    "A#1": "As2.mp3",
    "B1": "B2.mp3",
    "C1": "C2.mp3",
    "C#1": "Cs2.mp3",
    "D1": "D2.mp3",
    "D#1": "Ds2.mp3",
    "E1": "E2.mp3",
    "F1": "F2.mp3",
    "F#1": "Fs2.mp3", 
    "G1": "G2.mp3", 
    "G#1": "Gs2.mp3",
    
    "A2": "A3.mp3",
    "A#2": "As3.mp3",
    "B2": "B3.mp3",
    "C2": "C3.mp3",
    "C#2": "Cs3.mp3",
    "D2": "D3.mp3",
    "D#2": "Ds3.mp3",
    "E2": "E3.mp3",
    "F2": "F3.mp3",
    "F#2": "Fs3.mp3", 
    "G2": "G3.mp3", 
    "G#2": "Gs3.mp3",

    "A3": "A4.mp3",
    "A#3": "As4.mp3",
    "B3": "B4.mp3",
    "C3": "C4.mp3",
    "C#3": "Cs4.mp3",
    "D3": "D4.mp3",
    "D#3": "Ds4.mp3",
    "E3": "E4.mp3",
    "F3": "F4.mp3",
    "F#3": "Fs4.mp3", 
    "G3": "G4.mp3", 
    "G#3": "Gs4.mp3",
    
    "A4": "A5.mp3",
    "A#4": "As5.mp3",
    "B4": "B5.mp3",
    "C4": "C5.mp3",
    "C#4": "Cs5.mp3",
    "D4": "D5.mp3",
    "D#4": "Ds5.mp3",
    "E4": "E5.mp3",
    "F4": "F5.mp3",
    "F#4": "Fs5.mp3", 
    "G4": "G5.mp3", 
    "G#4": "Gs5.mp3",

    "A5": "A6.mp3",
    "A#5": "As6.mp3",
    "B5": "B6.mp3",
    "C5": "C6.mp3",
    "C#5": "Cs6.mp3",
    "D5": "D6.mp3",
    "D#5": "Ds6.mp3",
    "E5": "E6.mp3",
    "F5": "F6.mp3",
    "F#5": "Fs6.mp3", 
    "G5": "G6.mp3", 
    "G#5": "Gs6.mp3",

    "A6": "A7.mp3",
    "A#6": "As7.mp3",
    "B6": "B7.mp3",
    "C6": "C7.mp3",
    "C#6": "Cs7.mp3",
    "D6": "D7.mp3",
    "D#6": "Ds7.mp3",
    "E6": "E7.mp3",
    "F6": "F7.mp3",
    "F#6": "Fs7.mp3", 
    "G6": "G7.mp3", 
    "G#6": "Gs7.mp3",
	},
	release: 1.35,
	baseUrl: "https://nbrosowsky.github.io/tonejs-instruments/samples/piano/",
}).toDestination();

const signToNotesLemniscate = require('./data/signsPianoNotes.json');

/*function midiNumberToPitch (midiNumber) {
  let octave = Math.floor(midiNumber / 12) - 1
  let pitch = midiNumber%12
  let pitchNames = ['C','Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab', 'A', 'Bb', 'B']
  
  return pitchNames[pitch] + octave
}*/

function playNote(now,planet){

  sampler.triggerAttack(signToNotesLemniscate[currentBirthChart[planet]][type]+scale,now);  
  sampler.triggerRelease(now+1);
}

const Panel = (props) =>  {
  const { alternateClick, otherAlternateClick, label } = props;

  const [userInput, setUserInput] = useState('');
  function testFunction(){
      console.log('test function');
  }
  const handleClick = () => {
    let now = Tone.now();
    let nowInc = 0;
    let count = 0;
    console.log(now);
    for (var planet in currentBirthChart) {
      if (count === 3) return;
      playNote(now+nowInc,planet);
      alternateClick(currentBirthChart[planet],(nowInc));
      nowInc += 0.5;
      count += 1;
    };
    return;
  }
  const handleOtherClick = () => {
    const now = Tone.now();
    let nowInc = 0;
    console.log(typeof(currentBirthChart));
    for (var planet in currentBirthChart) {
      playNote(now+nowInc,planet);
      alternateClick(currentBirthChart[planet],(nowInc));
      nowInc += 0.5;
    };
  }
  const handleRhythmClick = () => {
    /*const now = Tone.now();
    let nowInc = 0;
      setInterval(function(now,nowInc,count){
        playNote(now+nowInc,'sun')
      },1000);
      setTimeout(clearInterval)
      alternateClick(currentBirthChart['sun'],(nowInc));*/
      Tone.start();
      const now = Tone.now();
      let nowInc = 0;
      const loop = new Tone.Loop((time) => {
        
        playNote(now+nowInc,'sun')
        console.log(time);
        //nowInc += 1;
      }, "4n").start(0);
      const loop2 = new Tone.Loop((time) => {
        
        playNote(now+nowInc,'moon')
        console.log(time);
        //nowInc += 1;
      }, "4n").start(0.2);
      Tone.Transport.start();
      Tone.Transport.cancel(3);
  }
  return(
      <div id="panel">
          <button id="button" onClick={handleClick}>Big Three</button>
          <button id="button" onClick={handleOtherClick}>Whole Chart</button>
          <button id="button" onClick={handleRhythmClick}>Rhythm</button>
      </div>
  )
}

export default Panel