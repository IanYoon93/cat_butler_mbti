import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Router from './router/Router';

function App(): React.ReactElement {
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  );
}

export default App;
