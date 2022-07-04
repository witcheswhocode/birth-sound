import React, { useState } from 'react';
import * as Tone from "tone";
import {mergeDurationVelocityAndPitch,mergeDurationsAndPitch} from "./Rhythm";
import {planets,type,scale} from './data/settings';

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



const Panel = (props) =>  {
  const { alternateClick, currentBirthChart } = props;

  const [userInput, setUserInput] = useState('');
  
  function playNote(now,planet){
    console.log(signToNotesLemniscate[currentBirthChart[planet]][type]+scale)
    sampler.triggerAttack(signToNotesLemniscate[currentBirthChart[planet]][type]+scale,now);  
    sampler.triggerRelease(now+1);
  }
  const handleClick = () => {
    let now = Tone.now();
    let nowInc = 0;
    let count = 0;
    for (var planet in planets) {
      if (count === 3) return;
      playNote(now+nowInc,planets[planet]);
      alternateClick(currentBirthChart[planets[planet]],planets[planet],(nowInc));
      nowInc += 0.5;
      count += 1;
    };
    return;
  }
  const handleOtherClick = () => {
    const now = Tone.now();
    let nowInc = 0;
    for (var planet in planets) {
      playNote(now+nowInc,planets[planet]);
      alternateClick(currentBirthChart[planets[planet]],planets[planet],(nowInc));
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
      const synth = new Tone.Synth().toDestination();
      //const seq = new Tone.Sequence((time, note) => {
      //  sampler.triggerAttackRelease(note, 0.1, time);
      //  // subdivisions are given as subarrays
      //}, [signToNotesLemniscate[currentBirthChart['sun']][type]+scale,
      // [signToNotesLemniscate[currentBirthChart['sun']][type]+scale, signToNotesLemniscate[currentBirthChart['moon']][type]+scale, signToNotesLemniscate[currentBirthChart['asc']][type]+scale],]).start(0);
      var seqCount2 = 1;  
      const seq2 = new Tone.Sequence((time, note) => {
          if (seqCount2 !== 3 && seqCount2 !== 4 && seqCount2 !== 5 && seqCount2 !== 6){
            sampler.triggerAttackRelease(note, 0.1, time);
            alternateClick(currentBirthChart['moon'],'moon',0.1);
          }
          else if (seqCount2 === 3){
            seqCount2 = 0;
          }
          seqCount2 += 1;
          // subdivisions are given as subarrays
        }, [signToNotesLemniscate[currentBirthChart['moon']][type]+scale, signToNotesLemniscate[currentBirthChart['moon']][type]+scale],0.5).start(0);

        var seqCount3 = 1;  
        const seq3 = new Tone.Sequence((time, note) => {
            if (seqCount3 === 3 || seqCount3 === 4 || seqCount3 === 6){
              console.log('seqCount3');
              sampler.triggerAttackRelease(note, 0.1, time);
              alternateClick(currentBirthChart['sun'],'sun',0.1);
              if (seqCount3 === 6) seqCount3 = 0;
            }
            seqCount3 += 1;
            // subdivisions are given as subarrays
          }, [signToNotesLemniscate[currentBirthChart['sun']][type]+scale,signToNotesLemniscate[currentBirthChart['sun']][type]+scale,signToNotesLemniscate[currentBirthChart['sun']][type]+scale],1).start(0);

          var seqCount4 = 1;  
          const seq4 = new Tone.Sequence((time, note) => {
              if (seqCount4 === 3){
                console.log('seqCount4');
                sampler.triggerAttackRelease(note, 0.1+2, time);
                alternateClick(currentBirthChart['mercury'],'mercury',2);
              }
              else if (seqCount4 === 4 || seqCount4 === 6){
                sampler.triggerAttackRelease(note, 0.1, time);
                alternateClick(currentBirthChart['mercury'],'mercury',0.1);
                if (seqCount4 === 6) seqCount4 = 0;
              }
              seqCount4 += 1;
              // subdivisions are given as subarrays
            }, [signToNotesLemniscate[currentBirthChart['mercury']][type]+scale,signToNotesLemniscate[currentBirthChart['mercury']][type]+scale,signToNotesLemniscate[currentBirthChart['mercury']][type]+scale],0.5).start(0);
  
      Tone.Transport.start();
      setTimeout(function() {
        console.log('Now should be stopping');
        seq2.dispose();
        seq3.dispose();
        //seq4.dispose();
        //sampler.disconnect();
      },10000)
  }

  const handleOtherRhythmClick = () => {
    var sun = signToNotesLemniscate[currentBirthChart['sun']][type]+scale;
    var asc = signToNotesLemniscate[currentBirthChart['asc']][type]+scale;

    var firstHouseNotes = [sun,sun,sun];
    var firstHouseDurations = ["8n","8n","2n + 4n"];
    var firstHouseNotes1 = [asc,asc,asc];
    var firstHouseDurations1 = ["4n + 8n","4t","4t"];

    // processDurationNotation() is called inside mergeDurationsAndPitch()
    var myMelody = mergeDurationsAndPitch(firstHouseDurations, firstHouseNotes); 
    var myMelody1 = mergeDurationsAndPitch(firstHouseDurations1, firstHouseNotes1); 
    console.log(myMelody);
    console.log(myMelody1);
    Tone.start();
    //use an array of objects as long as the object has a "time" attribute
    var part = new Tone.Part(function(time, value){
      console.log('1 '+value.note+' '+value.duration+' '+value.time);
      //the value is an object which contains both the note and the duration
      sampler.triggerAttackRelease(value.note, value.duration, value.time);
    }, myMelody).start(0); 
    //use an array of objects as long as the object has a "time" attribute
    var part1 = new Tone.Part(function(time, value){
      console.log('2 '+value.note+' '+value.duration+' '+value.time);
      //the value is an object which contains both the note and the duration
      sampler.triggerAttackRelease(value.note, value.duration, value.time);
    }, myMelody1).start(0.25); 

    //TRANSPORT
    part.loopStart = "0";
    part.loopEnd = "6:0";
    part.loop = 3;

    //TRANSPORT
    part1.loopStart = "0";
    part1.loopEnd = "6:0";
    part1.loop = 3;
    
    Tone.Transport.bpm.value = 170;   
    Tone.Transport.start("+0.1");
  }

  const heyHo = () => {
    var HeyHoNotes = ["D4","C4","D4","D4","D4","A3",  "D4","D4","E4","E4","F4","F4","F4","F4","E4",   "A4","G4","A4","G4","A4","G4","A4","G4","F4","E4"];
    var HeyHoDurations = ["2n","2n","4n","8n","8n","2n", "4n","4n","4n","4n","8n","8n","8n","8n","2n","4n+8n","8n","4n+8n","8n","4n+8n","8n","8n","8n","8n","8n"];
    var HeHoVelocity = [0.9,0.9,0.9,0.7,0.7,0.9,  0.9,0.7,0.9,0.7,0.9,0.7,0.7,0.7,0.9,   0.9,0.7,0.9,0.7,0.9,0.7,0.9,0.7,0.7,0.7];
		Tone.start();
    //var HeyHoMelody = Rhythm.mergeDurationVelocityAndPitch(HeyHoDurations, HeyHoNotes, HeHoVelocity);
    var HeyHoMelody = mergeDurationVelocityAndPitch(HeyHoDurations, HeyHoNotes, HeHoVelocity);
    console.log(HeyHoMelody);
    var count = 0;
    var heyHoPart1 = new Tone.Part(function(time, value){
        sampler.triggerAttackRelease(value.note, value.duration, time, value.velocity)
        console.log('1: '+HeyHoNotes[count]+' '+value.note+' '+value.duration+' '+time);
        count += 1;
    }, HeyHoMelody ).start(0);
    sampler.volume.value = -5;

    // offset 2 bars
    var heyHoPart2 = new Tone.Part(function(time, value){
      sampler.triggerAttackRelease(value.note, value.duration, time, value.velocity)
      //console.log('2: '+value.note+' '+value.duration+' '+time);
    }, HeyHoMelody ).start("2*1m");

    // offset 4 bars
    var heyHoPart3 = new Tone.Part(function(time, value){
      sampler.triggerAttackRelease(value.note, value.duration, time, value.velocity)
      //console.log('3: '+value.note+' '+value.duration+' '+time);
    }, HeyHoMelody ).start("4*1m");
    sampler.volume.value = -10;

    //TRANSPORT
    heyHoPart1.loopStart = "0";
    heyHoPart1.loopEnd = "6:0";
    heyHoPart1.loop = 1;

    // still play 6 bars (but start 2 bars late)
    heyHoPart2.loopStart = "0";
    heyHoPart2.loopEnd = "6:0";
    heyHoPart2.loop = 1;

    // still play 6 bars (but start 4 bars late)
    heyHoPart3.loopStart = "0";
    heyHoPart3.loopEnd = "6:0";
    heyHoPart3.loop = 1;

    Tone.Transport.bpm.value = 170;   
    Tone.Transport.start("+0.1");
}

const heyHo2 = () => {
  // fugue
  var HeyHoNotes = ["D4","C4","D4","D4","D4","A3",  "D4","D4","E4","E4","F4","F4","F4","F4","E4",   "A4","G4","A4","G4","A4","G4","A4","G4","F4","E4"];
  var HeyHoDurations1 = ["2n","2n","4n","8n","8n","2n", "4n","4n","4n","4n","8n","8n","8n","8n","2n","4n+8n","8n","4n+8n","8n","4n+8n","8n","8n","8n","8n","8n"];
  var HeyHoDurations2 = ["4n","4n","8n","16n","16n","4n", "8n","8n","8n","8n","16n","16n","16n","16n","4n","8n+16n","16n","8n+16n","16n","8n+16n","16n","16n","16n","16n","16n"];
  var HeHoVelocity = [0.9,0.9,0.9,0.7,0.7,0.9,  0.9,0.7,0.9,0.7,0.9,0.7,0.7,0.7,0.9,   0.9,0.7,0.9,0.7,0.9,0.7,0.9,0.7,0.7,0.7];
  Tone.start();
  //var HeyHoMelody = Rhythm.mergeDurationVelocityAndPitch(HeyHoDurations, HeyHoNotes, HeHoVelocity);
  var HeyHoMelody1 = mergeDurationVelocityAndPitch(HeyHoDurations1, HeyHoNotes, HeHoVelocity);
  var HeyHoMelody2 = mergeDurationVelocityAndPitch(HeyHoDurations2, HeyHoNotes, HeHoVelocity);

  var count = 0;
  var heyHoPart1 = new Tone.Part(function(time, value){
      sampler.triggerAttackRelease(value.note, value.duration, time, value.velocity)
      //console.log('1: '+HeyHoNotes[count]+' '+value.note+' '+value.duration+' '+time);
      //count += 1;
  }, HeyHoMelody1 ).start(0);
  sampler.volume.value = -5;

  // offset 2 bars
  var heyHoPart2 = new Tone.Part(function(time, value){
    sampler.triggerAttackRelease(value.note, value.duration, time, value.velocity)
    //console.log('2: '+value.note+' '+value.duration+' '+time);
  }, HeyHoMelody2 ).start("2*1m");

  // offset 4 bars
  /*var heyHoPart3 = new Tone.Part(function(time, value){
    sampler.triggerAttackRelease(value.note, value.duration, time, value.velocity)
    //console.log('3: '+value.note+' '+value.duration+' '+time);
  }, HeyHoMelody ).start("4*1m");
  sampler.volume.value = -10;*/

  //TRANSPORT
  heyHoPart1.loopStart = "0";
  heyHoPart1.loopEnd = "6:0";
  heyHoPart1.loop = 1;

  // still play 6 bars (but start 2 bars late)
  heyHoPart2.loopStart = "0";
  heyHoPart2.loopEnd = "6:0";
  heyHoPart2.loop = 2;

  // still play 6 bars (but start 4 bars late)
  /*heyHoPart3.loopStart = "0";
  heyHoPart3.loopEnd = "6:0";
  heyHoPart3.loop = 1;*/

  Tone.Transport.bpm.value = 170;   
  Tone.Transport.start("+0.1");
}

const mariamaria = () => {
  const synth = new Tone.Synth().toDestination();

  var mariaPitches = ["Eb4","A4","Bb4","Eb4","A4","Bb4","C5","A4","Bb4","C5","A4","Bb4","Bb4","A4","G4","F4","Eb4","F4","Bb4","Ab4","G4","F4","Eb4","F4","Eb4","G4"];

  var mariaDurations = ["8n","8n","2n + 4n","8n","4t","4t","4t","4t","4t","4t","8n","2n + 4n","8n","8n","8n","8n","8n","4n + 8n","8n","8n","8n","8n","8n","4n","4n","2n"];

  // processDurationNotation() is called inside mergeDurationsAndPitch()
  var myMelody = mergeDurationsAndPitch(mariaDurations, mariaPitches); 
  console.log(myMelody);
  Tone.start();
  //use an array of objects as long as the object has a "time" attribute
  var part = new Tone.Part(function(time, value){
    console.log(value.note+' '+value.duration+' '+value.time);
    //the value is an object which contains both the note and the duration
    synth.triggerAttackRelease(value.note, value.duration, value.time);
  }, myMelody).start(0); 
  Tone.Transport.start("+0.1");
}

  return(
      <div id="panel">
          <button id="button" onClick={handleClick}>Three</button>
          <button id="button" onClick={handleOtherClick}>All</button>
          <button id="button" onClick={handleRhythmClick}>1</button>
          <button id="button" onClick={handleOtherRhythmClick}>2</button>
          <button id="button" onClick={heyHo}>Hey Ho</button>
          <button id="button" onClick={heyHo2}>Hey Ho 2</button>
          <button id="button" onClick={mariamaria}>Maria</button>
      </div>
  )
}

export default Panel