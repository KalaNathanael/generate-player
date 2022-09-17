import "./App.css";
import React from "react";
import PlayerCard from "./components/UIC's/PlayerCard/PlayerCard.uic";

function generatePlayers() {
  let nbrOfPlayers = Math.round(Math.random()) + 3;
  let toReturn = [];
  // let positions = ["MJ", "A", "AI", "AF", "P"];

  for (let i = 0; i < nbrOfPlayers; i++) {
    let statBonus = i % 3 === 0 && i > 0 ? 2 : 0;
    let stat =
      90 - i * 2 + statBonus + Math.ceil(Math.random() * (9 - i * 0.2));

    let minPrime = 10;
    let gap = i < 2 ? 6 : 4;
    if (stat === 99) {
      minPrime += 2;
      gap -= 2;
    }
    let dureePrime = minPrime + Math.round(Math.random() * gap) - i;

    let position = getPosition(Math.ceil(Math.random() * 5));
    toReturn.push({ prime: stat, dureePrime, position });
  }

  return toReturn;
}

function getPosition(indice) {
  switch (indice) {
    case 1:
      return "MJ";
    case 2:
      return "A";
    case 3:
      return "AI";
    case 4:
      return "AF";
    case 5:
      return "P";
    default:
      return "Choose Yourself";
  }
}

function App() {
  const [players, setPlayers] = React.useState([]);
  console.log("players", players);

  return (
    <div className="App">
      {players.map((player, idx) => {
        return (
          <PlayerCard
            key={idx}
            numero={idx + 1}
            dureePrime={player.dureePrime}
            position={player.position}
            prime={player.prime}
          />
        );
      })}
      <button
        className="generate"
        onClick={() => {
          setPlayers(generatePlayers());
        }}
      >
        Generer
      </button>
    </div>
  );
}

export default App;
