import React, { useState } from "react";
import './App.css';
import AddPlayerForm from "./component/AddPlayerForm";
import { Header } from "./component/Header";
import CustomPlayer from "./component/CustomPlayer";
import _ from 'lodash';

let maxId = 4;

function App() {
  const [players, setPlayer] = useState([
    { name: 'CHS', score: 0, id: 1 },
    { name: 'HONG', score: 0, id: 2 },
    { name: 'KIM', score: 0, id: 3 },
    { name: 'PARK', score: 0, id: 4 },
  ]
  )

  const handleRemovePlayer = (id) => {
    const newPlayers = players.filter((player) => player.id !== id)
    setPlayer(newPlayers);
    //filter : 배열요소를 걸러내는것.
  }

  const handleChangeScore = (delta, id) => {
    const newPlayers = [...players]
    newPlayers.forEach((player) => {
      if (player.id === id) {
        player.score += delta;
      }
    })
    //forEach : for같은 기본적인 반복문.
    setPlayer(newPlayers)
  }

  const handleAddPlayer = (name) => {
    const newPlayers = [...players];
    newPlayers.unshift({ name, score: 0, id: ++maxId })
    //push: 배열의 끝에 요소를 추가.
    //unshift: 배열의 처음에 요소를 추가.
    setPlayer(newPlayers)
  }

  const getHighScore = () => {
    const maxObj = _.maxBy(players, 'score');
    return maxObj.score ? maxObj.score : null;
  }

  return (
    <div className="scoreboard">
      <Header title='scoreboard' players={players}></Header>
      {
        players.map(player => {
          return <CustomPlayer
            name={player.name}
            score={player.score}
            key={player.id}
            id={player.id}
            removePlayer={handleRemovePlayer}
            changeScore={handleChangeScore}
            isHighScore={player.score === getHighScore()}
          ></CustomPlayer>
        })
        // map : item(배열안 요소)의 그룹값만 모아서 새로운 배열을 만듦 (유사:map, reducer, filter)
      }
      <AddPlayerForm addPlayer={handleAddPlayer}></AddPlayerForm>
    </div>
  );
}

// 컨테이너 컴포넌트, 프리젠테이션 컴포넌트로 구분관리하면 유지보수하기 편하다. 

export default App;
