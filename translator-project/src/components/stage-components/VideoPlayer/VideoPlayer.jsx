import "./styles/VideoPlayerStyle.css"
import myVideo from "../../../assets/videos/bg-vid.webm"

export default function VideoPlayer() {
    return (
        <div className="video-player">
            <video width="100%" height="100%" autoPlay loop muted>
                <source src={myVideo} type="video/webm" />
            </video>
        </div>
    )
}