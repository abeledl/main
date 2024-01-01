const useGetWordsAndBreaklines = (inputText) => {
    if (inputText === undefined){
        throw new Error("inputText is undefined")
    }
    
    const spanishAndEnglishWordPairs= inputText.split('\n')
    const englishWords = [], spanishWords = [], phoneticWords = [], breaklines = []
    
    spanishAndEnglishWordPairs.forEach(wordPair => {
        const [englishWord, spanishWord] = wordPair.split("|")
        englishWords.push(englishWord || '')
        spanishWords.push(spanishWord || '')
        breaklines.push(false)
    })

    return ( {english: englishWords, spanish: spanishWords, phonetic: phoneticWords, breaklines: breaklines} )
}

export default useGetWordsAndBreaklines