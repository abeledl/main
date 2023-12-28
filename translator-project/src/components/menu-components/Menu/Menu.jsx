import TextInput from "../TextInput/TextInput"
import PlayButton from "../PlayButton/PlayButton"
import { useState } from "react"

export default function Menu({ setLanguageTranslationsMap, setDisplayWordsBreaklineFlags}) {
    const [englishWords, setEnglishWords] = useState([])
    const [spanishWords, setSpanishWords] = useState([])
    const [phoneticWordsSymbols, setPhoneticWordsSymbols] = useState([])

    const menyStyle = {
        display: "flex",
        flexDirection: "column",
        background: "blue",
        padding: "20px",
        height: "400px",
    }

    const splitTextInputByLanguage = () => {
        // separte the text into an english array and a spanishh array
        const wordsArray = englishWords.split('\n')
        const englishWordsArray = []
        const spanishWordsArray = []
        const breaklinesArray = []
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
            breaklinesArray.push(false)
        })
        setLanguageTranslationsMap({ englishWords: englishWordsArray, spanishWords: spanishWordsArray, phoneticWordsSymbols: phoneticWordsSymbols })
        setDisplayWordsBreaklineFlags(breaklinesArray)
    }

    return (
        <div style={menyStyle}>
            <TextInput setInputText={setEnglishWords} placeholder={"English"}/>
            <TextInput setInputText={setSpanishWords} placeholder={"Spanish"}/>
            <TextInput setInputText={setPhoneticWordsSymbols} placeholder={"Phonetic"}/>
            <PlayButton onSubmit={splitTextInputByLanguage} />
        </div>
    )
}