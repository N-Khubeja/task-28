import React from 'react';
import './App.css';
import Router from './routes/Router';
import Navigation from './components/Navigation';
import { routes } from './routes/routes';

function App() {
  return (
    <>
      {/* <Navigation routes={routes}/> */}
      <Router/>
    </>
  );
}

export default App;
