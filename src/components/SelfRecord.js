import React from 'react'
import WebCam from 'react-webcam'

export default class SelfRecord extends React.Component{
    constructor(props){
        super(props)
        this.timerId=null
        this.isRecording=false
    }
    
    setRef = webcam => {
        this.webcam = webcam
    }

    // sets up a 0.2s timer to get screenshot from cam
    // converts from base64 to byte array
    // fetchs face info from face azure service
    startRecording = () => {
        this.isRecording=true
        this.timerId=setInterval(() => {
            const image=this.webcam.getScreenshot()
            const byteArrayImage=this.convertToByteArray(image)
            this.fetchData(byteArrayImage)
        }, 200)
    }

    convertToByteArray = (image) => {
        const base64=require('base64-js')
        const base64String=image.split(',')[1]
        return base64.toByteArray(base64String)
    }
    
    fetchData = (image) => {
        
    }

    render(){
        const videoConstraints={
            width:1280,
            height:720,
            facingMode:"user"
        }

        return(
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
                <button onClick={this.startRecording}>Start Recording!</button>
            </div>
        )
    }
}