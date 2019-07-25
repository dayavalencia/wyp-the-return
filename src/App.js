import React, { Fragment } from 'react';
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
      currentQuestion: 0,
      dogRankings: {
          'pug': 0,
          'corgi': 0,
          'chihuahua': 0,
          'shepherd': 0,
          'husky': 0
      },
      hasRanking: false
    }
  }

  nextQuestion = () => {
    if (this.state.currentQuestion < 9) {
      this.setState({ currentQuestion: this.state.currentQuestion + 1 })
    } else {
      this.setState({ page: 6, hasRanking: true })
    }
  }

  renderIdentifyDoggo = () => {
    this.setState({ page: 1 })
    console.log(navigator.camera)
  }

  renderQuiz = () => {
    this.setState({ page: 5 })
  }

  renderResults = () => {
    this.setState({ page: 6 })
  }

  renderPrivacyPolicy = () => {
    this.setState({ page: 7 })
  }

  choosePhotoSource() {
    this.setState({ page:1 })
  }

  takeDoggoPhotoFromCam() {
    this.setState({ page:2 })
    
    let cam = {
      init:function () {
        document.getElementById('cambtn').addEventListener('click', cam.takePhoto);
      },
      takePhoto:function() {
        let opts={
            quality: 80,
            allowEdit: false,
            destinationType: navigator.camera.DestinationType.FILE_URI,
            sourceType: navigator.camera.PictureSourceType.CAMERA,
            // targetWidth - baka need baguhin depende sa size ng trained
            // targetHeight
            mediaType: navigator.camera.MediaType.PICTURE,
            encodingType: navigator.camera.EncodingType.JPEG,
            cameraDirection: navigator.camera.Direction.BACK
        };
        navigator.camera.getPicture(cam.works,cam.doesNotWork,opts);
        
      },
      works:function(imgURI){
        document.getElementById('msg').textContent = imgURI;
        document.getElementById('photo').src = imgURI;
        //maybe insert the classifier here. take the imgURI as input?
      },
      doesNotWork:function(msg) {
        document.getElementById('msg').textContent = msg; 
      }
    };

    document.addEventListener('deviceready', cam.init);

  }

  takeDoggoPhotoFromAlbum() {
    this.setState({ page: 3 })

    let cam = {
      init:function () {
        document.getElementById('cambtn').addEventListener('click', cam.getPhoto);
      },
      getPhoto:function() {
        let opts={
            quality: 80,
            allowEdit: false,
            destinationType:navigator.camera.DestinationType.FILE_URI,
            sourceType: navigator.camera.PictureSourceType.SAVEDPHOTOALBUM,
            // targetWidth - baka need baguhin depende sa size ng trained
            // targetHeight
            mediaType: navigator.camera.MediaType.PICTURE,
            encodingType: navigator.camera.EncodingType.JPEG,
            cameraDirection:navigator.camera.Direction.BACK
        };
        navigator.camera.getPicture(cam.works,cam.doesNotWork,opts);
        
      },
      works:function(imgURI){
        document.getElementById('msg').textContent = imgURI;
        document.getElementById('photo').src = imgURI;
        //maybe insert the classifier here. take the imgURI as input?
      },
      doesNotWork:function(msg) {
        document.getElementById('msg').textContent = msg; 
      }
    };

    document.addEventListener('deviceready', cam.init);
  }

  renderMenu = () => {
    this.setState({ page: 0, currentQuestion: 0})
  }

  resetQuiz = () => {
    this.setState(
      {
        // dogRankings: {
        //   'pug': 0,
        //   'corgi': 0,
        //   'chihuahua': 0,
        //   'shepherd': 0,
        //   'husky': 0
        // },
        currentQuestion: 0
      }
    )

    this.renderMenu()
  }

  sortShowResults = () => {
    // put in array
    let rankingKeys = Object.assign([], Object.keys(this.state.dogRankings))
    let rankingValues = Object.assign([], Object.values(this.state.dogRankings))
    let len = rankingKeys.length
    let i, j

    for (i = 0; i < len; i++) {
      for (j = 0; j < len; j++) {
        if (rankingValues[j] < rankingValues[j + 1]) {
          let tmp = rankingValues[j]
          let tmp2 = rankingKeys[j]

          rankingValues[j] = rankingValues[j + 1]
          rankingKeys[j] = rankingKeys[j + 1]

          rankingValues[j + 1] = tmp
          rankingKeys[j + 1] = tmp2
        }
      }
    }

    console.log(rankingKeys)
    console.log(rankingValues)

    return (
      <Fragment>
        {rankingKeys.map((item, i) => (
          <h2 style={{ color: '#fff' }}>#{i + 1}. {item.charAt(0).toUpperCase() + item.slice(1)}</h2>
        ))}
      </Fragment>
    )
  }

  render () {
      if (this.state.page === 0) {
          return (
            <div className="App">
              <header className="App-header">
                <img src={dog} style={{ marginBottom: '10px'}} className="App-logo" alt="logo" />
                <h1 style={{color: '#fff'}}>Who's Your Pupper?</h1>
                <Button id='cambtn' type='primary' style={{ marginBottom: '15px'}} shape='round' size='large' onClick={e => this.choosePhotoSource(e)}>IDENTIFY DOGGO</Button>
                <Button style={{ marginBottom: '15px'}} shape='round' size='large' onClick={e => this.renderQuiz(e)}>TAKE QUIZ</Button>
                <Button shape='round' size='large' onClick={e => this.renderResults(e)} disabled={!(this.state.hasRanking)}>MY RESULTS</Button>
                
                <br />
                <a href='#' style={{ fontSize: '3vh' }} onClick={e => this.renderPrivacyPolicy(e)}>Privacy Policy</a>
              </header>
            </div>
          );
      } else if (this.state.page === 1) { //Choose from taking a photo from cam of album
        return (         
          <div className="App">
            <header className="App-header">
              <Button shape='round' size='large' onClick={e => this.takeDoggoPhotoFromCam(e)}>TAKE A PICTURE</Button>
              <Button shape='round' size='large' onClick={e => this.takeDoggoPhotoFromAlbum(e)}>CHOOSE FROM ALBUM</Button>
              <Button shape='round' size='large' onClick={e => this.renderMenu(e)}>BACK TO MENU</Button>
            </header>
           </div>) 
      } else if(this.state.page===2) {
        //from cam
       
      } else if(this.state.page===3) {
        //from photo album
      
      } else if (this.state.page===4) {

      } else if  (this.state.page === 5) {
        return (
          <div className="App">
              <header className="App-header">
                <h1 style={{color: '#fff'}}>Pupper Matching Quiz</h1>
                <QuizItem
                    currentQuestion={this.state.currentQuestion}
                    nextQuestion={this.nextQuestion}
                    dogRankings={this.state.dogRankings}
                />
                <Button shape='round' size='large' onClick={e => this.resetQuiz(e)}>BACK TO MENU</Button>
              </header>
          </div>
        )
        
      } else if  (this.state.page === 6) {
        return (
          <div className="App">
              <header className="App-header">
                <h1 style={{color: '#fff'}}>Pupper Matching Results</h1>
                {this.sortShowResults()}
                <Button shape='round' size='large' onClick={e => this.renderMenu(e)}>BACK TO MENU</Button>
              </header>
          </div>
        )
        
      } else if (this.state.page === 7) {
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
