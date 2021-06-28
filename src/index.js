import React, { StrictMode, useState, useRef } from 'react';
import ReactDOM from 'react-dom';

import "./style.scss";

import Experience from './experience/experience.js';

const App = () => {
  const [displayModal, setDisplay] = useState('none');
  const [displayExperience, setExperience] = useState(<Experience />);

  return (
      <div id="app">
          <header> InTheCloud(s)</header>
          <div className="feedback" onClick={() => {
            setDisplay('block');
            setExperience('');
          }}>Feedback</div>
          <div className="modal" style={{display: displayModal}}>
          </div>
         {displayExperience}
          <footer></footer>
      </div>
  )
};

const rootElement = document.getElementById("root");

ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  rootElement
);