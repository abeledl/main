import { render, screen} from '@testing-library/react'
import StageComponent from "../StageComponent"

it(' should render stage component', () => {
    render(<StageComponent data={{englishText: "", spanishText: ""}}/>)
})