
import React from 'react';

import './Person.css';

const person = (props) => {
  return(
    <div className='Person' >
    <p> I'm { props.name } { props.title } { props.age } </p>
    <p> { props.children }</p>
    <input type="text" onChanged={props.changed} value ={props.name}/>
    </div>
  )

};
export default person;
