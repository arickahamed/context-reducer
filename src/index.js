import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import DataState from './components/context/DataState';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <DataState>
    <App />
  </DataState>
);

