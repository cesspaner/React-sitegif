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

  test('Debe de llamar onNewCategory si el input tiene un valor',()=>{
     const inputValue = 'Saitama'
     const onNewCategory = jest.fn()

     render(<AddCategory onNewCategory = {onNewCategory} />)
     const input = screen.getByRole('textbox')
     const form = screen.getByRole('form')

     fireEvent.input(input, {target : {value :inputValue}})
     fireEvent.submit(form)
     
     expect(input.value).toBe('')

     expect(onNewCategory).toHaveBeenCalled() //llamar a la funcion que pasa el dato
     expect(onNewCategory).toHaveBeenCalledTimes(1)//espera ser llamado solo una ves
     expect(onNewCategory).toHaveBeenCalledWith(inputValue)//espera ser llamada con el inputvalue

   })

   test('No debe de llamar el onNewCategory si el input esta vacio', () => {
    const onNewCategory = jest.fn()
    render(<AddCategory onNewCategory = {onNewCategory} />)
    const form = screen.getByRole('form')
    fireEvent.submit(form)
    expect(onNewCategory).toHaveBeenCalledTimes(0)//validar que no se haya llamado
    expect(onNewCategory).not.toHaveBeenCalled()//validar que no se haya llamado
   })
   
  
})
