import TextInputComponent from "./TextInputComponent"
import PlayButtonComponent from "./PlayButtonComponent"
import { useState } from "react"

export default function MenuComponent({ setAllTextData }) {
    const [englishText, setEnglishText] = useState([])
    const [spanishText, setSpanishText] = useState([])
    const [phoneticText, setPhoneticText] = useState([])

    const menyStyle = {
        display: "flex",
        flexDirection: "column",
        background: "blue",
        padding: "20px",
        height: "400px",
    }

    const loadData = () => {
        // separte the text into an english array and a spanishh array
        const wordsArray = englishText.split('\n')
        const englishWordsArray = []
        const spanishWordsArray = []

        wordsArray.forEach(word => {
            const twoWordsArray = word.split("|")
            if (twoWordsArray[0]) {
                englishWordsArray.push(twoWordsArray[0])
            } else {
                englishWordsArray.push('')
            }

            if (twoWordsArray[1]) {
                spanishWordsArray.push(twoWordsArray[1])
            } else {
                spanishWordsArray.push('')
            }
        })
        setAllTextData({ englishText: englishWordsArray, spanishText: spanishWordsArray, phoneticText: phoneticText })
    }

    return (
        <div style={menyStyle}>
            <TextInputComponent setInputText={setEnglishText} placeholder={"English"}/>
            <TextInputComponent setInputText={setSpanishText} placeholder={"Spanish"}/>
            <TextInputComponent setInputText={setPhoneticText} placeholder={"Phonetic"}/>
            <PlayButtonComponent onSubmit={loadData} />
        </div>
    )
}