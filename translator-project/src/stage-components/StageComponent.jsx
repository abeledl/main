import PrompterComponent from "./PrompterComponent"
import FooterComponent from "./FooterComponent"
import { useState } from 'react'

export default function StageComponent({data}) {
    const [englishCompleted, setEnglishCompleted] = useState(false)
    const [spanishCompleted, setSpanishCompleted] = useState(false)
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

    

    return (
        <div style={stageStyle}>
            <PrompterComponent data={data.englishText} setCompleted={setEnglishCompleted} setObjectData={setEnglishObjectData} objectData={spanishObjectData} completed={spanishCompleted}/>
            <PrompterComponent data={data.spanishText} setCompleted={setSpanishCompleted} setObjectData={setSpanishObjectData} objectData={englishObjectData} completed={englishCompleted}/>
            <FooterComponent/>
        </div>	
    )
}