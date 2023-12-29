import Span from "../Span/Span"
import Blurr from "../Blurr/Blurr"
import { Fragment, useRef } from "react"
import "./styles/PrompterStyle.css"

export default function Prompter({
    words,
    breaklineFlags,
    setBreaklineFlags
}) {
    const spanWidthSum = useRef(0)
    const breaklineFlagsRef = useRef(breaklineFlags)
    const PROMPTER_WIDTH = 900

    const updateBreaklineFlags = (spanWidth, id) => {
        if (id === 0) {
            spanWidthSum.current = 0
        }
        spanWidthSum.current += spanWidth
        if (spanWidthSum.current > PROMPTER_WIDTH) {
            spanWidthSum.current = spanWidth
            breaklineFlagsRef.current[id] = true
        } else {
            breaklineFlagsRef.current[id] = false
        }
        setBreaklineFlags(breaklineFlagsRef.current)
    }

    return (
        <div className="prompter-container">
            <div className="prompter-blurr">
                <Blurr />
                <div className="spans-container">
                    {words ?
                        words.map((word, index) => {
                            return <Span
                                    word={word}
                                    updateBreaklineFlags={updateBreaklineFlags}
                                    id={index}
                                    breaklineFlags={breaklineFlags}
                                    key={index}
                                />
                        })
                        : ""
                    }
                </div>
            </div>
        </div >
    )
}
