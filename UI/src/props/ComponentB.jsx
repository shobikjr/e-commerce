import React from 'react'
import ComponentC from './ComponentC'

const ComponentB = ({name,age}) => {
  return (
    <div>
     Component B
     <div>Name from B:{name}</div>
     <div>Age from B:{age}</div>
     <ComponentC name = {name} age = {age}/>
    </div>
  )
}

export default ComponentB
