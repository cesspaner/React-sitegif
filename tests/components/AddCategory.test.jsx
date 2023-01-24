import { fireEvent, render, screen } from "@testing-library/react"
import { AddCategory } from "../../src/components/AddCategory"

describe('Prueba de addcategory', () => {
  test('Prueba sobre las funciones', () => {
    render(<AddCategory onNewCategory = {()=>{}} />)
    
    const input = screen.getByRole('textbox')
    
    fireEvent.input(input, {target : {value :'Saitama'}})
    expect(input.value).toBe('Saitama')
    screen.debug()

  })
  
})
