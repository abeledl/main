import Blurr from "../Blurr/Blurr"
import VideoPlayer from "../VideoPlayer/VideoPlayer"
import Prompter from "../Prompter/Prompter"
import Footer from "../Footer/Footer"
import "./styles/StageStyle.css"

export default function Stage({
    words,
    breaklineFlags,
    setBreaklineFlags
}) {

    return (
        <div className="stage-container">
            <Blurr />
            <VideoPlayer/>
            <Prompter
                words={words.english}
                breaklineFlags={breaklineFlags}
                setBreaklineFlags={setBreaklineFlags}
            />
            <Prompter
                words={words.spanish}
                breaklineFlags={breaklineFlags}
                setBreaklineFlags={setBreaklineFlags}
            />
            <Footer />
        </div>
    )
}