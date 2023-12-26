import StageComponent from "./stage-components/StageComponent"
import MenuComponent from "./menu-components/MenuComponent"
import { useState } from "react"

function App() {
  const [allTextData, setAllTextData] = useState({})

  const appStyle = {
    display: "flex",
  }

  return (
    <>
      <div style={appStyle}>
        <StageComponent data={allTextData} />
        <MenuComponent setAllTextData={setAllTextData} />
      </div>
    </>
  )
}

export default App
