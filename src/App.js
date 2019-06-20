import React from 'react';
import { Button } from 'antd';
import dog from './dog.png';
import './App.css';
import 'antd/dist/antd.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={dog} style={{ marginBottom: '10px'}} className="App-logo" alt="logo" />
        <h1 style={{color: '#fff'}}>Who's Your Pupper?</h1>
        <Button style={{ marginBottom: '15px'}} shape='round' size='large'>IDENTIFY DOGGO</Button>
        <Button style={{ marginBottom: '15px'}} shape='round' size='large'> TAKE QUIZ</Button>
        <Button shape='round' size='large'>MY RESULTS</Button>
      </header>
    </div>
  );
}

export default App;
