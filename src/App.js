import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi I am a react app</h1>
        <Person name="Max" age="28"></Person>
        <Person name="shiv" age="10">My Hobbies: Racing</Person>
        <Person name="Pilpi" age="300"></Person>
      </div>
    );
  }
}

export default App;
  