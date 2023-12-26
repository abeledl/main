import React from "react" 
import { useState, useContext  } from "react"

const EnglishCompleteContext = React.createContext()
const SpanishCompletedContext = React.createContext()
const SpanishObjectDataContext = React.createContext()
const EnglishObjectDataContext = React.createContext()
const UpdateEnglishCompleteContext = React.createContext()
const UpdateSpanishCompleteContext = React.createContext()
const UpdateEnglishObjectDataContext = React.createContext()
const UpdateSpanishObjectDataContext = React.createContext()

export function useEnglishCompleted(){
    return useContext(EnglishCompleteContext)
}

export function useSpanishCompleted(){
    return useContext(SpanishCompletedContext)
}

export function useSpanishObjectData(){
    return useContext(SpanishObjectDataContext)
}

export function useEnglishObjectData(){
    return useContext(EnglishObjectDataContext)
}

export function useUpdateEnglishCompleted(){
    return useContext(UpdateEnglishCompleteContext)
}

export function useUpdateSpanishCompleted(){
    return useContext(UpdateSpanishCompleteContext)
}

export function useUpdateEnglishObjectData(){
    return useContext(UpdateEnglishObjectDataContext)
}

export function useUpdateSpanishObjectData(){
    return useContext(UpdateSpanishObjectDataContext)
}

export function TextDataProvider({children}) {
    const [englishCompleted, setEnglishCompleted] = useState(false)
    const [spanishCompleted, setSpanishCompleted] = useState(false)
    const [spanishObjectData, setSpanishObjectData] = useState([]) 
    const [englishObjectData, setEnglishObjectData] = useState([]) 
    
    return (
        <EnglishCompleteContext.Provider value={englishCompleted}>
           <SpanishCompletedContext.Provider value={spanishCompleted}>
                <SpanishObjectDataContext.Provider value={spanishObjectData}>
                    <EnglishObjectDataContext.Provider value={englishObjectData}>
                        <UpdateEnglishCompleteContext.Provider value={setEnglishCompleted}>
                            <UpdateSpanishCompleteContext.Provider value={setSpanishCompleted}>
                                <UpdateEnglishObjectDataContext.Provider value={setEnglishObjectData}>
                                    <UpdateSpanishObjectDataContext.Provider value={setSpanishObjectData}>
                                        {children}
                                    </UpdateSpanishObjectDataContext.Provider>
                                </UpdateEnglishObjectDataContext.Provider>
                            </UpdateSpanishCompleteContext.Provider>
                        </UpdateEnglishCompleteContext.Provider>
                    </EnglishObjectDataContext.Provider>
                </SpanishObjectDataContext.Provider>
            </SpanishCompletedContext.Provider> 
        </EnglishCompleteContext.Provider>	
    )
}