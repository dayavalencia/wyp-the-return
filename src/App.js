import React from 'react';
import { Button } from 'antd';
import dog from './dog.png';
import './App.css';
import 'antd/dist/antd.css';

class App extends React.Component {
  constructor () {
    super()

    this.state = {
      page: 0
    }
  }

  renderIdentifyDoggo () {
    this.setState({ page: 1 })
    console.log(navigator.camera)
  }

  render () {

      if (this.state.page === 0) {
          return (
            <div className="App">
              <header className="App-header">
                <img src={dog} style={{ marginBottom: '10px'}} className="App-logo" alt="logo" />
                <h1 style={{color: '#fff'}}>Who's Your Pupper?</h1>
                <Button type='primary' style={{ marginBottom: '15px'}} shape='round' size='large' onClick={e => this.renderIdentifyDoggo(e)}>IDENTIFY DOGGO</Button>
                <Button style={{ marginBottom: '15px'}} shape='round' size='large'> TAKE QUIZ</Button>
                <Button shape='round' size='large'>MY RESULTS</Button>
              </header>
            </div>
          );
      } else if (this.state.page === 1) {
        // checks lang for navigator.camera (which is available only on mobile!)
        if (navigator.camera) {
          return (
            <div className="App">
              CAMERA PLUGIN LOADED
            </div>
          )
        } else {
            return (
              <div className="App">
                CAMERA PLUGIN NOT AVAILABLE
              </div>
            )
        }
      }
  }
}

document.addEventListener("deviceready", onDeviceReady, false);
function onDeviceReady() {
    console.log(navigator.camera);
}

export default App;
