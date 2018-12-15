import * as React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';


/**
 * Initialise the app
 */
window.addEventListener('load', initApp);

/**
 * Render the react app
 */
function initApp() {
  render(
    <BrowserRouter>
      <Routes />
    </BrowserRouter>,
    document.getElementById('container'),
  );
}
