import React, { Component } from 'react';
import EmotionsSidebar from './components/EmotionsSidebar';

class App extends Component {

  constructor() {
    super()
    this.state={
      emotion: "Happy"
    }
    this.setEmotionText = this.setEmotionText.bind(this);
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
          <EmotionsSidebar className="sidebar" setEmotionText={(emotion)=>{this.setEmotionText(emotion)}}/>
        </div>
        <h1>{this.state.emotion}</h1>
      </div>
    );
  }
}

export default App;
