import { useState, useEffect } from 'react';
import "./score.css"

function Score({ lastClicked }){
    const [score, setScore] = useState(0);
    const [clickedPokemons, setClickedPokemons] = useState([]);
    useEffect(() => {
        if (lastClicked === null) return;
    
        if (clickedPokemons.includes(lastClicked)) {
          // Pokémon già cliccato → reset
          alert('You lose');
          setScore(0);
          setClickedPokemons([]);
        } else {
          // Nuovo Pokémon → incrementa
          setScore(score + 1);
          setClickedPokemons([...clickedPokemons, lastClicked]);
        }
      }, [lastClicked]); // Triggera quando cambia il Pokémon cliccato
    
  return(
    <>
    <div className="score-container">
    <p>Score: {score}</p>
    </div>
    </>
  )
}

export default Score