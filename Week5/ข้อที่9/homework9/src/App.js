import React from 'react';
import './App.css';

function Popup(props) {
  return (
    <div className="borderComp">
      <h4 className="compDiv">{props.heading}</h4>
      <p className="compDiv innerBorder">Here is some inportant text or error or something.</p>
      <div className="btn-container">
        <button className="btn">Close</button>
      </div>
    </div>
  )
}

function App() {
  return (
    <Popup heading='This Is important'></Popup>
  );
}

export default App;
