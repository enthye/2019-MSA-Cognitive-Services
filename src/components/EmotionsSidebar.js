import React from 'react'
import Sidebar from 'react-sidebar'
import './EmotionsSidebar.css'
import EmotionButtons from './EmotionButtons';
import SelfRecord from './SelfRecord'

export default class EmotionsSidebar extends React.Component {
    constructor() {
        super()
        this.state={
          emotion: "Happy"
        }
      }
    
      setEmotionText(emotion){
        this.setState({
          emotion: emotion
        })
      }

    render() {
        return (
            <div>
                <Sidebar
                    sidebarClassName="sidebar"
                    sidebar={
                        <div>
                            <h1 className="title">Emotion List</h1>
                            <EmotionButtons setEmotionText={(emotion) => this.setEmotionText(emotion)}/>
                        </div>
                        }
                    docked={true}
                >
                    <SelfRecord/>
                    <h1 className="emotionName">{this.state.emotion}</h1>
                </Sidebar>
            </div>
                )
            }
}