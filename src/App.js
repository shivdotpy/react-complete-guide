import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {


  state = {
    persons: [
      {
        name: 'shiv',
        age: 10
      },
      {
        name: 'pilpi',
        age: 15
      },
      {
        name: 'bavek',
        age: 20
      }
    ]

  }

  switchNameHandler  = () => {
    console.log('was clicked!')
  }

  render() {
    return (
      <div className="App">
        <h1>Hi I am a react app</h1>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}></Person>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>My Hobbies: Racing</Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}></Person>
      </div>
    );
  }
}

export default App;
