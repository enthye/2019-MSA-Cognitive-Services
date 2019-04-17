import React from 'react'
import WebCam from 'react-webcam'

export default class SelfRecord extends React.Component {
    constructor(props) {
        super(props)
        this.timerId = null
        this.isRecording = false
    }

    setRef = webcam => {
        this.webcam = webcam
    }

    // sets up a 0.2s timer to get screenshot from cam
    // converts from base64 to byte array
    // fetchs face info from face azure service
    startRecording = () => {
        this.isRecording = true
        this.timerId = setInterval(() => {
            const image = this.webcam.getScreenshot()
            const byteArrayImage = this.convertToByteArray(image)
            this.fetchData(byteArrayImage)
        }, 10000)
    }

    convertToByteArray = (image) => {
        const base64 = require('base64-js')
        const base64String = image.split(',')[1]
        return base64.toByteArray(base64String)
    }

    fetchData = (byteArrayImage) => {
        const apiKey = 'fa27cf3f9f024aea81d0bc88304994f6'
        const apiEndpoint = 'https://australiaeast.api.cognitive.microsoft.com/face/v1.0/detect?returnFaceAttributes=emotion'
        fetch(apiEndpoint, {
            body: byteArrayImage,
            headers: { 'cache-control': 'no-cache', 'Ocp-Apim-Subscription-Key': apiKey, 'Content-Type': 'application/octet-stream' },
            method: 'POST'
        }).then(response => {
            if (response.ok) {
                response.json().then(data => {
                    if (data[0] != null) {
                        var emotion = this.emotionAnalyser(data[0].faceAttributes.emotion)
                        this.props.updateResult(emotion)
                    }
                })
            }
        })
    }

    emotionAnalyser = emotionsArray => {
        var value = 0
        var emotionOutput = "none"

        for (var emotion in emotionsArray) {
            var valueEmotion = emotionsArray[emotion]
            if (this.isRecording && (valueEmotion > value)) {
                emotionOutput = emotion
                value = valueEmotion
            }
        }

        return emotionOutput
    }

    render() {
        const videoConstraints = {
            width: 1280,
            height: 720,
            facingMode: "user"
        }

        return (
            <div>
                <WebCam
                    className="webcam"
                    audio={false}
                    width={600}
                    height={400}
                    ref={this.setRef}
                    screenshotFormat="image/jpeg"
                    videoConstraints={videoConstraints}
                />
                <div className="button-group">
                    <button className="record" onClick={this.startRecording}>Start Recording!</button>
                    <button className="hint" onClick={this.props.showHint}>Hint</button>
                </div>

            </div>
        )
    }
}