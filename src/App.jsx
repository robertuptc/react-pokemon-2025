import { useEffect, useState } from 'react'
import './App.css'
// Components
import Button from './components/Button'
import Pokemon from './components/Pokemon'


function App() {
  
  const [pokemon, setPokemon] = useState(false)
  const [similarPokemons, setSimilarPokemons] = useState([])
  
  useEffect(() =>{
    // console.log(similarPokemons)
    // console.log(similarPokemons.length)
  }, [similarPokemons])

  return (
    <>
      <div>
        <Button setPokemon={setPokemon} setSimilarPokemons={setSimilarPokemons}/>
        
        <Pokemon pokemon={pokemon} similarPokemons={similarPokemons}/>
        
      </div>
    </>
  )
}

export default App
