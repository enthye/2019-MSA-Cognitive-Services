import React from 'react'
import Sidebar from 'react-sidebar'
import './EmotionsSidebar.css'

export default class EmotionsSidebar extends React.Component {
    changeEmotion(emotion){
        this.props.setEmotionText(emotion)
    }

    render() {
        return (
            <div>
                <Sidebar
                    sidebarClassName="sidebar"
                    sidebar={
                        <div>
                            <b>Sidebar content</b>
                            <button onClick={this.changeEmotion("Happy")}>Happy</button>
                            <button onClick={this.changeEmotion("Sad")}>Sad</button>
                            <button onClick={this.changeEmotion("Angry")}>Angry</button>
                            <button onClick={this.changeEmotion("Scared")}>Scared</button>
                        </div>
                        }
                    open={true}
                />
            </div>
                )
            }
}