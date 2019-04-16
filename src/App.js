import React, { Component } from 'react';
import EmotionsSidebar from './components/EmotionsSidebar';

class App extends Component {

  

  render() {
    return (
      <div className="App">
        <div>
          <EmotionsSidebar className="sidebar"/>
        </div>
        
      </div>
    );
  }
}

export default App;
