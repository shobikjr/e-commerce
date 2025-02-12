import React,{useEffect, useState} from 'react'

const UseState = () => {
  const [name,setName]=useState("name");
  const [counter, setCounter] = useState(0);
  useEffect(()=>{
    console.log(`the value is ${counter}`);
  },[counter],name);
  

  //const [counter1, setCounter1] = useState(100);
    return (

    <div>
      {name}
      <h1>{`the value is ${counter}`}</h1>

      <h1>{counter}</h1>
      {
        counter>0 ?
        <button  onClick={()=>setCounter(counter - 1)}>click to decrease</button>:""
      }
    {
     counter<10 ?
        <button  onClick={()=>setCounter(counter + 1)}>click to increase</button>:""
    }

    
    </div>
  )
}

export default UseState
