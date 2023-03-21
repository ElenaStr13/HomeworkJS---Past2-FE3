import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// При натисканні на категорію статті мають фільтруватися відповідно до обраної категорії. 
// За замовчуванням обрано “All” - відображаються усі статті. 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);