import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import Marks from './Marks.jsx';
import Displaymarks from './Displaymarks.jsx'; // Ensure this has the correct case

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Displaymarks />
  </StrictMode>
);
