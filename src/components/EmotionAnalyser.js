import React from 'react'
import SelfRecord from './SelfRecord'

export default class EmotionAnalyser extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            updatedResult: "sad"
        }
    }

    updateResult(result){
        switch (result) {
            case "happiness":
                result = "happy"
                break;
            case "sadness":
                result = "sad"
                break;
            case "anger":
                result = "angry"
                break;
            case "fear":
                result = "scared"
                break;
            default:
                result = "none";
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

    lowercaser = (string) => {
        return string.toLowerCase()
    }

    render(){
        return(
            <div>
                <h1>{this.lowercaser(this.props.result)} {this.lowercaser(this.props.updatedResult)}</h1>
                <h1>{this.lowercaser(this.props.result) === this.lowercaser(this.props.updatedResult) ? "✔️" : "❌"}</h1>
            </div>
        )
    }
    /*
    var result = this.props.selected.toString().toLowerCase()
    console.log(result, this.state.updatedResult)
    
    const result = props.result.toLowerCase()
    const updatedResult = props.updatedResult.toLowerCase()
    console.log(result, updatedResult)

    return (
        <div>
            <h1>{result === updatedResult ? "✔️" : "❌"}</h1>
        </div>
    )
    */
}