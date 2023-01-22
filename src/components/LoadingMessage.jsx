export const LoadingMessage = ({isLoading}) => {
  return (
        isLoading && (<h2 className="loading">Cargando...</h2>)//and logico
        // isLoading ? (<h2>Cargando...</h2>): null //ternario donde regreso el loading si es false
  )
}
