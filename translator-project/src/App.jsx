import StageComponent from "./stage-components/StageComponent"
import MenuComponent from "./menu-components/MenuComponent"
import { useEffect, useState } from "react"
import "./AppStyle.scss"

function App() {
  const [allTextData, setAllTextData] = useState({})
  const [breakLineTracker, setBreakLineTracker] = useState([])

  const appStyle = {
    display: "flex",
  }

  return (
    <>
      <div style={appStyle}>
        {/* <div className="blurry-background"> */}
          <StageComponent
            data={allTextData}
            breakLineTracker={breakLineTracker}
            setBreakLineTracker={setBreakLineTracker}
          />
        {/* </div> */}
        <MenuComponent
          setAllTextData={setAllTextData}
          setBreakLineTracker={setBreakLineTracker}
        />
      </div>
    </>
  )
}

export default App
