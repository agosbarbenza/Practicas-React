import React, { Component } from 'react';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { id:1, name: 'Max', age: 28 },
      { id:2, name: 'Manu', age: 29 },
      { id:3, name: 'Stephanie', age: 26 }
    ],
    otherState: 'some other value',
    showPersons: false
  }

  switchNameHandler = (newName) => {
    // console.log('Was clicked!');
    // DON'T DO THIS: this.state.persons[0] id:1.name = 'Maximilian';
    this.setState( {
      persons: [
        { id:1, name: newName, age: 28 },
        { id:2, name: 'Manu', age: 29 },
        { id:3, name: 'Stephanie', age: 27 }
      ]
    } )
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p=>{
      return p.id === id;
    })

    const person = {
      ...this.state.persons[personIndex]
    
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState( {persons: persons} )
  }

  togglePersonsHandler = () =>  {
    const doesShow = this.state.showPersons;
    this.setState({showPersons : !doesShow});// cuando hace click cambia el estado de showPersons

  }

  deletePersonHandler = (personIndex)=>{
    //const persons = this.state.persons;
    const persons = [...this.state.persons];
    persons.splice(personIndex,1);
    this.setState(
      {persons: persons}
    )
  }

  render () {
    let persons = null;

    if(this.state.showPersons){
      persons = (<div>
        {this.state.persons.map((person, index) =>{
          return <Person 
          click={()=>{this.deletePersonHandler(index)}} 
          name={person.name} 
          age={person.age}
          key={person.id}
          changed={(event)=>{this.nameChangedHandler(event, person.id)}} />
        })}
        </div>)
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button onClick={this.togglePersonsHandler}>Switch Name</button>
        {persons}        
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;
