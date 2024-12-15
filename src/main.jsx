import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.css'
import App from './App.jsx'
import GtrContextProvider from './context.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GtrContextProvider>
    <App />
    </GtrContextProvider>
  </StrictMode>
)
