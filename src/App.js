import React, { Component } from 'react';
// import React, { setState, useState } from 'react';// these are hooks(setstate, and use state)
import logo from './logo.svg';
import './App.css';

import Person from './Person/Person'


//these are statefull/intelegent /container/smart component
class App extends Component {
  state = {
    persons: [
      { name: 'max', age: 28 },
      { name: 'avi', age: 21 },
      { name: 'nsh', age: 289 },
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
  
  nameChangeHandler = (event) => {
    this.setState({
      persons: [
        { name: 'max1', age: 28 },
        { name: event.target.value, age: 21 },
        { name: 'max2', age: 280 },
      ]
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
      backgroudColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      align: 'center'

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
     />
   })}
  </div>

  );
}


    return (
      <div className="App">
        <h1>Hi, this is h tag </h1>
        <p>this is p tag</p>

        <Person />
        <button
          style={style}
          onClick={this.togglePersonHandler}>Toggle Persons</button>
        <button
          style={style}
          onClick={this.switchNameHandler.bind(this, 'dhdhsd')} >Switch name</button>

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

export default App;
