import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import CustomCard from '../../Components/Card/CustomCard'
import './DetalisPage.css'


const DetailsPage = () => {
  const [character, setCharacter] = useState({})
  const { id } = useParams()

  useEffect(() => {
    fetch('https://dragonball-api.com/api/characters/' + id)
      .then(response => response.json())
      .then(data => setCharacter(data))
  }, [id])

  return (
    <>
      <div className='gif'></div>

      <div className="card-wrapper">
        <CustomCard user={character} showFullDetails={true} />

        <div className="description-cloud">
          <h3>Descripción</h3>
          <p>{character.description ? character.description : 'No hay descripción disponible.'}</p>
        </div>
      </div>

    </>
  )
}

export default DetailsPage
