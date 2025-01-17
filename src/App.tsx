import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Router from './router/Router';
import './App.css';

function App(): React.ReactElement {
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  );
}

export default App;
