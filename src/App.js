import React from "react";
import './App.css';
import {Header} from "./component/Header";
import Player from "./component/Players";




class App extends React.Component {
  state = {
    players: [
      {name: 'LDK', score: 30, id: 1},
      {name: 'HONG', score: 40, id: 2},
      {name: 'KIM', score: 50, id: 3},
      {name: 'PARK', score: 60, id: 4},
    ]
  }

  handleRemovePlayer =(id) => {
    console.log('handleRemovePlayer', id);
    this.setState((prevState)=> {
      //ID를 제외한 상태를 업데이트.
      //prevstate는 이전 state상태이다
      const players = prevState.players.filter((player)=>player.id !== id)
      return {players: players};
      //filter : 새로운 배열을 리턴한다.
    })
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
            return <Player name={player.name} score={player.score} key={player.id} id={player.id}
                           removePlayer={this.handleRemovePlayer}></Player>
          })
        }
      </div>
    );
  }

}

export default App;
