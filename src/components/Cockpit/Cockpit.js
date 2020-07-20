import React, { useEffect } from 'react';
import classes from './Cockpit.css'



const Cockpit = (props) => {
  useEffect(() => {
    console.log('[Cockpit.js] use Effect');
    setTimeout(() => {
      alert('Saved data to cloud');
    }, 1000);
  }, [props.persons]);



  let btnClass = '';

  if (props.showPersons) {
    btnClass = classes.red;
  }

  const assignedClasses = [];
  if (props.persons.length <= 2) {
    assignedClasses.push(classes.red); //classes = ['red']
  }

  if (props.persons.length <= 1) {
    assignedClasses.push(classes.bold); //classes = ['boldred','bold']
  }

  return (
    <div className={classes.Cockpit}>
      <h1>{props.appTitle}</h1>
      <p className={assignedClasses.join(' ')}>this is p tag</p>
      <button className={btnClass}
        key='1' //this is required if there are multiple lements using radium
        onClick={props.clicked}>Toggle Persons
        </button>
      <button className={btnClass}
        key='2' //this is required if there are multiple lements using radium
        onClick={props.changed}>Change Names
        </button>
    </div>
  );
};

export default Cockpit;