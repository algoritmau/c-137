import { useEffect, useState } from 'react'

import Character from './Character'

const List = () => {
  const [loading, setLoading] = useState(true)
  const [characters, setCharacters] = useState([])
  
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch('https://rickandmortyapi.com/api/character')
      const { results } = await data.json()

      setCharacters(results)
      setLoading(false)
    }

    fetchData()
  }, [characters.length])

  return (
    <div>
      <h2>Characters</h2>
      {loading ? (
        <div>Loading...</div>
      ) : (
        characters.map((character) => (
          <Character
            key={character.id}
            name={character.name}
            origin={character.origin}
            image={character.image}
          />
        ))
      )}
    </div>
  )
}

export default List

