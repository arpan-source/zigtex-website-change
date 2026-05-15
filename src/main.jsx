import {StrictMode} from 'react';
import {hydrateRoot} from 'react-dom/client';
import { BrowserRouter } from 'react-router';
import { HelmetProvider } from 'react-helmet-async';
import App from './App.jsx';
import './index.css';

hydrateRoot(
  document.getElementById('root'),
  <StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </HelmetProvider>
  </StrictMode>
);
