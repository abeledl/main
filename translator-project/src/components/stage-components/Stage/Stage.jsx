import Blurr from "../Blurr/Blurr"
import VideoPlayer from "../VideoPlayer/VideoPlayer"
import Prompter from "../Prompter/Prompter"
import Footer from "../Footer/Footer"
import "./styles/StageStyle.css"

export default function Stage({
    languageTranslationsMap,
    displayWordsBreaklineFlags,
    setDisplayWordsBreaklineFlags
}) {

    return (
        <div className="stage-container">
            <Blurr />
            <VideoPlayer/>
            <Prompter
                prompterDisplayWords={languageTranslationsMap.englishWords}
                displayWordsBreaklineFlags={displayWordsBreaklineFlags}
                setDisplayWordsBreaklineFlags={setDisplayWordsBreaklineFlags}
            />
            <Prompter
                prompterDisplayWords={languageTranslationsMap.spanishWords}
                displayWordsBreaklineFlags={displayWordsBreaklineFlags}
                setDisplayWordsBreaklineFlags={setDisplayWordsBreaklineFlags}
            />
            <Footer />
        </div>
    )
}