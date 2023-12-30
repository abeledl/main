import { useEffect, useRef, useState } from "react"
import { useBreaklines, useUpdateBreaklines } from '../contexts/BreaklinesProvider'

const useBreakline = (spanRef, spanWidthSum, id) => {
    const [wordsAdded, setWordsAdded] = useState(false)
    const breaklines = useBreaklines()
    const updateBreaklines = useUpdateBreaklines()
    const breaklineFlagsRef = useRef(breaklines)
    const PROMPTER_WIDTH = 900

    const updateBreaklineFlags = (spanWidth, id) => {
        if (id === 0) {
            spanWidthSum.current = 0
        }
        spanWidthSum.current += spanWidth
        if (spanWidthSum.current > PROMPTER_WIDTH) {
            spanWidthSum.current = spanWidth
            breaklineFlagsRef.current[id] = true
        } else {
            breaklineFlagsRef.current[id] = false
        }
        updateBreaklines(breaklineFlagsRef.current)
    }

    useEffect(() => {
        if (!wordsAdded) {
            if (spanRef.current && spanRef.current.offsetWidth !== undefined) {
                updateBreaklineFlags(spanRef.current.offsetWidth, id);
                setWordsAdded(true)
            }
        }
    }, [])

    return breaklines[id] 
}

export default useBreakline
