import Stage from "./components/stage-components/Stage/Stage"
import Menu from "./components/menu-components/Menu/Menu"
import { useState } from "react"
import "./AppStyle.scss"

function App() {
  const [words, setWords] = useState({})
  const [breaklineFlags, setBreaklineFlags] = useState([])

  const appStyle = {
    display: "flex",
  }

  return (
    <>
      <div style={appStyle}>
        <Stage
          words={words}
          breaklineFlags={breaklineFlags}
          setBreaklineFlags={setBreaklineFlags}
        />
        <Menu
          setWords={setWords}
          setBreaklineFlags={setBreaklineFlags}
        />
      </div>
    </>
  )
}

export default App
