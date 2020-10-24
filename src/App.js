import React from "react";
import './App.css';
import {Header} from "./component/Header";

// const players = [
//   {name: 'LDK', score: 30, id: 1},
//   {name: 'HONG', score: 40, id: 2},
//   {name: 'KIM', score: 50, id: 3},
//   {name: 'PARK', score: 60, id: 4},
// ];

//펑션 컴포넌트 되는 조건
//첫글자는 대문자
// react element 리턴



class Counter extends React.Component {
  state = {
    score: 10
  }

  // handleScore() {
  //   console.log(this);
  //   this.state.score += 1;
  // }
  // 애로우펑션을 쓰지 않으면 bind(this)를 사용해야한다.

  // handleScore =() => {
  //   console.log(this);
  //   // this.state.score += 1;
  //   this.setState({
  //     score: this.state.score + 1
  //   })
  // }

  handleScore = (delta, e) => {
    console.log(e.target);
    // this.state.score += 1;
    this.setState(prevState => {
      return {
        score: prevState.score + delta
      }
    })
  }


  render() {
    return (
      <div className="counter">
        <button className="counter-action decrement" onClick={(e) => {
          this.handleScore(-1, e)
        }}>-
        </button>
        <span className="counter-score">{this.state.score}</span>
        <button className="counter-action increment" onClick={(e) => {
          this.handleScore(1, e)
        }}>+
        </button>
      </div>
    );
  }
}

//클릭이벤트에는 함수형태로 와야한다.
//바인드 디스를 해야하거나 혹은 애로우 펑션을 쓴다.


let Player = (props) => {
  return (
    <div className="player">
      <span className='player-name'>
      <button className='remove-player' onClick={() => props.removePlayer(props.id)}>x</button>
      <span className="player-name">{props.name}</span>
      </span>
      <Counter score={props.score}></Counter>
    </div>
  )
}

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
