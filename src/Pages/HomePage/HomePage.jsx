import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'


import CustomCard from '../../Components/Card/CustomCard'

const HomePage = () => {
  const [characters, setCharacters] = useState([])


  useEffect(() => {
    fetch('https://dragonball-api.com/api/characters?limit=58')
      .then((response) => {
        if (!response.ok) throw new Error('Error en la API');
        return response.json();
      })
      .then((data) => {
        
        setCharacters(data.items); // Ajusta según la estructura real de la respuesta
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    
    <main>
      <div>
        
      </div>
     
      {characters.map((user) => (
        <Link
          to={`/details/${user.id}`}
          key={user.id}
          style={{ textDecoration: 'none' }}
        >

          <CustomCard key={user.id} user={user} />
        </Link>

      ))}
    </main>
  )
}

export default HomePage