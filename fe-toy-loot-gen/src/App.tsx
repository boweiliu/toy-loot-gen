import React from 'react';
import './App.css';

function App() {
  return (
    <>
    <div className="App">
      <div className="title">
        <div className="title-text">

        Toy loot gen game
        </div>
      </div>
      <div className="body">
      <div className="body-left-small">
        <button>click me</button>
        <div>
          Item:
        </div>
        <pre>
          {`Attack: 5-6 plain bludgeoning damage per action.\nMod: -5L piercing resist, -5L slashing resist`}
        </pre>
      </div>
      <div className="body-right-big">
        your robot name here
      </div>
      </div>
    </div>
    </>
  );
}

export default App;
