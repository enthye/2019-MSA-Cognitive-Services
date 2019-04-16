import React, { Component } from 'react';
import EmotionsSidebar from './components/EmotionsSidebar';

class App extends Component {

  constructor() {
    super()
    this.state={
      emotion: ""
    }
  }

  setEmotionText(emotion){
    this.setState(state=>({
      emotion: emotion
    }))
  }

  render() {
    return (
      <div className="App">
        <div>
          <EmotionsSidebar className="sidebar" onSetEmotionText={(emotion)=>{this.setEmotionText(emotion)}}/>
        </div>
        <h1>{this.state.emotion}</h1>
      </div>
    );
  }
}

export default App;
