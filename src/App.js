import React from 'react';
import { Button } from 'antd';
import dog from './dog.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={dog} className="App-logo" alt="logo" />
        <Button></Button>
      </header>
    </div>
  );
}

export default App;
