import React from 'react';
import './App.css';
import Skeleton from './Skeleton.js'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Skeleton />
        <Skeleton width="200px"/>
        <Skeleton content="none" />
        <Skeleton content="card" />
        <Skeleton content="card-2" />
        <Skeleton content="text" />
        <Skeleton contentNumber="8"/>
      </header>
    </div>
  );
}

export default App;
