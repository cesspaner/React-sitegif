import { renderHook, waitFor } from "@testing-library/react"
import { useFethGifs } from "../../src/hooks/useFethGifs"

describe('Prueba de hook useFethGifs', () => {
  test('Debe de retornar cambios de estados estado inicial', () => {
    const {result} = renderHook(()=>useFethGifs('One Punch'))
    //console.log(result)
    const {images,isLoading} = result.current
    //useFethGifs()
    expect(images.length).toBe(0)
    expect(isLoading).toBeTruthy()
  })
  test('Debe de retornar un arreglo de imagens y isloadinf en false', async () => {
    const {result} = renderHook(()=>useFethGifs('One Punch'))
    await waitFor(
      ()=> expect(result.current.images.length).toBeGreaterThan(0)
    )
    const {images, isLoading} = result.current
    //console.log(result)
    //useFethGifs()
    expect(images.length).toBeGreaterThan(0)
    expect(isLoading).toBeFalsy()
  })
  
})
