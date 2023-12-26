import PrompterComponent from "./PrompterComponent"
import FooterComponent from "./FooterComponent"
import { useState } from 'react'
import { useEnglishCompleted, useSpanishCompleted, useUpdateEnglishCompleted, useUpdateSpanishCompleted } from "./TextDataProvider"

export default function StageComponent({data, breakLineTracker, setBreakLineTracker}) {
    const [spanishObjectData, setSpanishObjectData] = useState([]) 
    const [englishObjectData, setEnglishObjectData] = useState([])

    const stageStyle = {
        width: "1024px",
        height: "2048px",
        background: "rgb(250, 250, 250)",
        display: "grid",
        gridTemplateRows: "45% 45% 10%",
        justifyContent: "center",
        alignItems: "center",
    } 

    const englishCompleted = useEnglishCompleted()
    const spanishCompleted = useSpanishCompleted()
    const setEnglishCompleted = useUpdateEnglishCompleted()
    const setSpanishCompleted = useUpdateSpanishCompleted()

    return (
        <div style={stageStyle}>
            <PrompterComponent data={data.englishText} setCompleted={setEnglishCompleted} setObjectData={setEnglishObjectData} objectData={spanishObjectData} completed={spanishCompleted} breakLineTracker={breakLineTracker} setBreakLineTracker={setBreakLineTracker}/>
            <PrompterComponent data={data.spanishText} setCompleted={setSpanishCompleted} setObjectData={setSpanishObjectData} objectData={englishObjectData} completed={englishCompleted} breakLineTracker={breakLineTracker} setBreakLineTracker={setBreakLineTracker} />
            <FooterComponent/>
        </div>	
    )
}