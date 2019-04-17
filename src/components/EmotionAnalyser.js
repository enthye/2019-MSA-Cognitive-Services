import React from 'react'
import SelfRecord from './SelfRecord'

export default class EmotionAnalyser extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            updatedResult: "none"
        }
    }

    updateResult(result) {
        switch (result) {
            case "happiness":
                result = "Happy"
                break;
            case "sadness":
                result = "Sad"
                break;
            case "neutral":
                result = "Neutral"
                break;
            case "anger":
                result = "Angry"
                break;
            case "surprise":
                result = "Surprise"
                break;
            case "disgust":
                result = "Disgust"
                break;
            case "contempt":
                result = "Contempt"
                break;
            case "fear":
                result = "Scared"
                break;
            default:
                result = "None";
        }

        this.setState({
            updatedResult: result
        })
    }

    render() {
        return (
            <div>
                
                <SelfRecord updateResult={(result) => { this.updateResult(result) }} />
                <Result result={this.props.selected} updatedResult={this.state.updatedResult} />
                
            </div>
        )
    }

}

class Result extends React.Component {
    render() {
        return (
            <div>
                <h1>{this.props.result} {this.props.updatedResult}</h1>
                <h1>{this.props.result === this.props.updatedResult ? "✔️" : "❌"}</h1>
            </div>
        )
    }
}