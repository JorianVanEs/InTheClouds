import React, {StrictMode} from 'react';
import ReactDOM from 'react-dom';
import "./style.scss";

const App = () => {

    return (
        <main>
            <header> InTheCloud(s)</header>
            <div id="game-window"></div>
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