import React from 'react'
import ComponentB from './ComponentB';

// const ComponentA = (props) => {
//     const{name, age} = props;
//   return (
//     <div>
//         {console.log(props)}
//       <h1>Name:{name}</h1>
//       <h2>Age:{age}</h2>
//     </div>
//   );
// };

const ComponentA = ({name,age}) => {

  return (
    <div>
        
      <h1>Name:{name}</h1>
      <h2>Age:{age}</h2>
      <ComponentB name={name} age={age}/>

    </div>
  );
};

export default ComponentA
