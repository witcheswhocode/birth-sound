import React, { useState } from 'react';
import * as Tone from "tone";

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

const signToNotesLemniscate = {
  'aries': {'major':'C','minor':'Am'},
  'taurus': {'major':'G','minor':'Em'},
  'gemini': {'major':'D','minor':'Bm'}, 
  'cancer': {'major':'A','minor':'F#m'},
  'leo': {'major':'E','minor':'C#m'},
  'virgo': {'major':'B','minor':'G#m'},
  'libra': {'major':'F#','minor':'D#m'}, // major Gb, minor Ebm
  'scorpio': {'major':'C#','minor':''}, // major Db, minor Bbm
  'sagittarius': {'major':'G#','minor':'Fm'}, // major Ab
  'capricorn': {'major':'D#','minor':'Cm'}, // major Eb
  'aquarius': {'major':'A#','minor':'Gm'}, // major Bb
  'pisces': {'major':'F','minor':'Dm'}, 

}
const signToNoteSynth = {
  'virgo': 'Eb',
  'libra': 'Bb',
  'scorpio': 'F',
  'sagittarius': 'C',
  'capricorn': 'G',
  'aquarius': 'D',
  'pisces': 'A',
  'aries': 'E',
  'taurus': 'B',
  'gemini': 'Gb',
  'cancer': 'A',
  'leo': 'Ab',
}
const lizBirthChart = {
  'sun': 'virgo',
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
const taylorBirthChart = {
  'sun': 'sagittarius',
  'moon': 'cancer',
  'asc': 'scorpio',
  'mercury': 'capricorn',
  'venus': 'aquarius',
  'mars': 'scorpio',
  'jupiter': 'cancer',
  'saturn': 'capricorn',
  'uranus': 'capricorn',
  'neptune': 'capricorn',
  'pluto': 'scorpio',
  'northnode': 'aquarius',
  'chiron': 'cancer',
  'mc': 'virgo',
}
const rihannaBirthChart = {
  'sun': 'pisces',
  'moon': 'aries',
  'asc': 'aries',
  'mercury': 'aquarius',
  'venus': 'aries',
  'mars': 'sagittarius',
  'jupiter': 'aries',
  'saturn': 'capricorn',
  'uranus': 'capricorn',
  'neptune': 'capricorn',
  'pluto': 'scorpio',
  'northnode': 'pisces',
  'chiron': 'gemini',
  'mc': 'capricorn',
}
const krystophBirthChart = {
  'sun': 'gemini',
  'moon': 'gemini',
  'asc': 'taurus',
  'mercury': 'gemini',
  'venus': 'gemini',
  'mars': 'aries',
  'jupiter': 'virgo',
  'saturn': 'aquarius',
  'uranus': 'capricorn',
  'neptune': 'capricorn',
  'pluto': 'scorpio',
  'northnode': 'capricorn',
  /*'chiron': 'gemini',
  'mc': 'capricorn',*/
}
const planets = ['sun', 'moon', 'asc', 'mercury', 'venus', 'mars', 'jupiter', 'saturn', 'uranus', 'neptune', 'pluto'/*, 'northnode', 'chiron', 'mc' */];

/*function midiNumberToPitch (midiNumber) {
  let octave = Math.floor(midiNumber / 12) - 1
  let pitch = midiNumber%12
  let pitchNames = ['C','Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab', 'A', 'Bb', 'B']
  
  return pitchNames[pitch] + octave
}*/

const scale = 2;
const type = 'major';
const currentBirthChart = krystophBirthChart;

function playBigThree(){
  const now = Tone.now();
  const bigThree = ['sun', 'moon', 'asc'];

  sampler.triggerAttack(signToNotesLemniscate[currentBirthChart[bigThree[0]]][type]+scale,now);
  sampler.triggerRelease(now + 1);
  sampler.triggerAttack(signToNotesLemniscate[currentBirthChart[bigThree[1]]][type]+scale,now+0.5);
  sampler.triggerRelease(now+1.5);
  sampler.triggerAttack(signToNotesLemniscate[currentBirthChart[bigThree[2]]][type]+scale,now+1);
  sampler.triggerRelease(now+2);
   
  //setTimeout(Tone.Transport.stop(),1000);
}
function playAll(){
  const now = Tone.now();
  const signs = ['sun', 'moon', 'asc', 'mercury', 'venus', 'mars', 'jupiter', 'saturn', 'uranus', 'neptune', 'pluto', 'northnode', 'chiron', 'mc' ];

  sampler.triggerAttack(signToNotesLemniscate[currentBirthChart[signs[0]]][type]+scale,now);  
  sampler.triggerRelease(now+1);
  sampler.triggerAttack(signToNotesLemniscate[currentBirthChart[signs[1]]][type]+scale,now+0.5);  
  sampler.triggerRelease(now+1.5);
  sampler.triggerAttack(signToNotesLemniscate[currentBirthChart[signs[2]]][type]+scale,now+1);  
  sampler.triggerRelease(now+2);
  sampler.triggerAttack(signToNotesLemniscate[currentBirthChart[signs[3]]][type]+scale,now+1.5);  
  sampler.triggerRelease(now+2.5);
  sampler.triggerAttack(signToNotesLemniscate[currentBirthChart[signs[4]]][type]+scale,now+2);  
  sampler.triggerRelease(now+3);
  sampler.triggerAttack(signToNotesLemniscate[currentBirthChart[signs[5]]][type]+scale,now+2.5);  
  sampler.triggerRelease(now+3.5);
  sampler.triggerAttack(signToNotesLemniscate[currentBirthChart[signs[6]]][type]+scale,now+3);  
  sampler.triggerRelease(now+4);
  sampler.triggerAttack(signToNotesLemniscate[currentBirthChart[signs[7]]][type]+scale,now+3.5);  
  sampler.triggerRelease(now+4.5);
  sampler.triggerAttack(signToNotesLemniscate[currentBirthChart[signs[8]]][type]+scale,now+4);  
  sampler.triggerRelease(now+5);
  sampler.triggerAttack(signToNotesLemniscate[currentBirthChart[signs[9]]][type]+scale,now+4.5);  
  sampler.triggerRelease(now+5.5);
  sampler.triggerAttack(signToNotesLemniscate[currentBirthChart[signs[10]]][type]+scale,now+5);  
  sampler.triggerRelease(now+6);
  sampler.triggerAttack(signToNotesLemniscate[currentBirthChart[signs[11]]][type]+scale,now+5.5);  
  sampler.triggerRelease(now+6.5);
  sampler.triggerAttack(signToNotesLemniscate[currentBirthChart[signs[12]]][type]+scale,now+6);  
  sampler.triggerRelease(now+7);
  sampler.triggerAttack(signToNotesLemniscate[currentBirthChart[signs[13]]][type]+scale,now+6.5);  
  sampler.triggerRelease(now+7.5);
}

const Panel = (props) =>  {

  console.log(props);
  const { alternateClick, otherAlternateClick, label } = props;

  const [userInput, setUserInput] = useState('');
  function testFunction(){
      console.log('test function');
  }
  const handleClick = () => {
    testFunction();
    alternateClick(userInput);
  }
  const handleOtherClick = () => {
    testFunction();
    otherAlternateClick(userInput);
  }
  return(
      <div id="panel">
          <button id="button" onClick={handleClick}>Big Three</button>
          <button id="button" onClick={handleOtherClick}>Whole Chart</button>
      </div>
  )
}

export default Panel