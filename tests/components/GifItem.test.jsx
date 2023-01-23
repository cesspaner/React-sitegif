import { render, screen } from "@testing-library/react"
import { GifItem } from "../../src/components/GifItem"


describe('Añadir PropTypes', () => {
    const title = "Saitama"
    const url   = "https://one-punch.com/"
  test('Valores obligatorios', () => {
     const {container}=render(<GifItem title={title} url={url}/>)
     expect(container).toMatchSnapshot()

    })

  test('Debe de mostrar la imagen con el Url y ALT indicado', () => {
      render(<GifItem title={ title } url={ url } />)
      //screen.debug() 
      //   expect(screen.getByRole('img').src).toBe( url )
      //   expect(screen.getByRole('img').alt).toBe( title )

    const { src , alt }= screen.getByRole('img')
    expect(src).toBe(url)
    expect(alt).toBe(title)
    })
})
