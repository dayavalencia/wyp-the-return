import React from 'react';
import { Button } from 'antd';
import dog from './dog.png';
import PrivacyPolicy from './PrivacyPolicy.js';
import QuizItem from './QuizItem.js';
import './App.css';
import 'antd/dist/antd.css';

class App extends React.Component {
  constructor () {
    super()

    this.state = {
      page: 0,
      dogRankings: []
    }
  }

  renderIdentifyDoggo () {
    this.setState({ page: 1 })
    console.log(navigator.camera)
  }

  renderQuiz () {
    this.setState({ page: 2 })
  }

  renderResults () {
    this.setState({ page: 3 })
  }

  renderPrivacyPolicy () {
    this.setState({ page: 4 })
  }

  renderMenu() {
    this.setState({ page: 0 })
  }

  render () {

      if (this.state.page === 0) {
          return (
            <div className="App">
              <header className="App-header">
                <img src={dog} style={{ marginBottom: '10px'}} className="App-logo" alt="logo" />
                <h1 style={{color: '#fff'}}>Who's Your Pupper?</h1>
                <Button type='primary' style={{ marginBottom: '15px'}} shape='round' size='large' onClick={e => this.renderIdentifyDoggo(e)}>IDENTIFY DOGGO</Button>
                <Button style={{ marginBottom: '15px'}} shape='round' size='large' onClick={e => this.renderQuiz(e)}>TAKE QUIZ</Button>
                <Button shape='round' size='large' onClick={e => this.renderResults(e)}>MY RESULTS</Button>
                <br />
                <a href='#' style={{ fontSize: '3vh' }} onClick={e => this.renderPrivacyPolicy(e)}>Privacy Policy</a>
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

      } else if  (this.state.page === 2) {
        return (
          <div className="App">
              <header className="App-header">
                <h1 style={{color: '#fff'}}>Pupper Matching Quiz</h1>
                <QuizItem />
                <Button shape='round' size='large' onClick={e => this.renderMenu(e)}>BACK TO MENU</Button>
              </header>
          </div>
        )
        
      } else if  (this.state.page === 3) {
        return (
          <div className="App">
              <header className="App-header">
                <h1 style={{color: '#fff'}}>Pupper Matching Results</h1>
                {/*insert separate component lol*/}
                <Button shape='round' size='large' onClick={e => this.renderMenu(e)}>BACK TO MENU</Button>
              </header>
          </div>
        )
        
      } else if (this.state.page === 4) {
        return (
          <div className="App">
              <header className="App-header">
                <h1 style={{color: '#fff'}}>Privacy Policy</h1>
                <PrivacyPolicy />
                <Button shape='round' size='large' onClick={e => this.renderMenu(e)}>BACK TO MENU</Button>
              </header>
          </div>
        )
      }

  }
}

export default App;
