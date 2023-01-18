import React from 'react';
import './App.scss';
import logo from "./images/google.jpg"
import mic from "./images/google-voice.png"

function App() {
  return (
    <div className="App">
      <div className='logo'>
        <img src={logo} alt='google' />
        <div className='search'>
          <input type='search' />
          <img src={mic} alt='mic' />
        </div>
        <div className='btn'>
          <button>Google Search</button>
          <button>I'm feeling Lucky</button>
        </div>
        <div className='lang'>
          <p> Google is now availbale in &nbsp;<a href='हिंदी'>हिंदी</a> </p>
        </div>
      </div>
    </div>
  );
}

export default App;