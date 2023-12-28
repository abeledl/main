import Span from "../Span/Span"
import Blurr from "../Blurr/Blurr"
import { Fragment, useRef } from "react"
import "./styles/PrompterStyle.css"

export default function Prompter({
    prompterDisplayWords,
    displayWordsBreaklineFlags,
    setDisplayWordsBreaklineFlags
}) {
    const totalSpanWidthSum = useRef(0)
    const displayWordsBreaklineFlagsRef = useRef(displayWordsBreaklineFlags)
    const PROMPTER_WIDTH = 900

    const handleSpanWidthOverflowWithBreakline = (spanWidth, id) => {
        if (id === 0) {
            totalSpanWidthSum.current = 0
        }
        totalSpanWidthSum.current += spanWidth
        if (totalSpanWidthSum.current > PROMPTER_WIDTH) {
            totalSpanWidthSum.current = spanWidth
            displayWordsBreaklineFlagsRef.current[id] = true
        } else {
            displayWordsBreaklineFlagsRef.current[id] = false
        }
        setDisplayWordsBreaklineFlags(displayWordsBreaklineFlagsRef.current)
    }

    return (
        <div className="prompter-container">
            <div className="prompter-blurr">
                <Blurr />
                <div className="spans-container">
                    {prompterDisplayWords ?
                        prompterDisplayWords.map((word, index) => {
                            return <Fragment key={index}>
                                <Span
                                    word={word}
                                    handleSpanWidthOverflowWithBreakline={handleSpanWidthOverflowWithBreakline}
                                    id={index}
                                    displayWordsBreaklineFlags={displayWordsBreaklineFlags}
                                />
                            </Fragment>
                        })
                        : ""
                    }
                </div>
            </div>
        </div >
    )
}
