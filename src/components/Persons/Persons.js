import React, {Component} from 'react';
import Person from './Person/Person'


class Persons extends Component {
  // static getDerivedStateFromProps(props, state){
  //   console.log('[App.js] getDerivedStateFromProps', props);
  //   return state;
  // }

  shouldComponentUpdate(nextprops, nextstate){
console.log('[Persons.js] shouldComponentUpdate');
return true;
  }

  getSnapshotBeforeUpdate(prevprops, prevstate){
console.log('[Persons.js] getSnapShotBeforeUpdate');
return null;
  }


  componentDidUpdate(){
    console.log('[Persons.js] compnentDidupdate')
  }


render(){
  console.log('[Persons.js] rendering...')
  return this.props.persons.map((person,index)=>{
        return <Person
          click={() => this.props.clicked(index)}
          name={person.name}
          age={person.age}
          key={person.key}
          changed={(event) => this.props.changed(event, person.id)}
        />
      });
}
}


// const persons = (props) => {
//   console.log('[Persons.js] rendering...')
//   return props.persons.map((person,index)=>{
//         return <Persons
//           click={() => props.clicked(index)}
//           name={person.name}
//           age={person.age}
//           key={person.key}
//           changed={(event) => props.changed(event, person.id)}
//         />
//       });
//     };
export default Persons;