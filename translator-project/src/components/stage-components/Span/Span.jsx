import { useRef } from 'react'
import "./styles/SpanStyle.css"
import useBreakline from '../../../hooks/useBreakline'

export default function Span({ word, spanWidthSum, id }) {
    const spanRef = useRef(null)
    const breakline = useBreakline(spanRef, spanWidthSum, id)

    return (
        <span role={'span'}>
            <span ref={spanRef} className='span-text' id="spans-text" >
                {breakline ? <br data-test-id={'break'} /> : ""}
                {word}
            </span>
        </span>
    )
}
