import { render, screen } from "@testing-library/react"
import { GifGrid } from "../../src/components/GifGrid"
import { useFethGifs } from "../../src/hooks/useFethGifs"

jest.mock('../../src/hooks/useFethGifs')

describe('Prueba del componente GifGrid', () => {
    const  category = 'One Pounch'
    test('Debe de mostrar el loading previo a carga', () => {
    
    useFethGifs.mockReturnValue ({
       images : [],
       isLoading : true,
    })  // se evalua la carga inicial del hook  
    render(<GifGrid category = {category}/>)
    //screen.debug()
    expect(screen.getByText('Cargando...'))
    expect(screen.getByText(category))
  })

  test('Debe de mostrar los items cuando se cargan las imagenes', () => {
    
    const gifs = [
      {
        id: 'abc',
        title : 'Listas0',
        url: 'https://test.com'
       },
       {
        id: '123',
        title : 'Listas1',
        url: 'https://test.com'
       }
    ]
    
    useFethGifs.mockReturnValue ({
        images : gifs,
        isLoading : false,
     })
    render(<GifGrid category = {category}/>)
    //screen.debug();
    expect(screen.getAllByRole('img').length).toBe(2)
  })
  
  
})
