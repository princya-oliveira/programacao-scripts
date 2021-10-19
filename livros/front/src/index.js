import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './componentes/App/App';

import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
    <div>
      <App />
    </div>
  </BrowserRouter>,
  document.getElementById('root')
);


