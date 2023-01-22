import { useEffect, useState } from "react"
import { getGifs } from "../helpers/getGifs"

export const useFethGifs = (category) => {

    const [images, setimages] = useState([])  
    const [isLoading, setisLoading] = useState(true)  
  
    const getImages = async ()=> {
      const newimages = await getGifs(category)
      setimages(newimages)
      setisLoading(false)
    }
  
    useEffect(() => {
      getImages()
    }, [])

  return {
    images : images,
    isLoading : isLoading
  }
}
//hooks funcion que retorna las  imagenes y el loading