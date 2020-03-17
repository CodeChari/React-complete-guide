import React from 'react';
import './Person.css';



// const person = function(){

// }

//this is a stateless/presentational/dumb component
const person = (props) => {
    // return <p>I'm {props.name} and I am {props.age} years old</p>
    return (
        <div className = 'Person'>
            <p onClick={props.click} >I'm {props.name} and I am {props.age} years old</p>
            <p>{props.children}</p>
            <input type='text' onChange={props.changed} value={props.name}></input>
        </div>
    )
}


// when using class based component, we have to use this.props

export default person;