import React, { useEffect, useState } from 'react'

function Stopwatch() {

    const [ time, setTime] = useState(0);
    const [ isRunning, setIsRunning] = useState(false);

    useEffect(() => {
        let intervel;

        if (isRunning) {
            intervel = setInterval(() => {
                setTime((prevTime) => prevTime + 1);
            }, 1000);


        }else {
            clearInterval(intervel); // clear the interval time when stopped
        }
        return () => clearInterval(intervel);
    }, [isRunning])

    const handleStart =() => setIsRunning(true);
    const handleStop = () => setIsRunning(false);
    const handleReset = () => {
        setIsRunning(false);
        setTime(0); //reset the time to 0
    }
    

  return (
    <div>
        <h1>Stopwatch</h1>
        <h2>
            {Math.floor(time / 60)}:{(time % 60).toString().padStart(2, "0")}{" "}(mm:ss)
        </h2>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  )
}

export default Stopwatch
