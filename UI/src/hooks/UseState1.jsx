import React,{useState} from 'react'

const UseState1 = () => {
    const [counter, setCounter] = useState(1);
  return (
    <div>
      
      <h1>{`the value is ${counter}`}</h1>

      <h1>{counter}</h1>
      
        
        <button  onClick={()=>setCounter(counter*2)}>click to multiply</button>
      
    
    
        <button  onClick={()=>setCounter(counter /2)}>click to divide</button>
    
    </div>
  )
}

export default UseState1
