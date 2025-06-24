import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Card from './card.jsx'
import Score from './score.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Card />
    <Score />
  </StrictMode>,
)
