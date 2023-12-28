import Prompter from "../Prompter/Prompter"
import Footer from "../Footer/Footer"
import Blurr from "../Blurr/Blurr"
import myVideo from "../../../assets/video2.webm"

export default function Stage({
    languageTranslationsMap,
    displayWordsBreaklineFlags,
    setDisplayWordsBreaklineFlags
}) {

    const stageStyle = {
        width: "1024px",
        height: "2048px",
        background: "rgb(250, 250, 250)",
        display: "grid",
        gridTemplateRows: "45% 45% 10%",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        background: "linear-gradient(40deg, var(--color-bg1), var(--color-bg2))"
    }

    const videoStyle = {
        left: '7.4%',
        height: "1900px",
        position: "absolute"
    }

    return (
        <div style={stageStyle}>
            <Blurr />
            <div style={videoStyle}>
                <video width="100%" height="100%" autoPlay loop muted>
                    <source src={myVideo} type="video/webm" />
                </video> 
            </div>

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