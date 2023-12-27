import { useRef, useEffect, useState } from 'react'

export default function SpanComponent({ text, handleSpanInfo, id, breakLineTracker }) {
    const spanRef = useRef(null)
    const [addBreakLine, setAddBreakLine] = useState(false)
    const [addedTheWords, setAddedTheWords] = useState(false)
    const spanStyles = {
        fontSize: "100px",
        color: "white",
        fontFamily: " 'Concert One', sans-serif",
        textAlign: "center",
        lineHeight: "100%",
        padding: "20px",
        fontWeight: "900",
        WebkitTextStrokeWidth: "2px",
        WebkitTextStrokeColor: "black",
        textShadow: "2px 2px 0 white, -2px 2px 0 white,-2px -2px 0 white, 2px -2px 0 white",
        WebkitFilter: "drop-shadow(0 5px 3px rgb(1, 1,1, 0.6))",
        letterspacing: "-3px",
        wordSpacing: "12px"
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
            <span ref={spanRef} style={spanStyles} >
                {addBreakLine ? <br data-test-id={'break'} /> : ""}
                {text}
            </span>
        </span>
    )
}
