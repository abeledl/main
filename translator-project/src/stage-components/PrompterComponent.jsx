import { useState, useEffect, Fragment, useRef } from "react"
import SpanComponent from "./SpanComponent"
import "./PrompterStyle.css"
import BlurrComponent from "../BlurrComponent"

export default function PrompterComponent({ data, breakLineTracker, setBreakLineTracker }) {
    const totalWidth = useRef(0)
    const breaklines = useRef(breakLineTracker)
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

    const shadowStyle = {
        
    }
    const handleSpanInfo = (width, index) => {
        if (index === 0) {
            totalWidth.current = 0
        }
        totalWidth.current += width
        if (totalWidth.current > 900) {
            totalWidth.current = width
            breaklines.current[index] = true
        } else {
            breaklines.current[index] = false
        }
        setBreakLineTracker(breaklines.current)
    }

    return (
        <div style={prompterStyle}>

            <div className="prompter-blurr">
                <BlurrComponent />
                <div className="spans-container">
                    {data ?
                        data.map((word, index) => {
                            return <Fragment key={index}>
                                <SpanComponent
                                    text={word}
                                    handleSpanInfo={handleSpanInfo}
                                    id={index}
                                    breakLineTracker={breakLineTracker}
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
