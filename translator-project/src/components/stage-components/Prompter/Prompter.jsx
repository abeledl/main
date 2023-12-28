import { useState, useEffect, Fragment, useRef } from "react"
import Span from "../Span/Span"
import "./styles/PrompterStyle.css"
import Blurr from "../Blurr/Blurr"

export default function Prompter({
    prompterDisplayWords,
    displayWordsBreaklineFlags,
    setDisplayWordsBreaklineFlags
}) {
    const totalWidth = useRef(0)
    const breaklines = useRef(displayWordsBreaklineFlags)
    const PROMPTER_WIDTH = 900
    const prompterStyle = {
        position: "relative",
        height: "500px",
        width: "900px",
        textAlign: "center",
        top: '20%',
        '& .gradientBg': {
            background: "none",
        }
    }

    const handleSpanInfo = (width, index) => {
        if (index === 0) {
            totalWidth.current = 0
        }
        totalWidth.current += width
        if (totalWidth.current > PROMPTER_WIDTH) {
            totalWidth.current = width
            breaklines.current[index] = true
        } else {
            breaklines.current[index] = false
        }
        setDisplayWordsBreaklineFlags(breaklines.current)
    }

    return (
        <div style={prompterStyle}>
            <div className="prompter-blurr">
                <Blurr />
                <div className="spans-container">
                    {prompterDisplayWords ?
                        prompterDisplayWords.map((word, index) => {
                            return <Fragment key={index}>
                                <Span
                                    word={word}
                                    handleSpanInfo={handleSpanInfo}
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
