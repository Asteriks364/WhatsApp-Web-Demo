import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

import AppContext from './context/AppContext';
import App from './App';
import './style.css';

ReactDOM.render(
  <React.StrictMode>
    <AppContext>
      <App className="app__wrapper" />
    </AppContext>
  </React.StrictMode>,
  document.getElementById('app'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
