import { useState, useEffect } from 'react';
import "./score.css";

function Score({ lastClicked }) {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0); 
  const [clickedPokemons, setClickedPokemons] = useState([]);

  useEffect(() => {
    if (lastClicked === null) return;

    if (clickedPokemons.includes(lastClicked)) {
      
      alert('You lose');
      setScore(0);
      setClickedPokemons([]);
    } else {
      
      const newScore = score + 1;
      setScore(newScore);
      setClickedPokemons([...clickedPokemons, lastClicked]);

     
      if (newScore > bestScore) {
        setBestScore(newScore);
      }
    }
  }, [lastClicked]);

  return (
    <div className="score-container">
      <p>Score: {score} | Best Score: {bestScore}</p>
    </div>
  );
}

export default Score;
