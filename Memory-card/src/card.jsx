import { useState, useEffect } from 'react';
import './card.css';

function Card() {
  const [pokemon, setPokemon] = useState(null);
  const [count, setCount] = useState(1); // ID del Pokémon da visualizzare

  useEffect(() => {
    // Funzione per fetchare il Pokémon dalla PokéAPI
    const fetchPokemon = async () => {
      try {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon/${count}')
        setPokemon(data);
      } catch (error) {
        console.error('Error while loading ', error);
      }
    };

    fetchPokemon();
  }, [count]); // Ricarica quando cambia il count

  return (
    <div className='card-container'>
      {pokemon ? (
        <>
          <img src={pokemon.sprites.front_default} alt={pokemon.name} />
        </>
      ) : (
        <p>Caricamento...</p>
      )}
    </div>
  );
}

export default Card;
