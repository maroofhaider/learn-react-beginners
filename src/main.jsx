import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// window.addEventListener('load', (event) => {
//   console.log('page is fully loaded');
// });

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
