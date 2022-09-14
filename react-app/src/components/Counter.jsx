import React, {useState} from 'react'
import "./styles.css"

const Counter = () => {
  const [count, setCount] = useState(0);
 
  const reset = () =>{
    setCount(0)
  }
  
  return (
    
    <div className="counter-div">
      <h1 className="counter">Counter</h1>
      <span className="output">{count}</span>
      <div className="container">
        <button className="btn" onClick={() => setCount(count+1)}>+</button>
        <button className="btn" onClick={() => setCount(count-1)}>-</button>
        <button className="reset-btn" onClick={reset}>Reset</button>
      </div>
    </div>
  )
}

export default Counter
