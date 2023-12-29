import { useRef, useEffect, useState } from 'react'
import "./styles/SpanStyle.css"

export default function Span({ word, handleSpanWidthOverflowWithBreakline, id, displayWordsBreaklineFlags }) {
    const spanRef = useRef(null)
    const [addBreakLine, setAddBreakLine] = useState(false)
    const [addedTheWords, setAddedTheWords] = useState(false)

    useEffect(() => {
        if (!addedTheWords) {
            const checkSpanWidth = () => {
                if (spanRef.current && spanRef.current.offsetWidth !== undefined) {
                    handleSpanWidthOverflowWithBreakline(spanRef.current.offsetWidth, id);
                }
            };
            checkSpanWidth();
            setAddedTheWords(true)
        }
    }, [])

    useEffect(() => {
        if (addedTheWords) {
            setAddBreakLine(displayWordsBreaklineFlags[id])
        }
    }, [displayWordsBreaklineFlags])

    return (
        <span role={'span'}>
            <span ref={spanRef} className='span-text' id="spans-text" >
                {addBreakLine ? <br data-test-id={'break'} /> : ""}
                {word}
            </span>
        </span>
    )
}
