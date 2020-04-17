import React, { Component } from 'react';
// import React, { setState, useState } from 'react';// these are hooks(setstate, and use state)
import logo from './logo.svg';
import './App.css';
import Radium, {StyleRoot} from 'radium';
import Person from './Person/Person';
import styled from 'styled-components'


const StyledButton = styled.button`

  background-color: ${props => props.alt ? 'red' : 'green'};
  color: white;
  font: inherit;
  border: 1px solid blue;
  padding: 8px;
  cursor: pointer;
  text-align: center;
  &:hover{
background-color : ${props => props.alt ? 'salmon' : 'lightgreen'};
color: red;
`;

//these are statefull/intelegent /container/smart component
class App extends Component {
  state = {
    persons: [
      { id: 'bsjaj1', name: 'max', age: 28 },
      { id: 'bsjaj2', name: 'avi', age: 21 },
      { id: 'bsjaj3', name: 'nsh', age: 289 },
    ],
    animals: [
      { name: 'max', age: 28 },
      { name: 'avi', age: 21 },
      { name: 'nsh', age: 289 },
    ],
    otherState: 'some other value',
    showPersons: false
  }
  switchNameHandler = (newName) => {
    // console.log('the button was clicked');
    // this.state.persons[0].name = 'maximum'; ///wont work
    this.setState({
      persons: [
        { name: newName, age: 77 },
        { name: 'as', age: 77 },
        { name: 'uuu', age: 77 },
      ]
    }
    )
  }
  
  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => p.id === id);
    const person  = {...this.state.persons[personIndex]};

    //alternative approach to spread operator;
    //const person  = Object.assign({}, this.state.persons[personIndex]);


    person.name=event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({
      persons: persons
    })
  }

  togglePersonHandler = () => {
  const doesShow = this.state.showPersons;
  this.setState({showPersons: !doesShow})
  }

  deletePersonHandler = (personIndex) => {
// const persons = this.state.persons;
//above is fine but creates a reference and will delete original data and mutable

// const persons = this.state.persons.slice();
//above is fine which uses slice without argument to copy the array , immutable fation


const persons = [...this.state.persons]
//above does the sma as slice but with a newer syntax called spread(three dot)  operator, t spreads the array and adds to the current array.
persons.splice(personIndex, 1);
this.setState({persons: persons})
  }

  render() {

    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      textAlign: 'center',
      ':hover':{
  backgroundColor : 'lightgreen',
  color: 'red'
}
      
    };



let persons = null;

if(this.state.showPersons){
  persons = (

  <div>
   {this.state.persons.map((person, index) => {
     return <Person 

     click={()=> this.deletePersonHandler(index)} 
     name={person.name}
     age ={person.age}
     key ={person.id}
     changed={(event) => this.nameChangeHandler(event, person.id)}
     />
   })}
  </div>

  );
style.backgroundColor = 'red';
style[':hover'] ={
backgroundColor : 'salmon',
color: 'black'
};

}
//let classes = ['red', 'bold'].join(' '); //static assignment of classes

const classes = [];
if(this.state.persons.length <=2){
  classes.push('red'); //classes = ['red']
}
if(this.state.persons.length <=1){
  classes.push('bold'); //classes = ['red','bold']
}


    return (

      <StyleRoot>

      <div className="App">
        <h1>Hi, this is h tag </h1>
        <p className={classes}>this is p tag</p>

        <Person />
        {/* <StyledButton alt= {this.state.showPersons}
          key = '1' //this is required if there are multiple lements using radium
          onClick={this.togglePersonHandler}>Toggle Persons
          </StyledButton> */}
          //use styled button if using styled component


        <button className="button"
          key = '1' //this is required if there are multiple lements using radium
          onClick={this.togglePersonHandler}>Toggle Persons
          </button>


        <button
          style={style}
          key = '2' //this is required if there are multiple lements using radium

          onClick={this.switchNameHandler.bind(this, 'dhdhsd')} >Switch name
          </button>



        {persons}
      {/* we could have used ternary operator, instaed of moving ther persons div out of return, as we cannot use scoped condition here */}






        {/* putiing '()' after switchnamehaldler will execute it instatly without click event, like a function call, so avoid it. */}
        {/* <Person name={this.state.persons[0].name} age={this.state.persons[0].age} click={() => this.switchNameHandler('mamamam!!!!')} /> */}
        {/* above is an alternative to bind, not recomended over bind */}
        {/* <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, 'guu')}
          changed={this.nameChangeHandler}
        /> */}
        {/* <Person name="avi2" age="45" click={this.switchNameHandler.bind(this, 'fgt')}>My hobbier: racing</Person> */}
        {/* self closing tag */}

        
      </div>
      </StyleRoot>

    );

    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null,'Hi, I\'m someone'));
  }
}
// the above is one way to use component, class based, below we wiil use functional one


// const App = props => {
//   // below we are using array destructuring, as the use state returns an array of 2
//   const [personsState, setPersonsState] = useState({
//     persons: [
//       { name: 'askjkk', age: 77 },
//       { name: 'as', age: 77 },
//       { name: 'uuu', age: 77 },
//     ],
//     animals: [
//             { name: 'max', age: 28 },
//             { name: 'avi', age: 21 },
//             { name: 'nsh', age: 289 },
//           ]
//   })

//   const switchNameHandler = () => {
//     // console.log('the button was clicked');
//     // this.state.persons[0].name = 'maximum'; ///wont work
//     setPersonsState({
//       persons: [
//         { name: 'as', age: 77 },
//         { name: 'as', age: 77 },
//         { name: 'uuu', age: 77 },
//       ]
//     }
//     )
//   }
//   //here we do not put animal array, means this functional way of defining componnt will overwrite the previous state and the new state will not have animal array, whereas in class based system it is merged rather than overwriten, that is one bif diffrence.



//   return (
//     <div className="App">
//       <h1>Hi </h1>
//       <p> jj</p>
//       <Person />
//       <Person />
//       <Person />
//       <button onClick={switchNameHandler} >Switch name</button>
//       {/* puting '()' after switchnamehaldler will execute it instatly without click event, like a function call, so avoid it. */}
//       <Person name={personsState.persons[0].name} age={personsState.persons[0].age} />
//       <Person name="avi2" age="45">My hobbier: racing</Person>
//       <Person />
//       {/* self closing tag */}
//     </div>
//   );
//   //see there is no render in functional type

//   // return React.createElement('div', {className: 'App'}, React.createElement('h1', null,'Hi, I\'m someone'));

// }

export default Radium(App);
