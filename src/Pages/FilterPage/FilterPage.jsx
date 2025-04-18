import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import CustomCard from '../../Components/Card/CustomCard'

const FilterPage = () => {
  const { genero } = useParams()
  const [characters, setCharacters] = useState([])

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const response = await fetch('https://dragonball-api.com/api/characters?limit=100')
        const data = await response.json()
        const allCharacters = data.items || []
        const filteredCharacters = allCharacters.filter(
          (character) => character.gender?.toLowerCase() === genero.toLowerCase()
        )
        setCharacters(filteredCharacters)
      } catch (error) {
        console.error('Error fetching characters:', error)
      }
    }

    fetchCharacters()
  }, [genero])



  return (
    <main >
      {characters.map((user) => (
        <Link to={`/details/${user.id}`} key={user.id} style={{ textDecoration: 'none' }}>
          <CustomCard user={user} />
        </Link>
      ))}
    </main>
  )
}

export default FilterPage
