import React from 'react';

class Stopwatch extends React.Component {
    tickRef;
    state = {
        isRunning: false,
        timer: 0
    }

    tick = () => {
        if (this.state.isRunning) {
            this.setState({ timer: this.state.timer + 1 })
        }
    }

    reset = () => {
        this.setState({ timer: 0 })
    }

    componentDidMount() {
        this.tickRef = setInterval(this.tick, 1000);
    }
    //돔이 랜더링 된 직후에 호출됨
    //REST API 호출, 3rd 라이브러리 로딩할때 위의 함수를 사용

    componentWillUnmount() {
        clearInterval(this.tickRef);
    }
    //돔이 파괴되기 직전에 호출되는 라이프 사이클 메서드

    getButton = () => {
        if (this.state.isRunning) {
            return (
                <button onClick={() => this.setState({ isRunning: !this.state.isRunning })}>stop</button>
            );
        } else {
            return (
                <button onClick={() => this.setState({ isRunning: !this.state.isRunning })}>start</button>
            );
        }
    }

    render() {
        return (
            <div className="stopwatch">
                <h2>Stopwatch</h2>
                <span className="stopwatch-time">{this.state.timer}</span>
                {
                    this.getButton()
                }
                <button onClick={this.reset}>Reset</button>
            </div>
        );
    }
}

export default Stopwatch; 