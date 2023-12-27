import React from 'react';

const VideoPlayer = () => {
    const videoStyle = {
        
        background: "yellow",
        position: "absolute"
    }
    
    return (
        <div style={videoStyle}>
            <video width="100%" height="100%" autoPlay loop muted>
                <source src="Boat_Compressed.mp4" type="video/mp4" />
            </video>
        </div>
    )
}
export default VideoPlayer;