import React from 'react'
import SelfRecord from './SelfRecord'

export default class EmotionAnalyser extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            updatedResult: "None",
            showHint: false
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

    toggleHint = () => {
        this.setState({
            showHint: !this.state.showHint
        });
    }

    render() {
        return (
            <div>
                <SelfRecord
                    updateResult={(result) => { this.updateResult(result) }}
                    showHint={() => { this.toggleHint() }}
                />
                <Result
                    result={this.props.selected}
                    updatedResult={this.state.updatedResult}
                    showHint={this.state.showHint}
                />
            </div>
        )
    }

}

class Result extends React.Component {

    render() {
        var shown = {
            display: this.props.showHint ? "block" : "none"
        };

        var hidden = {
            display: this.props.showHint ? "none" : "block"
        }
        return (
            <div>
                <h1 className="result">{this.props.result === this.props.updatedResult ? "✔️" : "❌"}</h1>
                <h1 className="hint-result" style={shown}>{this.props.updatedResult}</h1>
                <h1 style={hidden}> </h1>
            </div>
        )
    }
}