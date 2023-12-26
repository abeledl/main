import { render, screen, fireEvent } from '@testing-library/react'
import MenuComponent from '../MenuComponent'

describe('MenuComponent', () => {
  test('renders three TextInputComponents and one PlayButtonComponent', () => {
    render(<MenuComponent setAllTextData={() => { }} />)
    expect(screen.getAllByRole('textbox')).toHaveLength(3)
    expect(screen.getByRole('button', { name: /Play/i })).toBeInTheDocument()
  })

  test('calls setAllTextData with the correct data when clicking the play button', () => {
    const mockSetAllTextData = vi.fn()
    render(<MenuComponent setAllTextData={mockSetAllTextData} />)
    const englishInput = screen.getByPlaceholderText('English')
    const playButton = screen.getByRole('button', { name: /Play/i })

    fireEvent.change(englishInput, { target: { value: 'hello|hola\nworld|mundo' } })

    fireEvent.click(playButton)

    expect(mockSetAllTextData).toHaveBeenCalledWith({
      englishText: ['hello', 'world'],
      spanishText: ['hola', 'mundo'],
      phoneticText: []
    })
  })
})