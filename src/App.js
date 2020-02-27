import React from 'react';
import Headers from './components/Header';
import Contents from './components/Contents';
import Footers from './components/Footers';
import './App.scss';

function App() {
  return (
    <div className="App">
    <Headers />
    <Contents />
    <Footers />
    </div>
  );
}

export default App;
