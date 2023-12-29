import { useRef, useEffect, useState } from 'react'
import "./styles/SpanStyle.css"

export default function Span({ word, updateBreaklineFlags, id, breaklineFlags }) {
    const spanRef = useRef(null)
    const [addBreakLine, setAddBreakLine] = useState(false)

    useEffect(() => {
        if (spanRef.current && spanRef.current.offsetWidth !== undefined) {
            updateBreaklineFlags(spanRef.current.offsetWidth, id);
        }
    }, [])

    useEffect(() => {
        setAddBreakLine(breaklineFlags[id])
    }, [breaklineFlags])

    return (
        <span role={'span'}>
            <span ref={spanRef} className='span-text' id="spans-text" >
                {addBreakLine ? <br data-test-id={'break'} /> : ""}
                {word}
            </span>
        </span>
    )
}
