import './App.css';
import Canvas from './Canvas';
import Panel from './Panel';

function App() {
  return (
    <div id="wrapper">
      <Canvas style={{
          boxShadow:
            "0 13px 27px -5px rgba(50, 50, 93, 0.25),    0 8px 16px -8px rgba(0, 0, 0, 0.3)"
        }} />
      <Panel />
    </div>
  );
}

export default App;