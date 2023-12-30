import React, { useContext, useState } from "react"

const WordsContext = React.createContext()
const UpdateWordsContext = React.createContext()

export function useWords() {
    return useContext(WordsContext)
}

export function useUpdateWords() {
    return useContext(UpdateWordsContext)
}

export function WordsProvider({children}) {
    const [words, setWords] = useState({})

    return (
    <WordsContext.Provider value={words}>
        <UpdateWordsContext.Provider value={setWords}>
            {children}
        </UpdateWordsContext.Provider>
    </WordsContext.Provider>
    )
}

