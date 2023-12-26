import { useState, useEffect, Fragment, useRef } from "react"
import SpanComponent from "./SpanComponent"

export default function PrompterComponent({ data, breakLineTracker, setBreakLineTracker }) {
    const totalWidth = useRef(0)
    const breaklines = useRef(breakLineTracker)

    const prompterStyle = {
        height: "500px",
        width: "900px",
        background: "green",
        textAlign: "center",
        WebkitFilter: 'drop-shadow(0 29px 50px rgba(250, 250, 250, 0.9)) drop-shadow(0 40px 50px rgba(33, 118,7, 0.4)) drop-shadow(0 50px 80px rgba(0, 0, 0, 0.3))',
    }


    const handleSpanInfo = (width, index) => {
        if (index === 0) {
            totalWidth.current = 0
        }
        totalWidth.current += width
        if (totalWidth.current > 900) {
            totalWidth.current = width
            breaklines.current[index] = true
            setBreakLineTracker(breaklines.current)
        }

    }

    return (
        <div style={prompterStyle}>
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
        </div >
    )
}
