import { useState, useEffect } from 'react';
import './card.css';

function Card() {
  const [pokemons, setPokemons] = useState([]);
  const [startId, setStartId] = useState(780); // Da quale ID iniziare

  useEffect(() => {
    const fetchPokemons = async () => {
      try {
        const promises = [];

        // Ad esempio, mostra 5 Pokémon a partire da startId
        for (let i = startId; i < startId + 14; i++) {
          promises.push(fetch(`https://pokeapi.co/api/v2/pokemon/${i}`).then(res => res.json()));
        }

        const results = await Promise.all(promises); // aspetta tutte le richieste
        setPokemons(results); // aggiorna lo stato
      } catch(error){
        console.error("Error while loading", error)
      };
      ;
      
      
    };

    fetchPokemons();
  }, [startId]); // cambia quando cambia l'ID di partenza
    // Funzione per mischiare un array (Fisher-Yates shuffle)
  const shuffleArray = (array) => {
    const newArray = [...array]; // Crea una copia per non modificare l'array originale direttamente
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]]; // Scambia gli elementi
    }
    return newArray;
  };

  const changePosition = () => {
    setPokemons(shuffleArray(pokemons));
  };

  const genrateKey = crypto.randomUUID();

  console.log(genrateKey);
  return (
    <div className='card-container'>
      {pokemons.length > 0 ? (
        pokemons.map((pokemon) => (
          <div key={pokemon.id} className="pokemon-card" onClick={changePosition}>
            <img src={pokemon.sprites.front_default} alt={pokemon.name} key={genrateKey}/>
          </div>
        ))
      ) : (
        <p>Loading...</p>
      )}

      </div>
    
  );
}

export default Card;

