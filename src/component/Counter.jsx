import React from "react";

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

//펑션 컴포넌트 되는 조건
//첫글자는 대문자
// react element 리턴

//클릭이벤트에는 함수형태로 와야한다.
//바인드 디스를 해야하거나 혹은 애로우 펑션을 쓴다.

export default Counter