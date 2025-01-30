import React from 'react'
import ComponentA from './ComponentA'
import { createContext } from 'react'

const Props = () => {
  return (
    <div>
      <ComponentA name="Raj" age="24"/>
      <ComponentA name="Suman" age="22"/>
      <ComponentA name="Satish" age="21"/>
    </div>
  )
}

export default Props
