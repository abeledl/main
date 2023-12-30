import Blurr from "../Blurr/Blurr"
import "./styles/PrompterStyle.css"
import SpansDisplay from "../SpansDisplay/SpansDisplay"

export default function Prompter({ words }) {
    return (
        <div className="prompter-container">
            <div className="prompter-blurr">
                <Blurr />
                <SpansDisplay words={words} />
            </div>
        </div >
    )
}
