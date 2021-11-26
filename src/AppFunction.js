import React, { useState, useEffect } from "react";
import "C:/work/touchsoft/react-counter/src/style.css";

const App = () => {
    const [count, setCount] = useState(0);
    const [parity, setParity] = useState("Число равно нулю");

    const increment = () => {
        setCount(count + 1)
    }

    const decrement = () => {
        if (count > 0) {
            setCount(count - 1)
        }
    }

    const reset = () => {
        setCount(0)
    }

    useEffect(() => {
        if(count % 2 === 0 && count !== 0) {
            setParity("Число чётное")
            document.body.style.backgroundColor = "rgb(61, 61, 172)"
          } else if (count % 2 !== 0 && count !== 0) {
              setParity("Число нечётное")
              document.body.style.backgroundColor = "rgb(165, 79, 79)"
            } else {
                setParity("Число равно нулю")
                document.body.style.backgroundColor = "rgb(175, 170, 170)"
          }
    });

    return (
        <div className="app">
        <div className="flex">
          <div className="count">
            <h1>{count}</h1>
          </div>
          <div className="table">
              <p>{ parity }</p>
          </div>
          <div className = "buttons">
            <button onClick = { decrement }>-</button>
            <button onClick = { reset }>Reset</button>
            <button onClick = { increment }>+</button>
          </div>
        </div>
      </div>
    )
}

export default App;