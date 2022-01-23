
import React from 'react';
import './App.css';
import { useRoutes } from 'react-router';
import routes from './route';

function App() {
  return (
    <div className="App">
      {useRoutes(routes)}
    </div>
  );
}

export default App;
