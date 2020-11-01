import React from "react";
import './App.css';
import { Header } from "./component/Header";
import Player from "./component/Players";



class App extends React.Component {
  state = {
    players: [
      { name: 'CHS', score: 0, id: 1 },
      { name: 'HONG', score: 0, id: 2 },
      { name: 'KIM', score: 0, id: 3 },
      { name: 'PARK', score: 0, id: 4 },
    ]
  }

  handleRemovePlayer = (id) => {
    console.log('handleRemovePlayer', id);
    this.setState((prevState) => {
      //ID를 제외한 상태를 업데이트.
      //prevstate는 이전 state상태이다. 이름을 바꿔도 된다. 
      const players = prevState.players.filter((player) => player.id !== id)
      return { players: players };
      //filter : 새로운 배열을 리턴한다.
    })
  }

  handleChangeScore = (id) => {
   console.log('handleChangeScore', id)
  }

  render() {
    return (
      <div className="scoreboard">
        <Header title='scoreboard' players={1}></Header>
        {/*속성이 해더의 제이슨객체로 넘어간다*/}

        {/*Players List*/}
        {/*{*/}
        {/*  [*/}
        {/*    <Player name="sangs" score={10} key={player.id}></Player>*/}
        {/*  ]*/}
        {/*}*/}
        {/*제이슨 객체안에 배열이 들어가 있다. 아래와 똑같음*/}

        {
          this.state.players.map(player => {
            return <Player
              name={player.name}
              score={player.score}
              key={player.id}
              id={player.id}
              removePlayer={this.handleRemovePlayer}
              changeScore={this.handleChangeScore}
            ></Player>
          }) 
          // map : item(배열안 요소)의 그룹값만 모아서 새로운 배열을 만듦 (유사:map, reducer, filter)
        } 
      </div>
    );
  }
}

// 컨테이너 컴포넌트, 프리젠테이션 컴포넌트로 구분관리하면 유지보수하기 편하다. 

export default App;
