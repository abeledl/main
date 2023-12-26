import { useState, useEffect, Fragment, useRef } from "react"
import SpanComponent from "./SpanComponent"

export default function PrompterComponent({ data, setCompleted, setObjectData, objectData, completed }) {
    const [loadedWordsWithSpans, setLoadedWordsWithSpans] = useState(false)
    const prompterWidth = "900px"
    const maxWidth = 900
    const [wordsArray, setWordsArray] = useState([])
    const [currentTotalWidth, setCurrentTotalWidth] = useState(0)
    const wordsObjectArray = useRef([]) //holds the words with the brealine flag as an object {word, breakline, id}
    const rerenderCount = useRef(0)
    const totalWidth = useRef(0)

    const prompterStyle = {
        height: "500px",
        width: prompterWidth,
        background: "green",
        textAlign: "center",
        WebkitFilter: 'drop-shadow(0 29px 50px rgba(250, 250, 250, 0.9)) drop-shadow(0 40px 50px rgba(33, 118,7, 0.4)) drop-shadow(0 50px 80px rgba(0, 0, 0, 0.3))',
    }

    useEffect(() => {
        if (data && !loadedWordsWithSpans) {
            //splitting the input text based on new line
            setWordsArray(data.map((word, index) => {
                return <Fragment key={index}><SpanComponent text={word} handleSpanInfo={handleSpanInfo} id={index} otherData={objectData} complete={completed} />
                </Fragment>
            }))
            setLoadedWordsWithSpans(true)
        }
    }, [data])

    // useEffect(() => {
    //     // console.log("object data: ", objectData);
    //     if (objectData.current) {
    //         if (wordsObjectArray) {
    //             objectData.current.map((obj, index) => {
    //                 if (obj.breakLine === true) {
    //                     wordsObjectArray.current[index].breakLine = true
    //                 }
    //             })
    //         }
    //     }
    // }, [objectData.current])

    // useEffect(() => {
    // }, [wordsObjectArray.current])

    const handleSpanInfo = (width, word, index, otherData) => {
        if (index === 0) {
            totalWidth.current = 0
        }
        console.log("data: ", otherData, "index: ", index);
        totalWidth.current += width
        var wordObjectArrayLength = wordsObjectArray.current.length
        // console.log("otherdata: ", otherData);
        if (totalWidth.current > 900) {
            totalWidth.current = width
            if (wordsObjectArray.current) {
                //adding a break line to the previous item
                wordsObjectArray.current.push({ word: word, breakLine: true, id: index })
                console.log("returning true in handleSpanInfo");
                return true
            }
        }

        wordsObjectArray.current.push({ word: word, breakLine: false, id: index })
        setObjectData(wordsObjectArray)
        if (index + 1 == data.length) {
            setCompleted(true)
        }
        return false
    }

    return (
        <div style={prompterStyle}>
            {[...wordsArray]}
            {/* <SpanComponent text={"test"} handleSpanInfo={()=>{}} id={11} otherData={objectData} complete={completed} /> */}
        </div >
    )
}
