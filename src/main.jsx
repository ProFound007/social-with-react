// React library
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";
// CSS library
import './assets/css/index.css'
// Own library
import App from './App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename='/social-with-react'>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
