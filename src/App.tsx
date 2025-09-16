import { useEffect, useState} from 'react'
import './App.css'
type EstudanteType = {
  _id: string
  nome: string
  idade: number
}
function App() {
  useEffect(() => {
    fetch("/api/estudantes")
    .then(response => response.json())
    .then(dados =>setEstudante(dados))
  console.log('App')
 }, [])
  
 const [estudantes,setEstudante] = useState<EstudanteType[]>([])
  
  return (
    <>
    <h1> lista de Estudantes</h1>
    <div className="container-estudantes">
      {estudantes.map((estudante) => {
          return (
        <div key={estudante._id} >
          <h2>{estudante.nome}</h2>
          <p>Idade: {estudante.idade}</p>
        </div>
          )
   })}
    </div>
    </>
  )
}
export default App
