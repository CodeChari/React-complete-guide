import React from 'react';
import classes from './Person.css';
import Radium from 'radium';
import styled from 'styled-components';

// const person = function(){

// }

const StyledDiv = styled.div`
width: 60%;
margin: 16px;
border: 1px solid gray;
box-shadow: 0 2px 3px green;
padding: 16px;
text-align: center;

'@media (min-width: 500px)':{
    width: '450px',        }
}
`;

 

//this is a stateless/presentational/dumb component
const person = (props) => {
    // return <p>I'm {props.name} and I am {props.age} years old</p>


//demonstartion of error handling Below nothing to ddo with project
const rnd = Math.random();
if(rnd >0.9){
    throw new Error('Something went wrong');
}
//demonstartion of error handling above



    const style ={
        '@media (min-width: 500px)':{
            width: '450px',        }
    }
    return (
        <div className={classes.Person}>
         {/* <StyledDiv> */}
            <p onClick={props.click} >I'm {props.name} and I am {props.age} years old</p>
            <p>{props.children}</p>
            <input type='text' onChange={props.changed} value={props.name}></input>
             {/* </StyledDiv> */}
         </div>
    )
}


// when using class based component, we have to use this.props

export default Radium(person);