import React, { Component } from 'react';
// import React, { setState, useState } from 'react';// these are hooks(setstate, and use state)
import logo from '../assets/logo.svg';
import classes from './App.css';
import Radium, { StyleRoot } from 'radium';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import styled from 'styled-components';
// import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';

const newName = "new name";

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

  constructor(props){
    super(props);
    console.log('[App.js] constructor');
  }
  state = {
    persons: [
      { id: 'bsjaj1', name: 'max', age: 28 },
      { id: 'bsjaj2', name: 'avi', age: 21 },
      { id: 'bsjaj3', name: 'nsh', age: 28 },
    ],
    animals: [
      { name: 'max', age: 28 },
      { name: 'avi', age: 21 },
      { name: 'nsh', age: 289 },
    ],
    otherState: 'some other value',
    showPersons: false
  }

  static getDerivedStateFromProps(props, state){
    console.log('[App.js] getDerivedStateFromProps', props);
    return state;
  }


  componentDidMount(){
    console.log('[App.js] componentDidMount');
  }

  shouldComponentUpdate(){
    console.log('[App.js], shouldComponentUpdate');
    return true; 
  }

  componentDidUpdate(){
    console.log('[App.js] componentDidUpdate');
  }

  //component will mount is deprecated
// componentWillMount(){
//   console.log('[App.js] componentWillMount');
// }


  switchNameHandler = (newName) => {
    // console.log('the button was clicked');
    // this.state.persons[0].name = 'maximum'; ///wont work
    this.setState({
      persons: [
        { id: '34', name: 'som1', age: 280 },
      { id: '89', name: 'som2', age: 210 },
      { id: '98', name: 'some3', age: 289 },
      ]
    }
    )
  }

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => p.id === id);
    const person = { ...this.state.persons[personIndex] };

    //alternative approach to spread operator;
    //const person  = Object.assign({}, this.state.persons[personIndex]);


    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({
      persons: persons
    })
  }

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow })
  }

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons;
    //above is fine but creates a reference and will delete original data and mutable

    // const persons = this.state.persons.slice();
    //above is fine which uses slice without argument to copy the array , immutable fation


    const persons = [...this.state.persons]
    //above does the sma as slice but with a newer syntax called spread(three dot)  operator, t spreads the array and adds to the current array.
    persons.splice(personIndex, 1);
    this.setState({ persons: persons })
  }

  render() {
console.log('[App.js] render');
    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      textAlign: 'center',
      ':hover': {
        backgroundColor: 'lightgreen',
        color: 'red'
      }

    };


    let persons = null;

    if (this.state.showPersons) {
      persons = <Persons
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangeHandler}
          />
    }

    

    return (
      <StyleRoot>
        <div className={classes.App}>
          <Cockpit
          appTitle = {this.props.appTitle}
          showperson={this.state.showperson}
          persons={this.state.showPersons}
          clicked={this.togglePersonHandler}
          changed={this.switchNameHandler}
          />
         </div>
         {persons}
      </StyleRoot>
    );

  }
}

export default Radium(App);
