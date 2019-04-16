import React from 'react'
import WebCam from 'react-webcam'

export default class SelfRecord extends React.Component{
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
            </div>
        )
    }
}