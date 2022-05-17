import logo from './logo.svg';
import './App.css';
import * as Tone from "tone";
import { Sequence } from 'tone';

const synth = new Tone.MembraneSynth().toMaster();
function playSynth(){
  const now = Tone.now()
  synth.triggerAttack("D4", "8n", now);
  synth.triggerAttack("F4", "8n", now + 0.5);
  synth.triggerAttack("A4", "8n", now + 1);
  synth.triggerAttack("C4", "8n", now + 1.5);
  synth.triggerAttack("E4", "8n", now + 2);
  //setTimeout(Tone.Transport.stop(),1000);
}
function App() {
  return (
    <div id="wrapper">
      <button id="button" onClick={playSynth}>Click Me</button>
    </div>
  );
}

export default App;