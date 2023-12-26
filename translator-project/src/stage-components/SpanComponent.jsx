import { useRef, useEffect, useState } from 'react'

export default function SpanComponent({ text, handleSpanInfo, id, otherData, complete }) {
    const spanRef = useRef(null)
    const [addBreakLine, setAddBreakLine] = useState(false)

    const spanStyles = {
        fontSize: "100px",
        color: "white",
        fontFamily:" 'Concert One', sans-serif",
        textAlign:"center",
        lineHeight:"100%",
        padding: "20px",
        fontWeight:"900",
        WebkitTextStrokeWidth: "2px",
        WebkitTextStrokeColor: "black",
        textShadow: "2px 2px 0 white, -2px 2px 0 white,-2px -2px 0 white, 2px -2px 0 white",
        WebkitFilter: "drop-shadow(0 5px 3px rgb(1, 1,1, 0.6))",
        // textShadow: "dropShadow(0 5px 3px rgb(1, 1,1, 0.6))",
        letterspacing:"-3px",
        wordSpacing: "12px"
    }

    useEffect(() => {
        const checkSpanWidth = () => {
            if (spanRef.current && spanRef.current.offsetWidth !== undefined) {
                const isOverflown = handleSpanInfo(spanRef.current.offsetWidth, text, id, otherData);
                setAddBreakLine(isOverflown);
            }
        };

        checkSpanWidth();
    }, [])

    useEffect(() => {
        console.log("complete: ", complete);
        console.log("otherData:", otherData);
        const isOverflown = handleSpanInfo(spanRef.current.offsetWidth, text, id, otherData);
        // setAddBreakLine(isOverflown);
    }, [complete])


    return (
        <span role={'span'}>
            <span ref={spanRef} style={spanStyles} >
                {addBreakLine ? <br data-test-id={'break'} /> : ""}
                {text}
            </span>
        </span>
    )
}
