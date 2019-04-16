import React from 'react'
import Sidebar from 'react-sidebar'
import './EmotionsSidebar.css'

export default class EmotionsSidebar extends React.Component {
    constructor() {
        super()
        this.state={
          emotion: "Happy"
        }
      }
    
      setEmotionText(emotion){
        this.setState(state=>({
          emotion: emotion
        }))
      }

    render() {
        return (
            <div>
                <Sidebar
                    sidebarClassName="sidebar"
                    sidebar={
                        <div>
                            <h1 className="title">Emotion List</h1>
                            <div className="btngroup">
                            <button className="button" onClick={() => this.setEmotionText("Happy")}>
                            <span role="img" aria-label="Smile">🙂</span> Happy</button>
                            <button className="button" onClick={() => this.setEmotionText("Sad")}>
                            <span role="img" aria-label="Sad">🙁</span> Sad</button>
                            <button className="button" onClick={() => this.setEmotionText("Angry")}>
                            <span role="img" aria-label="Angry">😠</span> Angry</button>
                            <button className="button" onClick={() => this.setEmotionText("Scared")}>
                            <span role="img" aria-label="Scared">😨</span> Scared</button>
                            </div>
                            
                        </div>
                        }
                    docked={true}
                >
                    <h1 className="emotionName">{this.state.emotion}</h1>
                </Sidebar>
            </div>
                )
            }
}