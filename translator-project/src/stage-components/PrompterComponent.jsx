import { useState, useEffect, Fragment, useRef } from "react"
import SpanComponent from "./SpanComponent"

export default function PrompterComponent({ data, setCompleted, setObjectData, objectData, completed, breakLineTracker, setBreakLineTracker }) {
    const prompterWidth = "900px"
    const totalWidth = useRef(0)

    const prompterStyle = {
        height: "500px",
        width: prompterWidth,
        background: "green",
        textAlign: "center",
        WebkitFilter: 'drop-shadow(0 29px 50px rgba(250, 250, 250, 0.9)) drop-shadow(0 40px 50px rgba(33, 118,7, 0.4)) drop-shadow(0 50px 80px rgba(0, 0, 0, 0.3))',
    }

    const handleSpanInfo = (width, word, index, otherData, count) => {
        if (index === 0) {
            totalWidth.current = 0
        }
        const updatedBreakLineArray = [...breakLineTracker]
        totalWidth.current += width
        if (totalWidth.current > 900) {
            totalWidth.current = width
            updatedBreakLineArray[index] = true
            setBreakLineTracker(updatedBreakLineArray)
            return true
        }
        // FIXME: This causes a bug that will add data to the array everytime one of the span calls the handleSpanInfo()
        // FIXME: Line is getting called twice
        return false
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
                            otherData={objectData}
                            complete={completed} 
                            breakLineTracker={breakLineTracker}
                            setBreakLineTracker={setBreakLineTracker} />
                    </Fragment>
                })
                : ""
            }
        </div >
    )
}
