import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import App from './components/App'
import configureStore from './store/configureStore'
import * as Perf from 'react-addons-perf';

const store = configureStore();

render(
  <Provider store={ store }>
    <App />
  </Provider>,
  document.getElementById('app')
);

// MWE: will only work on non prod builds
window.perfStart = function() {
  Perf.start();
}

window.perfStop = function() {
  Perf.stop();
  Perf.printInclusive();
  Perf.printWasted();
}