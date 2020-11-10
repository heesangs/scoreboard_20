import React, { useEffect, useState, useRef } from 'react';

function Stopwatch() {


    const [isRunning, setIsRunning] = useState(false);
    const [timer, setTimer] = useState(0)

    const refIsRunning = useRef(false);
    const refTickRef = useRef()

    const tick = () => {
        console.log(refIsRunning.current, timer)
        if (refIsRunning.current) {
            setTimer(timer => timer + 1)
        }
    }

    const reset = () => {
        setTimer(0)
    }

    useEffect(() => {
        refTickRef.current = setInterval(tick, 1000);
        return () => {
            clearInterval(refTickRef.current);
        }
    });

    // useEffect 돔이 랜더링 된 이후에 데이터나 API를 불러오는데 사용된다
    // 컴포넌트 안에 useEffect를 사용하는 이유는 변수를 사용할 수 있기 때문이다 

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