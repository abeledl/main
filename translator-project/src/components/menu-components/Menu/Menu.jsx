import TextInput from "../TextInput/TextInput"
import PlayButton from "../PlayButton/PlayButton"
import { useState } from "react"
import "./styles/MenuStyle.css"
import { useUpdateWords } from "../../../contexts/WordsProvider"
import { useUpdateBreaklines } from "../../../contexts/BreaklinesProvider"
import useGetWordsAndBreaklines from "../../../hooks/useGetWordsAndBreaklines.jsx"

export default function Menu() {
    const [inputText, setInputText] = useState([])
    const [spanishWords, setSpanishWords] = useState([])
    const [phoneticWordsSymbols, setPhoneticWordsSymbols] = useState([])

    const updateWords = useUpdateWords()
    const updateBreaklines = useUpdateBreaklines()
    const getWordsAndBreaklines = useGetWordsAndBreaklines
    const handleClick = () => {
        const {english, spanish, phonetic, breaklines} = getWordsAndBreaklines(inputText)
        const words = {english: english , spanish: spanish , phonetic: phonetic}
        updateWords(words)
        updateBreaklines(breaklines)
    }
    
    return (
        <div className="menu">
            <TextInput setInputText={setInputText} placeholder={"English"}/>
            <TextInput setInputText={setSpanishWords} placeholder={"Spanish"}/>
            <TextInput setInputText={setPhoneticWordsSymbols} placeholder={"Phonetic"}/>
            <PlayButton onSubmit={handleClick} />
        </div>
    )
}