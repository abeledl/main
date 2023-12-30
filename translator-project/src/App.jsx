import Stage from "./components/stage-components/Stage/Stage"
import Menu from "./components/menu-components/Menu/Menu"
import { BreaklinesProvider } from "./contexts/BreaklinesProvider"
import { WordsProvider } from "./contexts/WordsProvider"
import "./AppStyle.scss"

function App() {
  return (
    <div className="app">
      <WordsProvider>
        <BreaklinesProvider>
          <Stage />
          <Menu />
        </BreaklinesProvider>
      </WordsProvider>
    </div>
  )
}

export default App
