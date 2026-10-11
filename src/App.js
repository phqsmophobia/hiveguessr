import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className='headersec'>
        <div className='headertitle'>
          <img src="/resources/logo.png" alt="Hive.Guessr" className="logo"/>
        </div>
        <div className='headersplit'>
          <button>Leaderboard</button>
          <button>How to Play</button>
          <div className='playgame'>
            <button>Play Game</button>
          </div>
        </div>
      </div>
      <div className='bodysec'>
        <p>Can you guess where on the hive you are located?</p>
        <p>You find yourself stuck in a snapshot of time on the hive server, 
          the question is, Where are you?</p>
        <button>Play Game</button>
        <button>How to Play</button>
      </div>
      <footer className="footersec">
        <p>Hive.Guessr has <b>NO</b> affiliation with The Hive, it is a fan-made Project.</p>
        <div className='footbuttons'>
          <button>About</button>
          <button>Contact</button>
        </div>
      </footer>
    </div>
  );
}

export default App;
