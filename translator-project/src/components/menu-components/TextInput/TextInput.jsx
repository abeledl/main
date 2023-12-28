import { useState } from 'react'

export default function TextInput({setInputText, placeholder}) {
    const [userInputText, setUserInputText] = useState("")

    const updateInputText = (e) => {
        setUserInputText(e.target.value)
        setInputText(e.target.value)
    }

    return (
        <div>
            <textarea value={userInputText} onChange={updateInputText} rows={5} placeholder={placeholder}></textarea>
        </div>	
    )
}