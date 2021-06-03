import React, {StrictMode} from 'react';
import ReactDOM from 'react-dom';

import "./style.scss";

import Experience from './experience/experience.js';

const App = () => {

    return (
        <main>
            <header> InTheCloud(s)</header>
            <Experience />
            <footer></footer>
        </main>
    )
};

const rootElement = document.getElementById("root");

ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  rootElement
);