import "./styles/SpansDisplayStyle.css"
import Span from "../Span/Span"
import { useRef } from "react"

export default function SpansDisplay({ words }) {
    const spanWidthSum = useRef(0)
    return (
        <div className="spans-container">
            {words ?
                words.map((word, index) => {
                    return <Span
                        word={word}
                        spanWidthSum={spanWidthSum}
                        id={index}
                        key={index}
                    />
                })
                : ""
            }
        </div>
    )
}