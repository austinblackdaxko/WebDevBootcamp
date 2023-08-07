import { useState } from "react";


export default function ScoreKeepers({players, target=5}) {

  const [scores, setScore] = useState(new Array(players).fill(0));

  const resetScore = () => {
     return setScore(prevScore => prevScore.map(() => 0))
  }

  const changeScore = (index) => {
    setScore(prevScore => {
      return prevScore.map((item, i) => (i === index ? prevScore[i] + 1 : item))
    })
  }

  return (
    <div>
      <h1>Score Keeper</h1>
      <ul>
        {
          scores.map((score, index) => {
            return (
              <li key={index} style={score >= target ? {color: 'green'} : {}}>Player {index + 1}: {score}
              <button onClick={() => changeScore(index)}>+1</button>
              {score >= target ? " you won! 🎉🎉🎉" : ''}
              </li>)
          })
        }
      </ul>

      <button onClick={resetScore}>Reset State</button>

    </div>

  )
}