import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/variables.scss'
import './styles/normalize.scss'
import './styles/fonts.scss'
import './styles/utils.scss'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
