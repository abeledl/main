import { useRef, useEffect, useState } from 'react'
import "./styles/SpanComponentStyle.css"

export default function SpanComponent({ text, handleSpanInfo, id, breakLineTracker }) {
    const spanRef = useRef(null)
    const [addBreakLine, setAddBreakLine] = useState(false)
    const [addedTheWords, setAddedTheWords] = useState(false)
    const spanStyles = {
        fontSize: "100px",
        color: "white",
        textAlign: "center",
        lineHeight: "100%",
        fontWeight: "900",
        WebkitTextStrokeWidth: "4px",
        TextStrokeWidth: "2px",
        WebkitTextStrokeColor: "rgb(44, 44, 44)",
        TextStrokeColor: "black",
        WebkitFilter: "drop-shadow(0 5px 3px rgb(1, 1,1, 0.6))",
        Filter: "drop-shadow(0 5px 3px rgb(1, 1,1, 0.6))",
        letterspacing: "-5px",
        wordSpacing: "12px",
        padding: "0",
    }

    useEffect(() => {
        if (!addedTheWords) {
            const checkSpanWidth = () => {
                if (spanRef.current && spanRef.current.offsetWidth !== undefined) {
                    handleSpanInfo(spanRef.current.offsetWidth, id);
                }
            };
            checkSpanWidth();
            setAddedTheWords(true)
        }
    }, [])

    useEffect(() => {
        if (addedTheWords) {
            setAddBreakLine(breakLineTracker[id])
        }
    }, [breakLineTracker])

    return (
        <span role={'span'}>
            <span ref={spanRef} style={spanStyles} id="spans-text" >
                {addBreakLine ? <br data-test-id={'break'} /> : ""}
                {text}
            </span>
        </span>
    )
}
