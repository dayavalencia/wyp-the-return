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

  choosePhotoSource() {
    this.setState({ page:1 })
  }

  takeDoggoPhotoFromCam() {
    this.setState({ page:2 })
    
    let cam = {
      init:function () {
        document.getElementById('cambtn').addEventListener('click', cam.takePhoto;
      },
      takePhoto:function() {
        let opts={
            quality: 80,
            allowEdit: false,
            destinationType:Camera.DestinationType.FILE_URI,
            sourceType: Camera.PictureSourceType.CAMERA,
            // targetWidth - baka need baguhin depende sa size ng trained
            // targetHeight
            mediaType: Camera.MediaType.PICTURE,
            encodingType: Camera.EncodingType.JPEG,
            cameraDirection:Camera.Direction.BACK
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

    document.addEventListener('deviceready', cam.init);cd .

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
            destinationType:Camera.DestinationType.FILE_URI,
            sourceType: Camera.PictureSourceType.SAVEDPHOTOALBUM,
            // targetWidth - baka need baguhin depende sa size ng trained
            // targetHeight
            mediaType: Camera.MediaType.PICTURE,
            encodingType: Camera.EncodingType.JPEG,
            cameraDirection:Camera.Direction.BACK
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

  renderIdentifyDoggo () {
    this.setState({ page: 4 })
    //console.log(navigator.camera);
  
   
  }

  renderQuiz () {
    this.setState({ page: 5 })
  }

  renderResults () {
    this.setState({ page: 6 })
  }

  renderPrivacyPolicy () {
    this.setState({ page: 7 })
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
                <Button id='cambtn' type='primary' style={{ marginBottom: '15px'}} shape='round' size='large' onClick={e => this.choosePhotoSource(e)}>IDENTIFY DOGGO</Button>
                <Button style={{ marginBottom: '15px'}} shape='round' size='large' onClick={e => this.renderQuiz(e)}>TAKE QUIZ</Button>
                <Button shape='round' size='large' onClick={e => this.renderResults(e)}>MY RESULTS</Button>
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
                <QuizItem />
                <Button shape='round' size='large' onClick={e => this.renderMenu(e)}>BACK TO MENU</Button>
              </header>
          </div>
        )
        
      } else if  (this.state.page === 6) {
        return (
          <div className="App">
              <header className="App-header">
                <h1 style={{color: '#fff'}}>Pupper Matching Results</h1>
                {/*insert separate component lol*/}
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
