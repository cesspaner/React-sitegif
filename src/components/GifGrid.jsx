import { useFethGifs } from "../hooks/useFethGifs"
import { GifItem } from "./GifItem"
import { LoadingMessage } from "./LoadingMessage"

export const GifGrid = ({category}) => {

const {images, isLoading} = useFethGifs(category)


  return (
    <>
      <h3>{category}</h3>
      <LoadingMessage isLoading= {isLoading}/>
      <div className="card-grid">
        {
            images.map((image) =>(
                <GifItem 
                    key  ={image.id}
                    // title={image.title}
                    // url  ={image.url} 
                    {...image} //para mandar todas las propiedades
                />
            ))
        }
      </div>
     </>
  )
}
