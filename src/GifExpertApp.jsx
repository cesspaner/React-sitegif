import { useState } from "react"
import { AddCategory , GifGrid} from "./components"

export const GifExpertApp = () => {

const [categories, setCategories] =useState([''])

const onAddCategory = (newCategory)=>{
if (categories.includes(newCategory))return
  //   console.log('Valorant')
  setCategories([newCategory, ...categories])
// setCategorias (cat => [...cat, 'valorant']) //otra forma de hacerlo
}

  return (
    <>
    <h1>Bienvenido</h1>
       <AddCategory 
        onNewCategory={onAddCategory} //se envia desectructurado a addcategori el onNewCategory
       />
        { categories.map
           ( category => 
             (
                <GifGrid
                  key     ={category}
                  category={category}/>
             )
            )
        }
    </>
  )
}
