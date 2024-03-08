import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// bootstrap css file
import 'bootstrap/dist/css/bootstrap.min.css'
// bootstrap js file
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <StrictMode>
    <App />
    </StrictMode>
);

