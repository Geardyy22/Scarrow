import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/bootstrap.min.css';
import login from './Pages/login.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <login />
  </StrictMode>,
)
