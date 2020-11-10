import {useRef, useEffect} from 'react'

function useInterval(callback, delay) {
    const savedCallback = useRef();
   
    // Remember the latest callback.
    useEffect(() => {
      savedCallback.current = callback;
    },[callback]);
   
    // Set up the interval.
    useEffect(() => {
      function tick() {
        savedCallback.current();
      }
      if (delay !== null) {
          //딜레이 값에 어떤값이라도 들어오면 아래의 함수를 실행하라. 
        let id = setInterval(tick, delay);
        return () => clearInterval(id);
      }
    },[delay]);
  }
   
  export default useInterval;