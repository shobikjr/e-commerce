import React from 'react'
import ComponentA from './ComponentA'

const ComponentC = ({name, age}) => {
  return (
    <div>
     Component C
     <div>Name from C: {name}</div>
     <div>Age from C: {age}</div>
    
    </div>
  )
}

export default ComponentC
