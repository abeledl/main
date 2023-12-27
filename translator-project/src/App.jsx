import StageComponent from "./stage-components/StageComponent"
import MenuComponent from "./menu-components/MenuComponent"
import { useState } from "react"
import "./AppStyle.css"

function App() {
  const [allTextData, setAllTextData] = useState({})
  const [breakLineTracker, setBreakLineTracker] = useState([])

  const appStyle = {
    display: "flex",
  }

  return (
    <>
      <div style={appStyle}>
        <StageComponent
          data={allTextData}
          breakLineTracker={breakLineTracker}
          setBreakLineTracker={setBreakLineTracker}
        />
        <MenuComponent
          setAllTextData={setAllTextData}
          setBreakLineTracker={setBreakLineTracker}
        />
      </div>
    </>
  )
}

export default App
