import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@fontsource/nothing-you-could-do';
import './index.css';
import App from './App.jsx';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
