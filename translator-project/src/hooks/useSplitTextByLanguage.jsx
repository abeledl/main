const useSplitTextByLanguage = (inputText) => {
    if (inputText === undefined){
        throw new Error("inputText is undefined")
    }
    const wordsArray = inputText.split('\n')
    const englishWordsArray = []
    const spanishWordsArray = []
    const phoneticWords = []
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
    return ({words:  { english: englishWordsArray, spanish: spanishWordsArray, phonetic: phoneticWords }, breaklines: breaklinesArray})

}

export default useSplitTextByLanguage