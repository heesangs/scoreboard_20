import React, { useState, useRef } from 'react';
import useInterval from '../hooks/useInterval'

function Stopwatch() {


    const [isRunning, setIsRunning] = useState(false);
    const [timer, setTimer] = useState(0)

    const refIsRunning = useRef(false);

    
    useInterval(() => {
        if(isRunning){
            setTimer(timer+1)
        }
    },1000)
    // 커스텀 훅은 이름이 use로 시작하고, 다른 훅을 호출할 수 있다. 

    const reset = () => {
        setTimer(0)
    }


    const getButton = () => {
        if (isRunning) {
            refIsRunning.current = true;
            return (
                <button onClick={() => setIsRunning(!isRunning)}>stop</button>
            );
        } else {
            refIsRunning.current = false;
            return (
                <button onClick={() => setIsRunning(!isRunning)}>start</button>
            );
        }
    }

    return (
        <div className="stopwatch">
            <h2>Stopwatch</h2>
            <span className="stopwatch-time">{timer}</span>
            {
                getButton()
            }
            <button onClick={reset}>Reset</button>
        </div>
    );
}

export default Stopwatch; 