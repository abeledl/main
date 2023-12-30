import TextInput from "../TextInput/TextInput"
import PlayButton from "../PlayButton/PlayButton"
import { useState } from "react"
import "./styles/MenuStyle.css"
import { useUpdateWords } from "../../../contexts/WordsProvider"
import { useUpdateBreaklines } from "../../../contexts/BreaklinesProvider"
import useSplitTextByLanguage from "../../../hooks/useSplitTextByLanguage"

export default function Menu() {
    const [englishWords, setEnglishWords] = useState([])
    const [spanishWords, setSpanishWords] = useState([])
    const [phoneticWordsSymbols, setPhoneticWordsSymbols] = useState([])

    const updateWords = useUpdateWords()
    const updateBreaklines = useUpdateBreaklines()

    const handleClick = () => {
        const {words, breaklines} = useSplitTextByLanguage(englishWords)
        updateWords(words)
        updateBreaklines(breaklines)
    }
    
    return (
        <div className="menu">
            <TextInput setInputText={setEnglishWords} placeholder={"English"}/>
            <TextInput setInputText={setSpanishWords} placeholder={"Spanish"}/>
            <TextInput setInputText={setPhoneticWordsSymbols} placeholder={"Phonetic"}/>
            <PlayButton onSubmit={handleClick} />
        </div>
    )
}