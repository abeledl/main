import React, { useContext, useState } from 'react'

const BreaklinesContext = React.createContext()
const UpdateBreaklinesContext = React.createContext()

export function useBreaklines() {
    return useContext(BreaklinesContext)
}

export function useUpdateBreaklines() {
    return useContext(UpdateBreaklinesContext)
}

export function BreaklinesProvider({ children }) {
    const [breaklineFlags, setBreaklineFlags] = useState([])

    return (
        <BreaklinesContext.Provider value={breaklineFlags}>
            <UpdateBreaklinesContext.Provider value={setBreaklineFlags}>
                {children}
            </UpdateBreaklinesContext.Provider>
        </BreaklinesContext.Provider>
    )
}