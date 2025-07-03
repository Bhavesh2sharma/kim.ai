import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css'; // keep this for any other global styles
import App from './App.jsx';
import '@fontsource/poppins'; // Import the Poppins font

// Apply Poppins globally to the body
document.body.style.fontFamily = 'Poppins, sans-serif';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);
