import React from 'react';
import { locatehtp } from './buttonfunctions';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className='headersec'>
        <div className='headertitle'>
          <p className='maintoptext'>Hive.<span style={{ color: '#F4D100' }}>Guessr</span></p>
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
        <div className='mainleft'>
          <img src="/resources/imageassetmain_1.png" alt="Error loading imageassetmain_1" className="imgmain"/>
          <div className='mainleftbuttons'>
            <div className='playgame'><button>Play Game</button></div>
            <div className='howplaygame'><button onClick={locatehtp}>How to Play</button></div>
          </div>
        </div>
        <div className='mainright'>
            <p className='mainrtext'>Can you <span style={{ color: '#F4D100' }}> guess</span> where on the <span style={{ color: '#F4D100' }}> Hive</span> you are <span style={{ color: '#F4D100' }}> standing</span>?</p>
            <p className='mainrsubtext'>You find yourself stuck in a snapshot of time on the Hive server, 
              the question is, Where are you?</p>
        </div>
      </div>
      <div className='bodylbsec'>
        <h1>Leaderboard</h1>
        <div className='rowlb'>
            <div className='lbholder'>
              <p>sample holder</p>
            </div>
            <div className='lbholder'>
              <p>sample holder</p>
            </div>
            <div className='lbholder'>
              <p>sample holder</p>
            </div>
        </div>
      </div>
      <div className='howtoplaysec'>
          <h1 id='htp'>How to Play</h1>
          <div className='howtoplaysecrow'>
            <div className='expsec'>
              <h2>Step 1</h2>
              <h3>Assess</h3>
              <p>Examine your surroundings to try identify what gamemode & map you are located in.</p>
            </div>
            <div className='expsec'>
              <h2>Step 2</h2>
              <h3>Guess</h3>
              <p>Think you've figured it out? Submit your guess and see if you are right!</p>
            </div>
            <div className='expsec'>
              <h2>Step 3</h2>
              <h3>Score</h3>
              <p>Earn points based on how accurate your guess is. The closer you get the more points you will score!</p>
            </div>
          </div>
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
