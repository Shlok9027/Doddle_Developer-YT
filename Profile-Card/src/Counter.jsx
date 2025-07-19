import React, { useEffect, useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `count :  ${count}`;
  }, []);

  const add = () => {
    if (count == 20) {
      setCount(count == 20);    
      0
    } else {
      setCount(count + 1);
    }
  };
  const sub = () => {
    if (count == -10) {
      setCount(count == -10);
    } else {
      setCount(count - 1);
    }
  };
  const reset = () => {
    setCount(0);
  };

  return (
    <div className="counter">
      <h1 className="value">Value: {count}</h1>
      <button className="add" onClick={add}>
        Increase
      </button>
      <button className="add" onClick={sub}>
        Decrease
      </button>
      <button className="add" onClick={reset}>
        Reset
      </button>
    </div>
  );
}

export default Counter;
