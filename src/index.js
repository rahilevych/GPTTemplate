import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom';

import App from './App';
import './index.scss';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
