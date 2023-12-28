import Stage from "./components/stage-components/Stage/Stage"
import Menu from "./components/menu-components/Menu/Menu"
import { useState } from "react"
import "./AppStyle.scss"

function App() {
  const [languageTranslationsMap, setLanguageTranslationsMap] = useState({})
  const [displayWordsBreaklineFlags, setDisplayWordsBreaklineFlags] = useState([])

  const appStyle = {
    display: "flex",
  }

  return (
    <>
      <div style={appStyle}>
        <Stage
          languageTranslationsMap={languageTranslationsMap}
          displayWordsBreaklineFlags={displayWordsBreaklineFlags}
          setDisplayWordsBreaklineFlags={setDisplayWordsBreaklineFlags}
        />
        <Menu
          setLanguageTranslationsMap={setLanguageTranslationsMap}
          setDisplayWordsBreaklineFlags={setDisplayWordsBreaklineFlags}
        />
      </div>
    </>
  )
}

export default App
