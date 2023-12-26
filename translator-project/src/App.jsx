import StageComponent from "./stage-components/StageComponent"
import MenuComponent from "./menu-components/MenuComponent"
import { useState } from "react"
import { TextDataProvider } from "./stage-components/TextDataProvider"

function App() {
  const [allTextData, setAllTextData] = useState({})
  const [breakLineTracker, setBreakLineTracker] = useState([])

  const appStyle = {
    display: "flex",
  }

  return (
    <>
      <div style={appStyle}>
        <TextDataProvider>
          <StageComponent data={allTextData} breakLineTracker={breakLineTracker} setBreakLineTracker={setBreakLineTracker} />
        </TextDataProvider>
        <MenuComponent setAllTextData={setAllTextData} setBreakLineTracker={setBreakLineTracker}/>
      </div>
    </>
  )
}

export default App
