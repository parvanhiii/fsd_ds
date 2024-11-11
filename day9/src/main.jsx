import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Marks from './Marks.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Marks m1="7.7" m2="8.8" m3="7.5"/>
  </StrictMode>,
)
