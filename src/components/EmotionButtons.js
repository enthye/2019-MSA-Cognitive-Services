import React from 'react'

export default class EmotionButtons extends React.Component {
    render() {
        return (
            <div>
                <div className="btngroup">
                    <button className="button" onClick={() => this.props.setEmotionText("Happy")}>
                        <span role="img" aria-label="Smile">🙂</span> Happy</button>
                    <button className="button" onClick={() => this.props.setEmotionText("Sad")}>
                        <span role="img" aria-label="Sad">🙁</span> Sad</button>
                    <button className="button" onClick={() => this.props.setEmotionText("Angry")}>
                        <span role="img" aria-label="Angry">😠</span> Angry</button>
                    <button className="button" onClick={() => this.props.setEmotionText("Scared")}>
                        <span role="img" aria-label="Scared">😨</span> Scared</button>
                </div>
            </div>
        )
    }
}